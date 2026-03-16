
function Pessoa(props){

    return (

          <div>
             <img scr = {props.foto} alt= {props.nome}/>
             <h1> {props.nome}</h1>
             <p>{props.idade}</p>
             <p>{props.profissao}</p>

          </div>
       
    )
}

export default Pessoa