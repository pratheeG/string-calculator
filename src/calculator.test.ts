import { Calculator } from './calculator';

describe('Calculator', () => {
    const calculator = new Calculator();
    describe('Add', ()=>{
        it('should return zero if the passed string is blank', () => {
            const totalSum = calculator.add('');
            expect(totalSum).toBe(0);
        })
        it('should add the numbers with the delimeter comma', () => {
            const totalSum = calculator.add('1,3');
            expect(totalSum).toBe(4);
        })
        it('should add the numbers with the delimeter comma & \n', () => {
            const totalSum = calculator.add('1,3\n6');
            expect(totalSum).toBe(10);
        })
    });
});