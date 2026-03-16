


function SeuNome({setNome}){

    

    return (
        <div>
            <h3>Digite o seu nome</h3>
            <input type="text" placeholder="Nome" onChange={(e)=> setNome(e.target.value)}
            />
        </div>

    )

}
export default SeuNome