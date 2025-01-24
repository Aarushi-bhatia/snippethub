import Navbar from "../components/Navbar";
import '../../styles/globals.css';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>){
  return (
    <main className="app">
      <Navbar />
      {children}
      </main>
  )
}