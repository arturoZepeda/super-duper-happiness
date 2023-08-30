export default function useClima() {
   const obtenerClima = ({ciudad, pais}) => {
        console.log("llego aqui")
        console.log(ciudad);
        console.log(pais);
        /*const apikey = 'c7a361796fa1bec3e2002589f9f84b4c';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();*/
   }
    

    return {
        obtenerClima
    }
}