export default function Home(props) {
/* //Usando SPA
    useEffect(() => {
    fetch('http://localhost:3333/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []); 
*/

  return (
    <h1>Index</h1>
  )
}

//SSR = getServerSideProps; SSG = getStaticProps
export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const dada = await response.json()

  return {
    props: {
      episodes: dada, 
    }, 
    revalidate: 60 * 60 * 8,
  }
}