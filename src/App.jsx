import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Button from './components/Button';
import { formatearDinero,calcularTotalPagar } from './helpers';

function App() {
  //AQUI SOLO VA JAVASCRIPT
  const [cantidad, setCantidad] = useState(1000000);
  const [meses,setMeses] = useState(6);
  const [total, setTotal] = useState(calcularTotalPagar(cantidad, meses));

  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);
  },[cantidad, meses]);

  const min = 0;
  const max = 2000000;
  const step = 1000;
  
  function handleChange(e){
    setCantidad(+e.target.value) //El sigono + hace como un parseInt y convierte el string a Number
  }

  function handleClickDecremento(){
    const valor = cantidad - step;
    if(valor < min){
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento(){
    const valor = cantidad + step;
    if(valor > max){
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  return ( //HTML Y CSS
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10 text-center'>
      <Header/>

      <div className='flex justify-between my-6'>
        <Button
          operador = '-'
          fn={handleClickDecremento}
        />

        <Button 
          operador = '+'
          fn = {handleClickIncremento}
        />
      </div>

      <input type='range' 
      className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-500'
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      value={cantidad}
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{formatearDinero(cantidad)}</p>

      <h2 className='text-4xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>plazo</span> a pagar
      </h2>

      <select className='mt-6 w-full p-2 bg-white border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
      value={meses}
      onChange={e =>setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-100 p-5'>
      <h2 className='text-4xl font-extrabold text-gray-500 text-center'>
        Resumen <span className='text-indigo-600'>de pagos</span>
      </h2>
      <p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
      <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
      </div>

    </div>
  )
}

export default App