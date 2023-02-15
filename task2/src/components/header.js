import profile from './NY.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


//simple header containg the user form

function Header() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={profile} className="profile" alt="headshot" id="profile"/>
          <h3 id = "contact"> 
            email: marleybeck@gmail.com
          </h3>
          <a href="https://github.com/Marley82" id="link">My GitHub</a>
        </header>
      </div>
    );
  }
  
  export default Header;