import { Routes } from "./routes"

function App() {
  return (
    <>
      <Routes />
      {console.log(import.meta.env.VITE_API_URL)}
    </>
  )
}

export default App
