import React from 'react'

const Results = (props) => {
  const { results } = props

  const renderResults = () => {
    if (results.length === 0)
      return null

    return (
      <ul>
        {
          results.map((item, index) => (
            <li
              key={index}
              onClick={() => this.selectedText(item)}
            >
              {item}
            </li>
            )
          )
        }
      </ul>
    )
  }

  return (
    <div className="Results">
      {renderResults()}
    </div>
  )
}

export default Results