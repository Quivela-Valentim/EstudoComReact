

function Outralista({itens}){

    return(
        <>
        <h3>Meus itens</h3>
        { itens.length > 0 ?(
         itens.map((item, index) => ( 
            <p key={index}>{item}</p>))):(
                <p>Não há lista por enquanto </p>
            )}
        </>
    )

}
export default Outralista