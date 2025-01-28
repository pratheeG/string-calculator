export class Calculator {
    allowedMaxNumber = 1000;
    private getNumbers(numbers: string): number[] {
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
        const parsedNumbers = numbers.split(',').map(Number);
        return parsedNumbers.filter(num => num <= this.allowedMaxNumber);
    }
    
    private validateNumbers(numbers: number[]): boolean {
        const negativeNumbers = numbers.filter(number => number < 0)
        if (negativeNumbers.length) {
            throw new Error(`Invalid Numbers -> ${negativeNumbers.toString()}`);
        }
        return true;
    }

    add(numbers: string): number {
        if (!numbers) return 0;
        const parsedNumbers = this.getNumbers(numbers);
        this.validateNumbers(parsedNumbers);
        return this.getNumbers(numbers).reduce((a, b) => a + b, 0);
    }
}