import type { NextPage } from 'next'
import Cards from './View/cards'



const Home: NextPage = () => {
  return (
    <>
     <div className='container text-center' style={{marginTop:'20px'}}>
      
      <h1>Vs </h1>
      <hr style={{borderColor:'gray',  borderWidth:'2px', width:'30%', marginLeft:'35%'}} />
        
      <Cards />
    
<hr style={{borderColor:'red', borderWidth:'2px', width:'30%', marginLeft:'35%'}} />
      <Cards />

     </div>
  
    </>
    )
}

export default Home
