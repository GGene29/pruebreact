// eslint-disable-next-line no-unused-vars
import React from 'react'

function Target() {
    return (
        <main className="bg-white px-10 py-5">    
            <section className="flex justify-center">
                {/* <div className="">
                    <h1 className="text-3xl font-bold underline text-secondcolor">TURISMO</h1>
                    <h1 className="text-3xl font-bold underline text-onecolor">ECOLÓGICO</h1>
                </div> */}
                <div className="grid grid-cols-3 gap-6">    
                    <div className="bg-white shadow-lg py-8 px-6">
                        <img src="#" alt="Arbolito"/>
                        <h3>Ecologia</h3>
                    </div>
                    <div className="shadow-lg bg-white py-8 px-6">
                        <img src="#" alt="Manos"/>
                        <h3>Compromiso</h3>
                    </div>
                    <div className="shadow-lg bg-white py-8 px-6">
                        <img src="#" alt="Bombillos"/>
                        <h3>Innovación</h3>
                    </div>
                </div>    
            </section>
        </main>
    )
}

export default Target