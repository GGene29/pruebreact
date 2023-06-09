import React from 'react'

function Target() {
  return (
    <main class="bg-white px-10 py-5">    
            <section class="flex justify-center">
                {/* <div class="">
                    <h1 class="text-3xl font-bold underline text-secondcolor">TURISMO</h1>
                    <h1 class="text-3xl font-bold underline text-onecolor">ECOLÓGICO</h1>
                </div> */}
                <div class="space-y-5 bg-blue">    
                    <div class="bg-secondcolor">
                        <img src="#" alt="Arbolito"/>
                        <h3>Ecologia</h3>
                    </div>
                    <div class="text-onecolor shadow-lg bg-white">
                        <img src="#" alt="Manos"/>
                        <h3>Compromiso</h3>
                    </div>
                    <div class="text-onecolor shadow-lg bg-white">
                        <img src="#" alt="Bombillos"/>
                        <h3 class="text-onecolor bg-grey hover:bg-blue hover:text-white">Innovación</h3>
                    </div>
                </div>    
            </section>
        </main>
  )
}

export default Target