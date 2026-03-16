
import PingMoney from  '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home(){

    return (
       <section className={styles.home_container}>
         <h1>Bem-vindo ao <span>My project</span></h1>
         <p> Começe por aqui adicionando os seus projectos </p>
         <LinkButton to= "/newproject" text="Criar projecto"/>
         <img src={PingMoney} alt ="PingMoney"/>


       </section>
    )

}

export default Home