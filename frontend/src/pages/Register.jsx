import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!role) {
            alert("Please select a role");
            return;
        }

        try {
            const res = await api.post("/api/user/register/", { username, password, role })
            navigate("/login")
        } catch (error) {
            alert(error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="user">Normal User</option>
                <option value="surgeon">Surgeon</option>
                <option value="radiologist">Radiologist</option>
                <option value="teleradiologist">Teleradiologist</option>
            </select>
            <button type="submit">
                Register
            </button>
        </form>
    );
}

export default Register;
    