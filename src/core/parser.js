
class Parser {
    constructor() {
      this.operatorPrecedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
      };
    }
  
    parse(expression) {
      const outputQueue = [];
      const operatorStack = [];
      const tokens = expression.match(/(\d+(\.\d+)?|\+|\-|\*|\/|\(|\))/g);
  
      tokens.forEach((token) => {
        if (/\d/.test(token)) {
          // Числа отправляются прямо в выходную очередь
          outputQueue.push(token);
        } else if (/[+\-*/]/.test(token)) {
          // Операторы обрабатываются с учетом приоритета
          while (operatorStack.length &&
                 this.operatorPrecedence[operatorStack[operatorStack.length - 1]] >= this.operatorPrecedence[token]) {
            outputQueue.push(operatorStack.pop());
          }
          operatorStack.push(token);
        } else if (token === '(') {
          // Открывающая скобка всегда помещается в стек
          operatorStack.push(token);
        } else if (token === ')') {
          // Закрывающая скобка вызывает извлечение операторов до первой открывающей скобки
          while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
            outputQueue.push(operatorStack.pop());
          }
          operatorStack.pop(); // Удаляем открывающую скобку
        }
      });
  
      // Перемещаем оставшиеся операторы из стека в очередь
      while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
      }
  
      return outputQueue;
    }
  }
  
  export default Parser;