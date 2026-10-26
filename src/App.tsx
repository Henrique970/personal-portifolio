import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { Skills } from "./components/sections/Skills"
import { Projects } from "./components/sections/Projects"

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      <Header />
      <main className="grow pt-16">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App