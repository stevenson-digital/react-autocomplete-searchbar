import React, { useState } from 'react'
import countries from '../Countries'
import Results from './Results'

const Bar = () => {
  const [focussed, setFocussed] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const matchResults = (value) => {
    let results = []

    if (value.length > 0) {
      let regex = new RegExp(`^${value}`, 'i');
      results = countries.sort().filter(v => regex.test(v))
      setResults(results)
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
  
    setSearchTerm(value)
    matchResults(value)
    setFocussed((value.length > 0) ? true : false)
  }

  return (
    <div className="Bar">
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
        />
      </div>
    </div>
  )
}

export default Bar


// import React from 'react';
// import countries from '../Countries';

// export default class Bar extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             suggestions: [],
//             text: ''
//         }
//     }

//     onTextChange = (e) => {
//         const value = e.target.value;
//         let suggestions = [];
//         if(value.length > 0){
//             const regex = new RegExp(`^${value}`, 'i');
//             suggestions = countries.sort().filter(v => regex.test(v))
//         }

//         this.setState(() => ({
//             suggestions,
//             text: value
//         }))
//     }

//     selectedText(value) {
//         this.setState(() => ({
//             text: value,
//             suggestions: [],
//         }))
//     }

//     renderSuggestions = () => {
//         let { suggestions } = this.state;
//         if(suggestions.length === 0){
//             return null;
//         }
//         return (
//             <ul >
//                 {
//                     suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
//                 }
//             </ul>
//         );
//     }
    
//     render() {
//         const { text, suggestions } = this.state;
//         return(
//             <div id="notebooks">
//                 <h2>Auto Completed</h2>
//                 <input id="query" type="text" onChange={this.onTextChange} value={text}/>
//                 {this.renderSuggestions()}
//                 <span>Suggestions: {suggestions.length}</span>
//             </div>
//         );
//     }

// }