//Esta linha importa a função `useState´ do pacote "react". `useState`é um hook do React que permite adicionar o estado a componentes de função
import {useState} from "react"
//Declaração de um componente de função chamado `App`
function App() {
  //Declaração de dois estados usando o `useState`hook. `password`armazenará a senha gerada, inicializada como uma string vazia. `copyText`armazenará o texto do botão de cópia, inicializado como Copiar.
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize,setPassword] = useState(12)

  //Declaração de uma função chamada `generate`, responsável por gerar uma senha aleatória
  function generate() {
    //Definição de caracteres que serão usados para gerar a senha
    const characters = "'123456789-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ}"
   
    //Inicialização da variável `newPassword`que armazenará a nova senha
    let newPassword = ""
    //Laço de repetição para iterar sobre o comprimento da senha
    for (let i = 0; i < passwordSize; i++){
    //Gera um número aleatório entre 0 e o comprimento da string `characters`, representando a posição de um caractere aleatório
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    //Atualiza o estado `password`com a nova senha gerada e o estado `copyText`com o texto "Copiar"
    setPassword(newPassword)
    setCopyText("Copiar")
  }
   //Declaração de uma função chamada `copyToClipboard`, responsável por copiar a senha para a área de transferência
  function copyToClipboard() {
    //Usa a API Clipboard para escrever o texto da senha na área de transferência
    window.navigator.clipboard.writeText(password)
    //Atualiza o estado `copyText`com o texto "Copiado!" após a senha ser copiada com sucesso
    setCopyText("Copiado!")
  }
    //Retorna o JSX que representa a interface do componente `App`. Inclui um cabeçalho, dois botões(um para gerar senha e outro para copiar senha) e um elemento `div` para exibir a senha gerada
 return(
   <div className="app">
     <h1>Gerador de senhas</h1>
     <div>
       <label htmlFor="passwordSize">Tamanho:</label>
       <input/>
     </div>
     <button onClick={generate}>Gerar senha de {passwordSize}   caracteres!</button>
     <button onClick={copyToClipboard}>{copyText}</button>
     <div>{password}</div>
   </div>
  )
}

export default App
