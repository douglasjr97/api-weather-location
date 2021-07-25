import React,{Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import '../src/styles/estilo.css'

function App() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])

  if(location == false){
    return (
      <Fragment>
        Você precisa habilitar a localização no browser o/
      </Fragment>
    )
} else{

    return (
      <Fragment>
        <h3>Clima nas suas Coordenadas (Exemplo)</h3>
        <hr />
        <ul>
          <li>Temperatura atual: x°</li>
          <li>Temperatura máxima: x°</li>
          <li>Temperatura minima: x°</li>
          <li>Pressão: x hpa</li>
          <li>Umidade: x%</li>
        </ul>
      </Fragment>
    );
}

  return (
    <Fragment>
    <h3>Clima nas suas Coordenadas (Exemplo)</h3>
    <hr></hr>
    <ul>
      <li>Temperatura atual: x*</li>
      <li>Temperatura Máxima: x*</li>
      <li>Temperatura Minima: x*</li>
      <li>Pressão: x hpa</li>
      <li>Umidade: x</li>
    </ul>
    </Fragment>
  );
}

export default App;
