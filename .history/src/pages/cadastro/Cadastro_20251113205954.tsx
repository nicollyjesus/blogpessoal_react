
import { useState } from "react";
 
function Contador() {
 
  // variavel de estado
  const [contador, setContador] =useState(0);
 
  function incrementar(){
    setContador(contador + 1);
   
  }
    function decrementar(){
    setContador(contador - 1);
   
  }
 
  return (
    <div>
      <h1>Componente Contador</h1>
      <p>Contador:  {contador}</p>
      <button onClick={decrementar}>Incrementar</button>
      <button onClick={incrementar}>Incrementar</button>
    </div>     
  )
}
 
export default Contador