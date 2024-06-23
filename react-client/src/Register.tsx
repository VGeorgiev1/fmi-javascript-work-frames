import { useAuth } from './AuthContext'
import  './Login.css'

const Register = () => {


    const handleSubmit = (event : any) => {
        event.preventDefault();
        let username = event.target.username.value;
        let password = event.target.password.value;
        let email = event.target.email.value;

        let params : RequestInit = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password, email})
        };

        fetch('http://localhost:8000/register',params)
            .then((stream) => stream.json().then((res) => {
                console.log(res)
            }));
    }

    return (
            <>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <h3>Register Here</h3>

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Email or Phone" id="username" />

                    <label htmlFor="password">Email</label>
                    <input type="email"  name="email" placeholder="Mail" id="email" />


                    <label htmlFor="password">Password</label>
                    <input type="password"  name="password" placeholder="Password" id="password" />

                    <button type="submit">Sign up</button>

                </form>
            </>
    )
}
export default Register;