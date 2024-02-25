import React, { type ReactElement, useState } from 'react'
import './style.css'
import clsx from 'clsx'

const Temperature = (): ReactElement => {
  const [temperature, setTemperature] = useState<number>(7)

  const temperatureClassName = clsx(
    'border',
    'border-primary',
    'rounded-3',
    'p',
    'mb-3',
    'text-center',
    'transition',
    {
      'bg-danger text-white': temperature > 12,
      'bg-warning text-dark': temperature > 9 && temperature <= 12,
      'bg-success text-white': temperature > 6 && temperature <= 9,
      'bg-info text-dark': temperature > 3 && temperature <= 6,
      'bg-light text-dark': temperature <= 3
    }
  )

  const handleChangeTemperature = (value: number): void => {
    setTemperature(temperature + value)
  }

  const renderTemperature = (): ReactElement => (
    <div className={temperatureClassName}>
      <div className="temperature h1 m-0">{temperature}℃</div>
    </div>
  )

  const renderButtons = (): ReactElement => (
    <div className="d-flex justify-content-center btn-group">
      <button onClick={() => handleChangeTemperature(-1)} type="button" className="btn btn-primary fw-bold">-</button>
      <button onClick={() => handleChangeTemperature(1)} type="button" className="btn btn-primary fw-bold">+</button>
    </div>
  )

  return (
    <div className="card p-5 rounded-4">
      <h5 className="card-title text-center mb-3 h2">Temperature</h5>
      {renderTemperature()}
      {renderButtons()}
    </div>

  )
}

export default Temperature
