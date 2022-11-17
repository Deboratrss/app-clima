import { useContext } from "react";
import { useState } from "react";
import { TempoContext } from "../../contexts/tempo";
import './index.css'
import {BiSearchAlt} from 'react-icons/bi';

function Cabecalholist() {
    const [estado, setEstado] = useState('');
    const tempoContexto = useContext(TempoContext);

    const aoEnviar = (e) => {
        e.preventDefault();
        tempoContexto.buscarTempo(estado);
    }   

    return (
        <div className="cabecalho-conteiner">
            <h1 className="titulo"> Previsão do Tempo </h1>
            <div className="busca">
                <form className="formulario" onSubmit={aoEnviar}>
                    <input type="text" placeholder="Insira aqui o nome da cidade" value={estado} onChange={(e) => setEstado(e.target.value)}/>
                    <button className="btn-10 custom-btn" type="submit"><BiSearchAlt /></button>
                </form>
                {tempoContexto.tempo && (
                    <p>
                        <span> max: {tempoContexto.tempo.max} ºC </span> 
                        <span> min: {tempoContexto.tempo.min} ºC </span> 
                        <span> capital: {tempoContexto.tempo.estado} </span>  
                    </p>
                )}
            </div>
        </div>
            
    );
}

export default Cabecalholist;