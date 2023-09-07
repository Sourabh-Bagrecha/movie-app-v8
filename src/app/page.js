import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Results from '../../components/Results'
import requests from './utils/requests'

export default function Home({ results }) {
  console.log(results);
  return (
      <div>
        
      {/* Header  */}
      <Header/>

      {/* Navbar  */}  
      <Navbar />

      {/*  Results  */}
      <Results results={results}/>

      </div>
      
  )
}

/* server side */ 
export async function getServerSideProps(context){
  const genre = context.query.genre || "fetchTending";

  const request = await fetch(`
  https://api.themoviedb.org/3${requests[genre].url}
  `).then(response => response.json());

  return{
    props:{
      results: request.results,
    },
  }

}