import Itens from './Itens'

function List(){
    return (
        <>
        <h1> Minha lista de marca </h1>
          <ul>
            <Itens marca = "Ferrari" lancamento ={1854}/>
            <Itens marca = "BMW" lancamento={1954}/>
            <Itens marca = "Toyota" lancamento={1960} />
            <Itens  />
          </ul>
        </>
    )
}
export default List