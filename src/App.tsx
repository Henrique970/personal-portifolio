import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      <Header />
      
      <main className="grow pt-16">
        <Hero />
      </main>

      <Footer />
    </div>
  )
}

export default App