import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error404 from './Error404';
import Dashboard from './Dashboard';
import ProfileOrg from './ProfileOrg';
import ProfileUser from './ProfileUser';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (window.location.href.slice(22,35) === "register")
{
  document.title = "Queros - Register";
  document.body.style.fontFamily = "Bahnschrift SemiBold";
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
else if (window.location.href.slice(22,35) === "dashboard")
{
  document.title = "Dashboard | Queros";
  root.render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>
  );
}
else if (window.location.href.slice(22,35) === "login")
{
  document.title = "Dashboard | Queros";
  root.render(
    <React.StrictMode>
      <Login />
    </React.StrictMode>
  );
}
else if (window.location.href.slice(22,35) === "profile-org")
{
  document.title = "Organization Profile | Queros";
  root.render(
    <React.StrictMode>
      <ProfileOrg />
    </React.StrictMode>
  );
}
else if (window.location.href.slice(22,35) === "profile-user")
{
  document.title = "User Profile | Queros";
  root.render(
    <React.StrictMode>
      <ProfileUser />
    </React.StrictMode>
  );
}
else
{
  document.title = "Queros - Error 404";
  root.render(
    <React.StrictMode>
      <Error404 />
    </React.StrictMode>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
