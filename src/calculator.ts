export class Calculator {
    private getNumbers(numbers: string): number[] {
        let delimiter = /[,\n]/;
        if (numbers.startsWith('//')) {
            const [lineSeperator, splitedNumbers] = numbers.split('\n', 2);
            const customDelimiter = lineSeperator.slice(2);

            delimiter = new RegExp(`[${customDelimiter},\n]`, 'g');
            numbers = splitedNumbers;
        }
        return numbers.split(delimiter).map(Number);
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