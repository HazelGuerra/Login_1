import { useState } from "react";

const Login = ({setAlert}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarLogin = (e) =>{
        e.preventDefault();

        if(email.trim() === "prueba@prueba.com" && password.trim() === "123456"){
            
            setAlert({
                mensaje: "Sesion iniciada",
                color: "success",
                
            });
            
            setEmail("");
            setPassword("");
            return;
        }
        setAlert({
            mensaje: "Usuario o contraseña incorrectos!",
            color: "danger"
        });
        
    
    };
    


    return(

        <form onSubmit={validarLogin}>
            <div className="datos">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            className="form-control mb-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password"  
            id="password"  
            className="form-control mb-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
            </div>
        <div className="boton">
        <button
        type="submit"
        className="btn btn-outline-dark"
        disabled={!email.trim() || !password.trim()}
        >  
            Iniciar Sesion
        </button>
        </div>

        
        

        </form>
    )

}

export default Login