import Card from "../components/Card"
import {posts} from "../data"
import {ParticlesBackground} from "../components/ParticlesBackground"

const Home = () => {
  return (
   <div> <ParticlesBackground/>
    <div className="home">
      
        {posts.map(post =>(
            <Card key={post.id} post ={post}/>
        ))} 
    </div>
    </div>
  )
}

export default Home