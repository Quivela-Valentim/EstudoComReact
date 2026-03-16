import { useNavigate} from 'react-router-dom'
import ProjectForm from '../projects/ProjectsForm'
import styles from './NewProject.module.css'

function NewProject(){

    const navigate = useNavigate()
    function createPost(project){
        project.costs = 0
        project.services = []
        // iniciazando costs and services
        fetch("http://localhost:5001/projects", 
            {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project),
            }
        ).then((resp)=> resp.json()).then((data)=>{
            console.log(data)
            navigate('/projects', {state:{message: 'enviado com sucesso'}})
        }).catch((err)=> console.log(err) )

    }

    return (
        <div className={styles.newproject_container}>

            <h1>Criar Novos Projectos </h1>
            <p>Crie o seu projecto para posterior adiconar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText ="Criar projecto"/>

        </div>

    )

}

export default NewProject