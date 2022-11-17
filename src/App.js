import Cabecalholist from './components/cabecalho/Cabecalholist';
import Informacaolist from './components/informacao/informacaolist';
import './App.css';
import { useContext } from 'react';
import { TemaContext } from './contexts/tema';

function App() {
  const contexto = useContext(TemaContext);

  const selecionaTema = (e) => {
    contexto.mudarTema(e.target.value);
  }

 const shooting_star = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div  className={contexto.tema === 'claro'? "conteiner claro": 'conteiner night'}>
      <select onChange={selecionaTema}>
        <option value='claro'>claro</option>
        <option value='night'>escuro</option>
      </select>
      {contexto.tema === 'night' && shooting_star.map((n) => (
        <div key={n} className='shooting_star'></div>
      ))}
      <Cabecalholist></Cabecalholist>
      <hr/>
      <Informacaolist></Informacaolist>
    </div>
  );
}
// {!!tempoContexto.capitaisTemp.length && tempoContexto.capitaisTemp.map((captal) => (

export default App;
