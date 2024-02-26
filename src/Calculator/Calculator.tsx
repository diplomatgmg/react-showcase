import React, { type ReactElement, useState } from 'react'
import Card from '../components/Card'
import { evaluate } from 'mathjs'
import './styles.css'

type Operator = '-' | '+' | '*' | '/'
const operators: Operator[] = ['-', '+', '*', '/']

const Calculator = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('0')

  const handleInputValue = (value: string): void => {
    setInputValue(inputValue === '0' ? '' + value : inputValue + value)
  }

  const handleClearExpression = (): void => {
    setInputValue('0')
  }

  const handleInputOperator = (operator: Operator): void => {
    const lastChar = inputValue.at(-1)

    if (operators.includes(lastChar as Operator)) {
      setInputValue(inputValue.slice(0, -1) + operator)
    } else {
      setInputValue(inputValue + operator)
    }
  }

  const calculateExpression = (): void => {
    const resultExpression = evaluate(inputValue)
    console.log(resultExpression)

    if (typeof resultExpression === 'number') {
      setInputValue(resultExpression.toString())
    }
  }

  return (
    <Card name={'Calculator'} widthClass={'col-md-3'}>
      <div className="calculator">
        <div className="expression">
          {inputValue}
        </div>
        <div className='calc-buttons'>
          <div className="calc-row">
            <button onClick={() => handleInputValue('7')} className="calc-white">7</button>
            <button onClick={() => handleInputValue('8')} className="calc-white">8</button>
            <button onClick={() => handleInputValue('9')} className="calc-white">9</button>
            <button onClick={() => handleInputOperator('/')} className="calc-orange">/</button>
          </div>
          <div className="calc-row">
            <button onClick={() => handleInputValue('4')} className="calc-white">4</button>
            <button onClick={() => handleInputValue('5')} className="calc-white">5</button>
            <button onClick={() => handleInputValue('6')} className="calc-white">6</button>
            <button onClick={() => handleInputOperator('*')} className="calc-orange" >x</button>
          </div>
          <div className="calc-row">
            <button onClick={() => handleInputValue('1')} className="calc-white">1</button>
            <button onClick={() => handleInputValue('2')} className="calc-white">2</button>
            <button onClick={() => handleInputValue('3')} className="calc-white">3</button>
            <button onClick={() => handleInputOperator('+')} className="calc-orange">+</button>
          </div>
          <div className="calc-row">
            <button className="calc-white">.</button>
            <button onClick={() => handleInputValue('0')} className="calc-white">0</button>
            <button onClick={calculateExpression} className="calc-white">=</button>
            <button onClick={() => handleInputOperator('-')} className="calc-orange">-</button>
          </div>
          <div className="calc-row">
            <button onClick={handleClearExpression} className="calc-clear">Clear</button>

          </div>
        </div>
      </div>
    </Card>
  )
}

export default Calculator
