import "./signin.scss";
import { useHistory } from "react-router-dom";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function Signin() {
  let history = useHistory();
  return (
    <div>
      <div className="container">
        <div className="signin-container">
          <div className="signin-left">
            <div className="circle"></div>
            <h1>welcome abord my friend</h1>
            <p>just a couple of click's away</p>
          </div>
          <div className="signin-right">
            <form>
              <h2
                style={{
                  paddingTop: "20px",
                  fontSize: "30px",
                  color: "#f8f1ff",
                }}
              >
                welcome
              </h2>
              <input placeholder="Email" type="email" />
              <input placeholder="Password" type="password" />
              <a href="sasassa">forgot password</a>
              <button
                onClick={() => {
                  history.push("/home");
                }}
                className="login-btn"
              >
                Login
              </button>
              <p>or</p>
              <div className="buttons">
                <button>Google</button>
                <button>GitHub</button>
              </div>{" "}
              <p>I have no Account</p>
              <button
                onClick={() => {
                  history.push("/register");
                }}
              >
                register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
