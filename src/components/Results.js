import React from 'react'

const Results = (props) => {
  const { results, updateInputValue, clearResults, updateHasSelected } = props

  const selectResult = (result) => {
    updateInputValue(result)
    clearResults()
    updateHasSelected()
  }

  const renderResults = () => {
    if (results.length === 0)
      return null

    return (
      <ul className="Results__ul">
        {
          results.map((result, index) => (
              <li
                className="Results__li"
                key={index}
              >
                <button
                  className="Results__result u-btn-clear"
                  onClick={() => selectResult(result)}
                >
                  {result}
                </button>
              </li>
            )
          )
        }
      </ul>
    )
  }

  return (
    <div className={"Results " + ((results.length > 0) ? 'Results--populated' : '')}>
      {renderResults()}
    </div>
  )
}

export default Results
