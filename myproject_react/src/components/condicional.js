import { useState} from "react";

function Condicional(){
 
    const [email, setEmail ]= useState()
    const [userEmail, setUserEmail]= useState()

    function enviarEmail(e){
        e.preventDefault()
        console.log("Enviando email")
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(){
       setUserEmail("")
    }


    

    return (
        <div>
            <h2>cadastre o seu email:</h2>
            <form>
                
                <input type="text" placeholder="Digite o seu email" onChange={(e)=> setEmail(e.target.value)}/>
            
                <button type="submit" onClick={enviarEmail}> Enviar email</button>

                {userEmail &&(
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                         <button onClick={limparEmail}>limpar</button>
                    </div>
                )}

            </form>
        </div>
    )

}
export default Condicional 