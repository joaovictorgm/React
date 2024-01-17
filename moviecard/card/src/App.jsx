import Card from "./components/Card"
import d1PosterImg from "./assets/dorohedoro.png"
import d2PosterImg from "./assets/dorohedoro2.png"
import d3PosterImg from "./assets/dorohedoro3.png"
import d4PosterImg from "./assets/dorohedoro4.png"
import Button from "./components/Button"
 function App() {
  return (
    <>
      <h1>Exercicio</h1>
      <Button text="Voltar ao inicio"/>
      <Card title="Pôster:Volume 1" posterImg={d1PosterImg}/>
      <Card title="Pôster:Volume 2" posterImg={d2PosterImg}/>
      <Card title="Poster:Volume 3" posterImg={d3PosterImg}/>
      <Card title="Poster:Volume 4" posterImg={d4PosterImg}/>
     
    </>
  )
}

export default App