import "./register.scss";
import { useHistory } from "react-router-dom";
function Register() {
  let history = useHistory();
  return (
    <div className="register-container">
      <div className="register">
        <form>
          <h2>Register</h2>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <input placeholder="Full Name" type="text" />
          <button
            onClick={() => {
              history.push("/home");
            }}
            className="login-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
