import { use, useState } from 'react'


function App() {

  const [valor,setValor] = useState(0);
  const [numeroIngresado,setNumeroIngresado] = useState(0);
  const valorNumericoContador = 0;
  return (
    <>
    <button  onClick={()=>{
        if(valor==20){
          
        }else{
          setValor(valor+1);
        }

    }}> boton sumar
    </button>
    <button onClick={() => {
      if(valor<=0){
        
      }else{ 
        setValor(valor -1)}
     
    }}>
      Restar 
    </button>

    <button onClick={() =>{
      setValor(0);
    }}>Reiniciar

    </button>

  

    <input type="text"  onChange={(e) => {setNumeroIngresado(e.target.value)}}/>

      <button onClick={() => {
        const valorNu= numeroIngresado;
        setValor(valorNu);
      }}>
        agregarValor
      </button>
       <p>{valor}</p>
    </>

    
  )
}

export default App
