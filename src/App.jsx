import {useState} from 'react'
import Header from "./components/Header"
import Button from './components/Button';

function App() {
// Antes del return para variables
// Logica

//  y despues del return o dentro 
// de el lo que vamos a ver o los templates a usar
  const [cantidad, setCantidad] = useState(1); 

  const MIN = 0;
  const MAX = 1000;
  
  console.log(cantidad)

  function handleChange(e) {
    setCantidad(+e.target.value);

  }

// arreglos nombre de variable y luego algo relacionado que es la funcion que lo cambia, como lo hace set

// la funcion solo modifica a su variable dentro del arreglo y nombres coherentes
  return (
    
    <div className="my-20 max-w-lg mx-auto bg-transparent hover:bg-slate-100 shadow p-10">
      <Header />
      
      <input 
        type='range'
        className="w-full h-4 bg-blue-400 accent-blue-500 hover:accent-purple-600"
        onChange = {handleChange}
        min={MIN}
        max={MAX} 
        // step={STEP}
        value={cantidad}
      />
      <Button></Button>
      
     
      <p 
        className='py-5 px-5 flex justify-center font-black'>
        {cantidad}
        
      </p> 
      
    </div>





// Esta es una de las maneras de poder tener distintas etiquetas con diferentes funcionalidades, estas estas agrupadas por un Fragment o <> </> con la finalidad de que el componenete final retornado sea todo el contenido de este. =============================================

    // <>
    //   <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
    //     <h1 className="text-3xl font-extrabold text-indigo-600 bg-slate-200">Primer componente de react</h1>
    //   </div>
    //   <div className="text-gray-600 bg-neutral-50">
    //     {hola}
    //   </div>
      
    // </>
  )
}

export default App
// En el return se pueden usar las etiquetas html pero no todas las funciones de JS
