import React from 'react'

function Button() {
  return (
    <div className='py-5 px-5 flex justify-center'>
        <button 
            type= 'button'
            className='text-white font-bold py-3 px-4 rounded-xl border-gray-2 bg-purple-500 hover:bg-purple-400' >Enviar
            </button>
    </div>
  )
}

export default Button