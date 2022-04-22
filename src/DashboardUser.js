// Importing Functions from SDKs
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {
  getFirestore, doc, getDoc, setDoc, collection, addDoc
} from "firebase/firestore";


import './DashboardUser.css';
const {v4: uuid} = require('uuid');

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

function DashboardUser() {
    // Function to Pass Data to Firebase Firestore Database
async function addtocloudfs(subj, dep, des, postToken)
{
    console.log(postToken);
    await setDoc(doc(db, "queries", postToken), {
    subject: subj,
    department: dep,
    description: des
  });
}
function getSelected() {
        var selectElement = document.querySelector('#userissuedep');
        var output = selectElement.value;
        return output;
}

const addPost = () => {
var subj=document.getElementById("user-subject").value;
    var des=document.getElementById("user-issue-description").value;
    // Unfilled Sections Alert
    if (subj==="")
    {
      alert("Enter Subject !!");
    }
    else if (dep==="")
    {
      alert("Enter Department !!");
    }
    else if (des==="")
    {
      alert("Enter Description !!");
    }
    else
    {
        const postToken = uuid();
        var dep = getSelected();
        if (dep === "sd")
        {
            alert("Please Select Department");
        }
        else
        {
            addtocloudfs(subj, dep, des, postToken);
            window.location.reload();
        }
    }
}

    return (
      <div>
            <div id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Queros</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <   span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My Tickets</a>
                    </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a> 
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">User</a>
                    </li>
                    </ul>
                    
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
        <br /><br />
        <div className="fill-ticket">
            <div id="create-ticket"><h1>Create a ticket</h1></div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Query Subject" id="user-subject"/>
            </div>
            <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label">Issue Department</label>
                <select className="form-select"  id="userissuedep">
                <option value="sd">-- Select Department --</option>
                <option value="hr">Human Resources</option>
                <option value="itd">IT Department</option>
                <option value="hd">Hardware Department</option>
                <option value="msd">Marketing & Sales Department</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Issue Description</label>
                <textarea className="form-control"  rows="3" placeholder="Query Description" id="user-issue-description"></textarea>
            </div>
     
       
                <button type="submit" className="btn btn-primary" onClick={addPost}>Submit</button>
        </div>

        <div id="my-tickets">
            <h1>My Tickets</h1>
        </div>
     </div>
   
    );
  }
  
  export default DashboardUser;