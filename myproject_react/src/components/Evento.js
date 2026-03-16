import Button from './evento/Button'
function Evento(){
    function MyEvent(){
        console.log("Foi ativado com sucesso!")
    }

    return (
        <div>
            <Button event ={MyEvent} text = "Primeiro texto"/>
            <p>Clique aqui para adicionar um evento</p>
            <button onClick={MyEvent}>Ativar</button>
        </div>
    )
}

export default Evento