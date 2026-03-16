import { useState } from "react"

function Form(){
    

    function MeuCadastro(e){
        e.preventDefault()
        console.log(  `O cadastro do usuário ${name} foi feito com sucesso com a senha: ${password}`)
    }
     const [name, setName] = useState()
     const[password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={MeuCadastro} method="post">
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type ="text" id="name" name="name"  value={name}
                    placeholder="digite o seu nome " onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password"> Senha</label>
                    <input type="password" id="password" value={password}
                    name="password" placeholder="digitea sua senha" onChange={(e)=> setPassword(e.target.value)}/>

                </div>

                <div>
                    <input type="submit"  value="cadastrar "/>
                </div>
            </form>
        </div>
    )
}
export default Form