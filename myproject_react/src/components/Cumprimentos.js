
function Cumprimentos({nome}){

    function gerarCumprimentos(algum_nome){
        return `Olá, ${algum_nome}, tudo bem?`
    }


    return(
        <>{
            nome &&
         <p>{gerarCumprimentos(nome)}</p>}
        </>

    )

}
export default Cumprimentos