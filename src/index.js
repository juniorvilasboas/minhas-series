import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// Se você deseja que seu aplicativo funcione offline e carregue mais rapidamente, você pode alterar
// unregister () para registrar () abaixo. Observe que isso vem com algumas armadilhas.
// Saiba mais sobre os profissionais de serviço: https://bit.ly/CRA-PWA
serviceWorker.unregister();
