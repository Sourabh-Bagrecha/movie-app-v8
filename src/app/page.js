import Image from 'next/image'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Results from '../../components/Results'

export default function Home() {
  return (
    <main>
      <div>
          <title> Create Next App</title>
          
  
        

      {/* Header  */}
      <Header/>

      {/* Navbar  */}  
      <Navbar />

      {/*  Results  */}
      <Results />

      </div>
      </main>
  )
}
