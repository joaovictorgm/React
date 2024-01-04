import Title from "./components/Title"
import Subtitle  from  "./components/Subtitle"
import Statustext from "./components/StatusText"

export default function App() {
 const status = true
  return(
    <div>
      //Criando Novos Componentes
      <Title/>
      <Subtitle/>
     <Statustext/>
    </div>
  )
}