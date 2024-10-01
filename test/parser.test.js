import Parser from '../src/parser.js';
import { expect } from 'chai';

describe('Parser', () => {
  const parser = new Parser();

  it('should correctly parse a simple addition expression', () => {
    const result = parser.parse('2 + 3');
    expect(result).to.deep.equal(['2', '+', '3']);
  });

  it('should correctly parse a complex expression with different operators', () => {
    const result = parser.parse('2 + 3 * 4 - 5 / 2');
    expect(result).to.deep.equal(['2', '+', '3', '*', '4', '-', '5', '/', '2']);
  });

  it('should correctly parse an expression with parentheses', () => {
    const result = parser.parse('(2 + 3) * 4');
    expect(result).to.deep.equal(['2', '3', '+', '4', '*']);
  });

  it('should correctly handle operator precedence in an expression with parentheses', () => {
    const result = parser.parse('2 + (3 * 4)');
    expect(result).to.deep.equal(['2', '3', '4', '*', '+']);
  });

  it('should correctly handle multiple parentheses', () => {
    const result = parser.parse('(2 + 3) * (4 - 5)');
    expect(result).to.deep.equal(['2', '3', '+', '4', '5', '-', '*']);
  });

  it('should correctly parse decimal numbers', () => {
    const result = parser.parse('2.5 + 3.75');
    expect(result).to.deep.equal(['2.5', '+', '3.75']);
  });

  it('should correctly parse negative numbers', () => {
    const result = parser.parse('-2 + 3');
    expect(result).to.deep.equal(['-2', '+', '3']);
  });
});