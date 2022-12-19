
import './dashboard.css';
import { users } from '../data/users_data';

function Dashboard() {

  return (
  <>
    <header className="header">
      <h2>User Name</h2>
      <button className="logout_button">LOGOUT</button>
    </header>

    <div className="layout_container" > 
      <div className='layout_left'>
        <div className='left_side_content'>
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
        </div>
      </div>
      <div className='layout_right'>
        <table >
          <tr>
            <th>aaaa</th>
            <th>bbbb</th>
            <th>cccc</th>
            <th>dddd</th>
            <th>eeee</th>
            <th>ffff</th>
          </tr>
          <tr>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
            <td>aaaa</td>
          </tr>
        </table>
      
      </div>
    </div>
  </>)
}

export default Dashboard;