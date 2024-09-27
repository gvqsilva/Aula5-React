import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    //Hook - useNavigate - navega p/ outro componente
        const navigate = useNavigate();

    //criando a função de handeLogout
        const handleLogout=()=>{
            sessionStorage.removeItem("usuario")
            sessionStorage.removeItem("senha");
            alert("Saindo da sessão!");
            navigate('/');                          // Volta para a pagina Home
        }


    return(
        <>
            <h1>Dashboard</h1>

            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Dashboard