import React, { type ChangeEvent, type ReactElement, useState } from 'react'
import countries from './countries'
import Card from '../components/Card'
import './style.css'

const SearchFilter = (): ReactElement => {
  const [input, setInput] = useState<string>('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value)
  }

  const filteredCountries = countries.filter(country => {
    return country.toLowerCase().includes(input.toLowerCase())
  })

  return (
    <Card name={'SearchFilter'} widthClass={'col-md-3'}>
      <div className="input-group mb-3">
        <input type="text"
               value={input}
               onChange={handleInput}
               placeholder="Filter..."
               className="form-control"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"/>
        <button onClick={() => setInput('')} className="btn btn-outline-secondary" type="button">x</button>
      </div>
      <ul id="resultList" className="list-group mt-3 scrollable-list">
        {filteredCountries.map(country => <li onClick={() => setInput(country)} key={country} className="list-group-item list-group-item-action">{country}</li>)}
      </ul>
    </Card>
  )
}

export default SearchFilter
