'use strict';

import getValue from './index';



/**
 * Extractor function for a UnaryExpression type value node.
 * A unary expression is an expression with a unary operator.
 * For example, !"foobar" will evaluate to false, so this will return false.
 *
 * @param - value - AST Value object with type `UnaryExpression`
 * @returns - The extracted value converted to correct type.
 */
export default function extractValueFromUnaryExpression(value) {
  const { operator, argument } = value;

  switch (operator) {
    case '-':
      return -getValue(argument);
    case '+':
      return +getValue(argument); // eslint-disable-line no-implicit-coercion
    case '!':
      return !getValue(argument);
    case '~':
      return ~getValue(argument);
    case 'typeof':
    case 'delete':
    case 'void':
    default:
      return undefined;
  }
}
