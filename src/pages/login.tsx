
import './login.css';

function Login(){
  return (
  <div className="form_container" >
    <div className="title">
      Login
    </div>
    <form>
      <div  className="input_container" >
        <div >
          <input type="text" placeholder="Branch id" className="input_content"/>
        </div>
        <div  >
          <input type="text" placeholder="User name" className="input_content"/>
        </div>
        <div >
          <input type="password" placeholder="Password" className="input_content" />
        </div>
      </div>
      <button className="submit_button" type="submit"> LOGIN </button>
      {<div>ERROR</div>}
    </form>
  </div>)
}

export default Login;