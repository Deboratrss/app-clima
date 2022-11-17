import { useEffect } from "react";
import { useContext } from "react";
import { TemaContext } from "../../contexts/tema";
import { TempoContext } from "../../contexts/tempo";
import "./index.css"

function Informacaolist() {
    const captais =[
        "Rio de Janeiro",
        "São Paulo",
        "Belo Horizonte",
        "Brasília",
        "Belém",
        "Salvador",
        "Curitiba",
        "Fortaleza",
        "Manaus",
        "João Pessoa"
    ];
    const tempoContexto = useContext(TempoContext);
    const temaContexto = useContext(TemaContext);

    useEffect(() => {
        console.log('renderizou')
        tempoContexto.buscarCaptais(captais);
        // eslint-disable-next-line
    }, []);

    return(
        <section className="list-conteiner">
            <h2 className="subtitulo">Capitais</h2>
            <div className={`informacao ${temaContexto.tema}`}>
                <p className="head">
                    <span>Min</span> 
                    <span>Max</span>
                </p>
                <p className="head segundo">
                    <span>Min</span>
                    <span>Max</span>
                </p>
                {!!tempoContexto.capitaisTemp.length && tempoContexto.capitaisTemp.map((captal) => (
                    <p key={captal.estado}>
                        <span>{captal.min}º</span>
                        <span>{captal.max}º</span>
                        <span>{captal.estado}</span>
                    </p>
                ))}
            </div>
        </section>
    );
}

export default Informacaolist;