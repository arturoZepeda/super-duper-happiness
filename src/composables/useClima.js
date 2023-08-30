import axios from 'axios';
export default function useClima() {
   const obtenerClima = async ({ciudad, pais}) => {
        const apikey = import.meta.env.VITE_API_KEY;
        /*
        //Version 1
        //genero consulta para obtener el latitud y longitud de la ciudad
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${apikey}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        //extraigo latitud y longitud
        const {lat, lon} = resultado[0];
        //genero consulta para obtener el clima
        const url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const respuesta2 = await fetch(url2);
        const resultado2 = await respuesta2.json();
        return resultado2;
        */
        //Version 2 con axios
        try{
            //genero consulta para obtener el latitud y longitud de la ciudad con axios
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${apikey}`;
            const respuesta = await axios.get(url);
            //deestructuro latitud y longitud
            const {lat, lon} = respuesta.data[0];
            //genero consulta para obtener el clima
            const url2 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
            //deestructuro data en resultado
            const {data: resultado2} = await axios.get(url2);
            return resultado2;
        } catch (error) {
            console.log(error);
        }

   }
    

    return {
        obtenerClima
    }
}