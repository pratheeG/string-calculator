export class Calculator {
    allowedMaxNumber = 1000;
    private extractNumbers(numbers: string):number[] {
        let delimiters: string[] = ['\n'];
        if (numbers.startsWith('//')) {
            const [delimiterLine, remainingNumbers] = numbers.split('\n', 2);
            const customDelimiter = delimiterLine.slice(2);
            
            if (customDelimiter.startsWith('[') && customDelimiter.endsWith(']')) {
                delimiters = customDelimiter
                    .slice(1, -1) 
                    .split(']['); 
            } else {
                delimiters.push(customDelimiter);
            }

            numbers = remainingNumbers;
        }
        delimiters.forEach(delimiter => {
            while(numbers.indexOf(delimiter) > -1) {
                numbers = numbers.replace(delimiter, ',');
            }
        })
        return  numbers.split(',').map(Number);
    }

    private getNumbers(numbers: string): number[] {
        const parsedNumbers = this.extractNumbers(numbers);
        if (parsedNumbers.some((number) => isNaN(number))) {
            throw new Error('Invalid Input');
        }
        return parsedNumbers.filter(num => num <= this.allowedMaxNumber);
    }
    
    private checkForNegativeNumbers (numbers: number[]): boolean {
        const negativeNumbers = numbers.filter(number => number < 0)
        if (negativeNumbers.length) {
            throw new Error(`Invalid Numbers -> ${negativeNumbers.toString()}`);
        }
        return true;
    }

    add(numbers: string): number {
        if (!numbers) return 0;
        const parsedNumbers = this.getNumbers(numbers);
        this.checkForNegativeNumbers(parsedNumbers);
        return parsedNumbers.reduce((num1, num2) => num1 + num2, 0);
    }
}