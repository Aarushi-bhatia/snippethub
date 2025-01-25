import Navbar from "../components/Navbar";
import '../../styles/globals.css';

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>){
  return (
    <main className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
      <Navbar />
      {children}
      </main>
  )
}