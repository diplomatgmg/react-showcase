import React, { type ChangeEvent, type ReactElement, useRef, useState } from 'react'
import countries from './countries'
import Card from '../components/Card'
import './style.css'

const SearchFilter = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [input, setInput] = useState<string>('')
  const [countrySelected, setCountrySelected] = useState<boolean>(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
    setCountrySelected(false)
  }

  const handleClearInput = (): void => {
    inputRef?.current?.focus()
    setInput('')
    setCountrySelected(false)
  }

  const handleSelectCountry = (country: string): void => {
    setInput(country)
    setCountrySelected(true)
  }

  const filteredCountries = countries.filter(country => {
    if (countrySelected) {
      return false
    }

    return country.toLowerCase().includes(input.toLowerCase())
  })

  const renderCountries = (): ReactElement | null => {
    if (!countrySelected && filteredCountries.length === 0) {
      return <div>Страна не найдена...</div>
    }
    return (
      <ul id="resultList" className="list-group mt-3 scrollable-list">
        {filteredCountries.map(country => (
          <li onClick={() => handleSelectCountry(country)}
              key={country}
              className="list-group-item list-group-item-action">
            {country}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <Card name={'SearchFilter'} widthClass={'col-md-3'}>
      <div className="input-group mb-3">
        <input type="text"
               value={input}
               onChange={handleInput}
               ref={inputRef}
               placeholder="Filter..."
               className="form-control"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"/>
        <button onClick={handleClearInput} className="btn btn-primary" type="button">X</button>
      </div>

      {renderCountries()}
    </Card>
  )
}

export default SearchFilter
