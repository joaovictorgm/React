import React from 'react'//Importa o módulo `ReactDom` da biblioteca `react-dom`. Este código especificamente importa o método ´createRoot` de `ReactDom`que permite criar uma raiz para a renderização de componentes React.
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Cria uma renderização dos componentes React no elemento com o id "root" no documento HTML.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Renderiza o componente `App`dentro de `<React.StrictMode>`.`<React.StrixtMode>` é um componente especial do React que envolve o aplicativo e fornece verificação de práticas desatualizadas e desencorajadas. Isso ajuda a identificar problemas potenciais no código.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
