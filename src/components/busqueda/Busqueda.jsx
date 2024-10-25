import React, { useContext, useState } from 'react'
import { AuthContext } from '../../auth/authContext'

export const Busqueda = () => {

  const[input, setInput] = useState('')
  const {setSearch}  = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault() 

    if (input !== '') {
      setSearch(input)
    }

    
  }

  return (
    <>
    <form className='flex justify-end gap-3 mt-2' onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Rapido y Furioso'
        autoComplete='off'
        className='block w-3/4 rounded-md p-1 text-gray-900 placeholder:text-gray-400 outline-none'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        />
      <button type='submit' className='w-20 h-10 rounded-lg bg-[#e50914]'>Buscar</button>
    </form>
    </>
  )
}
