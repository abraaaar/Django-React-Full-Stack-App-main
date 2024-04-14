import { useNavigate } from "react-router-dom";

function UserPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('REFRESH_TOKEN');

        
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome, User!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserPage;
