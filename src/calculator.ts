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
    add(numbers: string): number {
        if (!numbers) return 0;
        return this.getNumbers(numbers).reduce((a, b) => a + b, 0);
    }
}