import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DayWeather from './components/DayWeather/DayWeather';
import { Swiper, SwiperSide } from 'swiper/react';
import 'swiper/css';

const APIURL = "https://meteo-de-oscar.proxy.beeceptor.com"

function App() {

const limiteSuperior = 1000 // la compra no puede superar 1000 euros
const [counter,setCounter] = useState(0)
const [minusClickCounter, setMinusClickCounter] = useState(0)
const [plusClickCounter, setPlusClickCounter] = useState(0)

const [valorInput, setValorInput] = useState(0)
const [precioCompra, setPrecioCompra] = useState(0)
const [alerta, setAlerta] = useState("")

const [climaDias, setClimaDias] = useState()

// 0.0 shift + alt + arrow down para copiar elemento anterior
// 0.1 useEffect es como un escuchador que se ejecuta cuando el componente actúa
// 1.0 useEffect para cuando el componente cambia su estado

/* Ejemplo 1.0
 useEffect(()=>{
  console.log("Observador global")
})
useEffect(()=>{
  console.log("Observador minusClickCounter")
}, [minusClickCounter])
useEffect(()=>{
  console.log("Observador plusClickCounter")
}, [plusClickCounter]) */

  useEffect(()=>{
      if(precioCompra > limiteSuperior){
        setAlerta("Has superado el valor máximo")
      }
      else{
        setAlerta("")
      }
    },[precioCompra])

// 1.2 useEffect para cuando el componente se inicia

/* useEffect(()=>{
  console.log("Yo solo me ejecuto una vez")
},[]) */

  useEffect(()=> {
    axios
      .get(`${APIURL}/todosDias`)
      .then((result)=>{
        setClimaDias([result.data])
    })
  },[]) 

// 1.3 useEffect para cuando queremos hacer llamadas a la api




function substractCounter(){
  setCounter(counter-1)
  setMinusClickCounter(minusClickCounter+1)
}

function addCounter(){
  setCounter(counter+1)
  setPlusClickCounter(plusClickCounter+1)
}

  return (
  
  <div className="App">
    <section>
      <h1>Clima de la semana</h1>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {climaDias.length== 0?'Cargando ...':climaDias.map(dia=>{
          return (
        <SwiperSlide>
          <DayWeather day={dia} key={dia.diaSemana}></DayWeather>
        </SwiperSlide>
        )})}
     </Swiper>
    </section>


    <section>
      <fieldset>
        <legend>🛒 {precioCompra}</legend>
        <input defaultValue={0} type='number' onChange={(e)=> setValorInput(e.target.input)}></input>
        <button onClick={()=> setPrecioCompra(precioCompra+Number(valorInput))}>Añadir al carrito</button>
      </fieldset>
      <h5 style={{color: "red"}}>{alerta}</h5>
    </section>

    <h1>El valor del contador es: {counter}</h1>
    <button onClick={()=> setCounter(counter-1)}>-</button>
    <button onClick={()=> setCounter(counter+1)}>+</button>

    <h2>Has heco {minusClickCounter} veces en el botón de restar</h2>
    <h2>Has heco {plusClickCounter} veces en el botón de sumar</h2>

  </div>
  );
  }

export default App;
