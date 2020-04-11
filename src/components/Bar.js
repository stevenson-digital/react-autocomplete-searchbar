import React, { useState } from 'react'
import countries from '../Countries'
import Results from './Results'
import useSearchTerm from '../hooks/useSearchTerm'

const Bar = () => {
  const {searchTerm, handleSetSearchTerm} = useSearchTerm()
  const [focussed, setFocussed] = useState(false)
  const [results, setResults] = useState([])

  const matchResults = (value) => {
    let results = []

    if (value.length > 0) {
      let regex = new RegExp(`^${value}`, 'i');
      results = countries.sort().filter(v => regex.test(v))
      setResults(results)

    } else {
      setResults([])
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    
    handleSetSearchTerm(value)
    matchResults(value)
    setFocussed((value.length > 0) ? true : false)
  }

  return (
    <div className={"Bar " + ((results.length > 0) ? 'Bar--has-results' : '')}>
      <Results results={results} />
      <div className="Bar__inner">  
        <div className={"Bar__icon " + (focussed ? 'dark' : '')}>
          <svg></svg>
        </div>
        <input
          className="Bar__input"
          type="text"
          placeholder="Search" 
          onChange={handleInputChange}
          value={searchTerm || ''}
        />
      </div>
    </div>
  )
}

export default Bar
