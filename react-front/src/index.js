import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyle";
import Rotas from "./routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Rotas />
        <GlobalStyle />
    </>
);