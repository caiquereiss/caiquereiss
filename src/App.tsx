import { Router } from "./Router"
import { ThemeProvider } from "./app/context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Router></Router>
    </ThemeProvider>
  )
}

export default App
