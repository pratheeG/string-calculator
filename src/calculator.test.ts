import { Calculator } from './calculator';

describe('Calculator', () => {
    const calculator = new Calculator();
    describe('Add', ()=>{
        it('should add the numbers', () => {
            const totalSum = calculator.add('1');
            expect(totalSum).toBe(1);
        })
    });
});