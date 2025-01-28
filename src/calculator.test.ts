import { Calculator } from './calculator';

describe('Calculator', () => {
    const calculator = new Calculator();
    describe('Add', ()=>{
        it('should return zero if the passed string is blank', () => {
            const totalSum = calculator.add('');
            expect(totalSum).toBe(0);
        })
        it('should add the numbers with the delimiter comma', () => {
            const totalSum = calculator.add('1,3');
            expect(totalSum).toBe(4);
        })
        it('should add the numbers with the delimiter comma & \n', () => {
            const totalSum = calculator.add('1,3\n6');
            expect(totalSum).toBe(10);
        })
        it('should add the numbers with the delimiter comma & \n', () => {
            const totalSum = calculator.add('1,3\n6');
            expect(totalSum).toBe(10);
        })
        it('should add the numbers with the custom delimiter', () => {
            const totalSum = calculator.add('//;\n1;2;9');
            expect(totalSum).toBe(12);
        })
        it('should throw an exception when the numbers contain negative digits', () => {
            try {
                calculator.add('//;\n1;2;-9;-6')
            } catch (error) {
                expect(error.message).toBe('Invalid Numbers -> -9,-6');
            }
        });
        
        it('should add the numbers by skipping the max number', () => {
            const totalSum = calculator.add('//;\n1;2;9;1002');
            expect(totalSum).toBe(12);
        })

        it('should add the numbers by considering the delimiters of any length', () => {
            const totalSum = calculator.add('//[**]\n1**2**9**1002');
            expect(totalSum).toBe(12);
        })

        it('should add the numbers by with multiple delimiters', () => {
            const totalSum = calculator.add('//[*][&]\n1*2&9*1002');
            console.log('totalSum ', totalSum);
            expect(totalSum).toBe(12);
        })

    });
});