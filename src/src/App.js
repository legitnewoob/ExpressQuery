import banner from "./banner.png";
import './App.css';

function App() {

  return (

    <div id="page-reg">
      <div id="form-show-reg">

        <div align="center" id="outer-reg">
          <div className="nottoselect" id="register-bar">Queros Registration</div>
          <img src={banner} id="banner-img"></img>
            <form align="center">
                <input type="text" placeholder="Your Name" style={{marginTop: "22px"}} id="user-name" spellCheck="false"/><br /><br />
                <input type="text" placeholder="Your Username" id="user-username" spellCheck="false"/><br /><br />
                <input type="text" placeholder="Your E-Mail ID" id="user-email" spellCheck="false"/><br /><br />
                <input type="text" inputMode="numeric" placeholder="You Age" id="user-age"/><br /><br />
                <input type="password" placeholder="Create Password" id="user-passcode-1"/><br /><br />
                <input type="password" placeholder="Confirm Password" id="user-passcode-2"/><br />
                <p style={{paddingLeft: "3px"}} className="nottoselect">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                <button type="submit" className="nottoselect" id="button1-reg">
                  <b style={{fontSize: "1.3vw"}}>Sign Up</b>
                </button>
                <br />
                <button type="button" id="button2-reg">
                  <b style={{fontSize: "1.2vw"}} id="ask-notify">Notify me about Future Updates<small> ✔️</small></b>
                </button>
            </form>

          <p style={{marginTop: "3vh"}}>
            <b>Already have an Account ?? Login here <a href="./login" className="quick-link-reg"> ➔</a></b>
          </p>

        </div>

      </div>

   </div>
 
  );
}

export default App;
