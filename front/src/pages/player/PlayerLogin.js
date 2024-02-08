import { NavLink, useNavigate,Link  } from "react-router-dom";
import { useState, } from "react";

const PlayerLogin = () => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [errDisplay, seterrDisplay] = useState("");
  const navigate = useNavigate();

  const LoginFormSubmit = async (e) => {
    e.preventDefault();
    const user = { emailID, password };
    const response = await fetch(`/api/player/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();

    if (response.ok) {
      console.log(json);
      return navigate("/player/home");
    } else {
      console.log(json.error);
      seterrDisplay(json.error);
    }
  };

  return (
    <>
    <div  style={{
      fontWeight: 'bold',
      color: 'black', 
      textAlign: 'center', 
       
    }} className="h-100 container  d-flex align-items-center justify-content-center my-2">
      <h2>Player Sign In</h2>
      </div>
    
    <div style={{width:"350px"}} className= "h-100 container  d-flex align-items-center justify-content-center border my-2">
      <form className="loginForm" onSubmit={LoginFormSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={emailID}
            onChange={(e) => setEmailID(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>

      <div>{errDisplay && <p>{errDisplay}</p>}</div>
      
    </div>
   
   
    <Link class="btn btn-primary" to="/" role="button">Back</Link>
    </>
  );
};

export default PlayerLogin;