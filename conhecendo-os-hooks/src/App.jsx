import useCounter from './hooks/useCounter'
import './App.css'
// So pode usar um hook numa função que é um componente react
//Não pode usar um hook fora do toplevel do nosso componente
function App() {
  const counter = useCounter()
  
   return (
    <>
     <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      </>
  )
}

export default App
