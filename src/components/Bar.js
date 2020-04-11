import React, { useState } from 'react'
import countries from '../Countries'
import Results from './Results'
// import useSearchTerm from '../hooks/useSearchTerm'

const Bar = () => {
  // const { searchTerm, handleSetSearchTerm } = useSearchTerm()
  const [searchTerm, setSearchTerm] = useState('')
  const [focussed, setFocussed] = useState(false)
  const [results, setResults] = useState([])
  const [hasSelected, setHasSelected] = useState(false)

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

  const updateInputValue = (value) =>
    setSearchTerm(value)

  const updateHasSelected = () =>
    setHasSelected(true)

  const clearResults = () =>
    setResults([])

  return (
    <div className={"Bar a-fade-in-up " + ((results.length > 0) ? 'Bar--has-results' : '') + ((hasSelected) ? 'Bar--has-selected' : '')}>
      <Results
        results={results}
        updateInputValue={updateInputValue}
        clearResults={clearResults}
        updateHasSelected={updateHasSelected}
      />
      <div className="Bar__inner">  
        <div className="Bar__icon">
          <div className={"Bar__icon-search "  + (focussed ? 'dark' : '')}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999">
              <g>
                <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
                  S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
                  c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
                  c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/>
              </g>
            </svg>
          </div>
          <button className={"Bar__icon-clear u-btn-clear "  + (focussed ? 'dark' : '')}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 409.806 409.806">
              <g>
                <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
                  c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
                  c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
                  c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
                  c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
              </g>
            </svg>
          </button>
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
