import { Link } from "react-router-dom";
import Form from "../components/Form"

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <p>Don't have an account?</p>
            <Link to="/register">
                <button>REGISTER HERE</button>
            </Link>
        </div>
    );
}

export default Login;