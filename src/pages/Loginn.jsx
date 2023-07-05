import google from"../img/google.png"
import facebook from"../img/facebook.png"
import github from"../img/github.jpg"

const Loginn = () => {
  return (
    <div className="login">
        <h1 className="loginTitle">Choose a login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton Google">
                    <img src={google} alt="" className="icon" />
                   Google
                </div>
                <div className="loginButton Facebook">
                    <img src={facebook} alt="" className="icon" />
                    Facebook
                </div>
                <div className="loginButton Github">
                    <img src={github} alt="" className="icon" />
                    Github
                </div>
            </div>
            <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" placeholder="User name" />
                <input type="text" placeholder="Password" />
                <button className="submit">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Loginn