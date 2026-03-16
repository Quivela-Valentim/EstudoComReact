import {parse, v4 as uuidv4 } from 'uuid'
import styles from  './Project.module.css'


import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../projects/ProjectsForm'
import Message from '../layout/Message'
import ServiceForm from '../services/ServiceForm'
import ServiceCard from '../services/ServiceCard'

function Project(){
    const {id}= useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm]= useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    const [showServiceForm, setShowServiceForm]=useState(false)

    useEffect(() => {
        setTimeout(()=>{
            fetch(`http://localhost:5001/projects/${id}`, {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json'
              },
            }).then((resp)=> resp.json())
              .then((data)=>{
                setProject(data)
                setServices(data.services)
            }).catch((err)=> console.log(err))
        }, 500)
    })

    function removeService(id, cost){
        
        const servicesUpdated = project.services.filter(
            (service)=> service.id !== id
        )
        const projectUpdated = project
        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost)- parseFloat(cost)

        fetch(`http://localhost:5001/projects/${projectUpdated.id}`, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        })
          .then((resp)=> resp.json())
          .then((data) =>{
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setMessage("Serviço removido com sucesso!")
            setType("success")

          }).catch((err)=> console.log(err))

    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function createService(project){
        setMessage(" ")

        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const currentCost = project.cost ? project.cost : 0

        const newCost = parseFloat(currentCost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.budget)){
            setMessage("Orçamento ultrapassado, verifique o vallor do service")
            setType("error")
            project.services.pop()
            return false
        }

        project.cost = newCost

        fetch(`http://localhost:5001/projects/${project.id}`, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/jso '
            },
            body: JSON.stringify(project),
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            // exibir service
            console.log(data)
            setShowServiceForm(false)

        }).catch((err)=> console.log(err))

    }

    function editProject(project){
        setMessage("")
        //validation budget
        if (project.budget < project.cost){
            // message
            setMessage("O custo do Orçamento não pode ser menor que o custo do projecto")
            setType('error')
            return false
        }
        fetch(`http://localhost:5001/projects/${id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setProject(data)
            setShowProjectForm(false)
            // message
            setMessage("Projecto actualizado")
            setType('success')
        }).catch((err)=> console.log(err))
    }
    return(
         <>
         {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
                     <div className={styles.details_container}>
                         <h1>{project.name}</h1>
                          <button className={styles.btn} onClick={toggleProjectForm}>
                            { !showProjectForm ? 'Editar projecto': 'fechar'}
                          </button>
                          {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>categoria:</span>{project.category?.name}
                                </p>
                                 <p>
                                    <span>Total do Orçamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Quantidade utilizada:</span> R${project.cost}
                                </p>
                            </div>
                          ):(
                            <div className={styles.project_info}>
                                <ProjectForm handleSubmit={editProject} 
                                btnText="Concluir a edição" projectData={project}/>
                            </div>
                          )}
                     </div>
                     <div className={styles.service_form_container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            { !showServiceForm ? 'Adicionar serviço': 'fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (
                                <ServiceForm 
                                handleSubmit = {createService}
                                btnText= "Adicionar serviço"
                                projectData={project}
                                />
                                ) }
                        </div>    
                     </div>
                     <h2>Serviços</h2>
                     <Container customClass= "start">
                        { services.length > 0 &&
                           services.map((service)=>(
                            <ServiceCard 
                               id={service.id}
                               name={service.name}
                               cost={service.cost}
                               description={service.description}
                               key={service.id}
                               handleRemove = {removeService}
                            />

                           ))
                            
                        }{
                            services.length === 0 && <p>Não há serviço cadastrado </p>
                        }
                     </Container>

                </Container>
            </div>
         ):(
           <Loading/>
         )}
         </>
    )
}
export default Project