function sum(a,b) {
  return a + b
}



export default function App() {
  const tech = "Javascript"
  const status = true
  return(
    <div>
      <h1>{tech} is awesome!!</h1>
      <h2>It'easy, like 1 +1 is {sum(1, 1)}</h2>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}