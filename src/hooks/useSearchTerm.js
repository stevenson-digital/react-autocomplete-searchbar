import React, {useState} from 'react'

const useSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSetSearchTerm = (value) => {
    setSearchTerm(value)
  }

  return {searchTerm, handleSetSearchTerm}
}

export default useSearchTerm