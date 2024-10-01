import Calculator from '../src/calculator.js';
import { expect } from 'chai';

describe('Calculator', () => {
  const calculator = new Calculator();

  it('should add two numbers', () => {
    const result = calculator.calculate('2 + 2');
    expect(result).to.equal(4);
  });

  it('should subtract two numbers', () => {
    const result = calculator.calculate('5 - 3');
    expect(result).to.equal(2);
  });

  it('should multiply two numbers', () => {
    const result = calculator.calculate('4 * 2');
    expect(result).to.equal(8);
  });

  it('should divide two numbers', () => {
    const result = calculator.calculate('8 / 4');
    expect(result).to.equal(2);
  });

  it('should handle multiple operations', () => {
    const result = calculator.calculate('2 + 3 * 4');
    expect(result).to.equal(14);
  });

  it('should throw error on division by zero', () => {
    expect(() => calculator.calculate('10 / 0')).to.throw('Division by zero');
  });
});