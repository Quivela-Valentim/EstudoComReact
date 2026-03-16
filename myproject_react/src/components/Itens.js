import PropTypes from 'prop-types'

function Itens({marca, lancamento}){
    return(
        <>
          <ul>
            <li>{marca} {lancamento}</li>
          </ul>
        </>
    )
}
Itens.propTypes ={
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Itens.defaultProps = {
    marca:'faltou uma marca',
    lancamento: 0,
}
export default Itens