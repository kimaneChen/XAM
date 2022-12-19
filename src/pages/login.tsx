
import './login.css';

function Login(){
  return (
  <div className='container'>
    <div className="form_container" >
      <form>
        <div  className="input_container" >
          <div className="title">
            Login
          </div>
          <div >
            <input type="text" placeholder="Branch id" className="input_content"/>
          </div>
          <div  >
            <input type="text" placeholder="User name" className="input_content"/>
          </div>
          <div >
            <input type="password" placeholder="Password" className="input_content" />
          </div>
          <div>
            <button className="submit_button" type="submit"> LOGIN </button>
            {<div className='error'><p>Error: Password is incorrect</p></div>} 
          </div>
        </div>
      </form>
    </div>
  </div>)
}

export default Login;