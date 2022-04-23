// Importing Functions from SDKs
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {
  getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField
  } from 'firebase/firestore';

import banner from "./banner.png";
import './App.css';


const firebaseConfig = {
  apiKey: "AIzaSyDNeOvUfj55pVBtkN0gISAs_J62eYPQISY",
  authDomain: "queros-57b8d.firebaseapp.com",
  projectId: "queros-57b8d",
  storageBucket: "queros-57b8d.appspot.com",
  messagingSenderId: "221322728070",
  appId: "1:221322728070:web:1e315a2ae03232faeaf707"
};

// Initializing Firebase & Declaring Services
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

function App() {

  var uUID;

  async function updateincloudfs(accountuid, newrole)
  {
    await updateDoc(doc(db, "accounts", accountuid), {
      role: newrole
    })
    .then(() => {
      window.location = "./dashboard-user";
    })
    .catch((error) => {
      alert(error.code);
    })
  }

  function getSelected() {
    var selectElement = document.querySelector('#userrole');
    var output = selectElement.value;
    return output;
}

// Function to Pass Data to Firebase Firestore Database
async function addtocloudfs(name, username, email, age, accountuid)
{
  await setDoc(doc(db, "accounts", accountuid), {
      name: name,
      username: username,
      email:email,
      age: age,
      queries: 0,
      role: "pending"
  });
}

const opop = () => {
  var nrole = getSelected(); 
  updateincloudfs(uUID, nrole);
}

  const button1List = (e) => {
    e.preventDefault();
    var name=document.getElementById("user-name").value;
    var username=document.getElementById("user-username").value;
    var age=document.getElementById("user-age").value;
    // Unfilled Sections Alert
    if (document.getElementById("user-passcode-1").value!=document.getElementById("user-passcode-2").value)
    {
      alert("Passwords didn't match !!");
    }
    else if (name==="")
    {
      alert("Enter Name !!");
    }
    else if (username==="")
    {
      alert("Enter Username !!");
    }
    else if (age==="")
    {
      alert("Enter Age !!");
    }
    else
    {
      const email=document.getElementById("user-email").value;
      const password=document.getElementById("user-passcode-1").value;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Account Successfully Registered
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser)
          .then(() => {});
          uUID=user.uid;
          addtocloudfs(name, username, email, age, user.uid);
          document.getElementById("additional").style.display="block";
          document.getElementById("already").style.display="none";
        })
        .catch((error) => {
          // Account Registration Failed
          const errorCode = error.code;
          if (errorCode==="auth/invalid-email")
          {
            alert("Please Enter Valid E-Mail ID !!");
          }
          else if (errorCode==="auth/email-already-in-use")
          {
            alert("Already Regsitered Account found with same E-Mail ID !!");
          }
          else if (errorCode==="auth/weak-password")
          {
            alert("Too Weak Password !!");
          }
          else if (errorCode==="auth/internal-error")
          {
            alert("Void Password Field !!");
          }
          else
          {
            alert(errorCode);
          }
        });
      }
    }

  return (


    <div id="page-reg">

      <div id="form-show-reg">

        <div align="center" id="outer-reg">

          <div className="nottoselect" id="register-bar">Queros HelpDesk</div>
          <img src={banner} id="banner-img"></img>


          <div id="already">

            <form align="center">
              
                <input type="text" placeholder="Your Name" style={{marginTop: "22px"}} id="user-name" spellCheck="false"/><br /><br />
                <input type="text" placeholder="Your Username" id="user-username" spellCheck="false"/><br /><br />
                <input type="text" placeholder="Your E-Mail ID" id="user-email" spellCheck="false"/><br /><br />
                <input type="text" inputMode="numeric" placeholder="You Age" id="user-age"/><br /><br />
                <input type="password" placeholder="Create Password" id="user-passcode-1"/><br /><br />
                <input type="password" placeholder="Confirm Password" id="user-passcode-2"/><br /><br />
                <p style={{paddingLeft: "3px"}} className="nottoselect">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                
                <button type="submit" className="nottoselect" id="button1-reg" onClick={button1List}>
                  <b style={{fontSize: "1.3vw"}}>Sign Up</b>
                </button>

              </form>

          </div>

          <div id="additional">
          <br />
            <form align="center">

              <select className="form-select"  id="userrole">
                <option value="">-- Select Position --</option>
                <option value="">Software Engineer</option>
                <option value="">Hardware Engineer</option>
                <option value="">Technial Assistant</option>
                <option value="">Technical Analyst</option>
                <option value="">Data Scientist</option>
              </select>
            <br />

              <button type="submit" id="button-con" onClick={opop}>
                <b style={{fontSize: "1.3vw"}}>Continue</b>
              </button>
            </form>

          </div>
            

          <p style={{marginTop: "2.6vh"}}>
            <b>Already have an Account ?? Login here <a href="./login" className="quick-link-reg"> ➔</a></b>
          </p>

        </div>

      </div>

   </div>
  );
}

export default App;
