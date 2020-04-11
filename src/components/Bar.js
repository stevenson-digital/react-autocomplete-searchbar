import React, { useState } from 'react'
import countries from '../Countries'
import Results from './Results'
// import useSearchTerm from '../hooks/useSearchTerm'

const Bar = () => {
  // const { searchTerm, handleSetSearchTerm } = useSearchTerm()
  const [searchTerm, setSearchTerm] = useState('')
  const [focussed, setFocussed] = useState(false)
  const [results, setResults] = useState([])

  const matchResults = (value) => {
    let results = []

    if (value.length > 0) {
      let regex = new RegExp(`^${value}`, 'i');
      results = countries.sort().filter(v => regex.test(v))
      setResults(results)

    } else {
      clearResults()
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    
    setSearchTerm(value)
    matchResults(value)
    setFocussed((value.length > 0) ? true : false)
  }

  const updateInputValue = (value) => {
    setSearchTerm(value)
  }

  const clearResults = () => {
    setResults([])
  }

  return (
    <div className={"Bar a-fade-in-up " + ((results.length > 0) ? 'Bar--has-results' : '')}>
      <Results
        results={results}
        updateInputValue={updateInputValue}
        clearResults={clearResults}
      />
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
