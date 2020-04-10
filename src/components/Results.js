import React from 'react'

const Results = (props) => {
  const { results } = props

  const renderResults = () => {
    if (results.length === 0)
      return null

    return (
      <ul className="Results__ul">
        {
          results.map((item, index) => (
              <li
                className="Results__li"
                key={index}
              >
                <button
                  className="Results__result u-btn-clear"
                  onClick={() => this.selectedText(item)}
                >
                  {item}
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
