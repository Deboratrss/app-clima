import { createContext, useState } from 'react';

const TemaContext = createContext({
    tema: 'claro',
    mudarTema: () => {},
});

function TemaProvider(props) {
    const [tema, setTema] = useState('claro');

    const mudarTema = (tema) => { // escuro => setTema(cores['escuro'])
        setTema(tema);
    }

    return (
        <TemaContext.Provider value={{
            tema,
            mudarTema
        }} {...props} />
    );
}

export { TemaContext, TemaProvider }
