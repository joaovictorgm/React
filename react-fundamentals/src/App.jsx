import Title from "./components/Title"
import Subtitle  from  "./components/Subtitle"
import Statustext from "./components/StatusText"
import styles from "./styles/App.module.css"

export default function App() {
  return(
    <div className={styles.app}>
      Criando Novos Componentes
      <Title/>
      <Subtitle/>
     <Statustext/>
    </div>
  )
}