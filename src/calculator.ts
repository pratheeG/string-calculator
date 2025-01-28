export class Calculator {
    allowedMaxNumber = 1000;
    private getNumbers(numbers: string): number[] {
        let delimiter = /[,\n]/;
        if (numbers.startsWith('//')) {
            const [lineSeperator, splitedNumbers] = numbers.split('\n', 2);
            const customDelimiter = lineSeperator.slice(2).replace(/\[|\]/g, '');

            delimiter = new RegExp(`[${customDelimiter}\n]`, 'g');
            numbers = splitedNumbers;
        }
        return numbers.split(delimiter).map(Number).filter(num => num <= this.allowedMaxNumber);
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