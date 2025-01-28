export class Calculator {
    add(numbers: string): number {
        if (!numbers) return 0;
        const delimeter = ',';
        return numbers.split(delimeter).map(Number).reduce((a, b) => a + b, 0);
    }
}