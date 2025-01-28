export class Calculator {
    private getNumbers(numbers: string): number[] {
        const delimeter = ',';
        return numbers.split(delimeter).map(Number);
    }
    add(numbers: string): number {
        if (!numbers) return 0;
        return this.getNumbers(numbers).reduce((a, b) => a + b, 0);
    }
}