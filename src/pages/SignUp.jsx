const SignUp = () => {
  return (
    <div className="formSignup">
       <form >
            <table>
                <tr>
            <td>Username  :</td><td><input type="text" placeholder="Username" /></td>
                </tr>
                <tr>
              <td>Password  :</td><td><input type="text" placeholder="Password" /></td>
                </tr>
               
                <tr>
              <td>Confirm Password  :</td><td><input type="text" placeholder="" /></td>
                </tr>

            
            </table>
            <button className="postuler">Confirm</button>
        </form>
    </div>
  )
}

export default SignUp;