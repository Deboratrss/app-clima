import { createContext, useState } from "react";
import { geocode,weather } from "../request/default";

const TempoContext = createContext({
    tempo: null,
    capitaisTemp: [],
    buscarTempo: () => {},
    buscarCaptais: () => {}
});

function TempoProvide(props) {
    const [tempo, setTempo] = useState(null);
    const [capitaisTemp, setCapitaisTemp] = useState([]);

    const buscarTempo = (estado) => {
        getGeocode(estado).then((dados) => {
            const local = JSON.parse(dados.data)[0];
            getWeather(local.lat, local.lon).then((dados) => {
                const clima = JSON.parse(dados.data);
                setTempo({
                    estado,
                    max:conversorTemp(clima.daily[0].temp.max),
                    min:conversorTemp(clima.daily[0].temp.min)  
                });
            });
        });
    }

    const buscarCaptais = async (captais) => {
        let dadosCaptais = [];
        for(let estado of captais) {
             const dados = await getGeocode(estado);
             const local = JSON.parse(dados.data)[0];
             const dadosTempo = await getWeather(local.lat, local.lon);
             const clima = JSON.parse(dadosTempo.data);
            
            dadosCaptais.push({
                estado,
                max:conversorTemp(clima.daily[0].temp.max),
                min:conversorTemp(clima.daily[0].temp.min),
            });
        }

        setCapitaisTemp(dadosCaptais);
    }

    const getGeocode = (local) => geocode.get('', {
        params: {
            q: local,
            limit: 1,
            // appid: 'b18ffc626b3d298f622bb11ce17e76d3' // debora
            appid: 'fe6c5ceb7c81a6a2c25c349f2a9e3fb3' // arthur
        }
    })

    const getWeather = (lat, lon) => weather.get('', {
        params: {
           // appid: 'b18ffc626b3d298f622bb11ce17e76d3', // debora
            appid: 'fe6c5ceb7c81a6a2c25c349f2a9e3fb3', // arthur
            lat,
            lon,
        }
    })

    const conversorTemp = (temperatura) => {
        const tempC = temperatura - 273.15;
        return tempC.toFixed(2);
    }

    return (
        <TempoContext.Provider value={{
            tempo,
            capitaisTemp,
            buscarTempo,
            buscarCaptais,
        }} {...props} />
    ); 
}

export { TempoContext, TempoProvide}