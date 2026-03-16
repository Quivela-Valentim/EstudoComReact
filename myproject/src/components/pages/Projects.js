import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"
import { useState , useEffect} from "react"
import ProjectCard from "../projects/ProjectCard"

function Projects(){
    const location = useLocation()

    const [projects, setProjects]= useState({})
    const [removeLoading, setRemoveLoading]= useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:5001/projects',{
                method: 'GET',
                headers:{
                'Content-Type': 'application/json',
                },
          
        
            }).then((resp)=> resp.json()).then((data)=>{
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
                }).catch((err)=> console.log(err))
        }, 300)  
    }, [])


    function removeProject(id){
        fetch(
            `http://localhost:5001/projects/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },    
            }
        )
          .then((resp)=> resp.json())
          .then(()=> {
            setProjects(projects.filter((project) => project.id !== id) )
            setProjectMessage("Projecto removido com sucesso!")
          }). catch((err) => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projectos</h1>
                <LinkButton to ="/newproject" text="Criar projecto"/>
            </div>
            { message&& <Message type="success" msg={message}/>}
            { projectMessage && <Message type="success" msg={projectMessage}/>}

            <Container customClass="start" >
                {
                    projects.length > 0 && 
                    projects.map((project)=>
                        <ProjectCard id={project.id} name={project.name} 
                          budget={project.budget} key={project.id} 
                          category = {project.category?.name} handleRemove={removeProject}/>
                    )
                }
                {!removeLoading && <Loading/>}
                {
                    removeLoading && projects.length===0 &&(
                        <p>Não há projectos cadastrados!</p>
                    )
                }

            </Container>

        </div>

    )

}

export default Projects