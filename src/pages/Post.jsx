import { useLocation } from "react-router-dom";
import {posts} from "../data"

const Post = () => {
const location = useLocation()
const path = location.pathname.split("/")[2]

const post = posts.find(p=>p.id.toString() === path)
  console.log(location)
  return (
    <div className="post">
      {post.longDesc } 
    </div>
  );
};
export default  Post;