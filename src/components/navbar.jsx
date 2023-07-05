import {Link} from "react-router-dom"
const Navbar = ({user}) => {
    return (
            <div className="navbar">
                <span className="logo">
                    <Link className="link" to ="/">Job Annoucement</Link>
                    </span>{
                        user ? (
                            
                <ul className="list">
                    <li className="listItem">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" alt="" className="avatar" />

                    </li>
                    <li className="listItem">John Doe</li>
                    <li className="listItem">Logout</li>
                </ul>
                
                ) : (<Link className="link" to ="login">Login</Link>) 
            }
            </div>
    )
}

export default Navbar;