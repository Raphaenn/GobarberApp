// arquivo para acessar informarções do estado do redux. pois no index principal nao funciona. Fazermos isso para saber se o usuario esta logado ou nao
import React from 'react';
import { useSelector } from "react-redux";

import CreateRouter from "./routes";

export default function App() {

    const signed = useSelector(state => state.auth.signed);
    const Routes = CreateRouter(signed)

    return (
        <Routes />
    )
}

// No momento que fazemos o login, a informação dentro do state signed muda para true, entao o usuáio é redirecionado a pagina de Dash