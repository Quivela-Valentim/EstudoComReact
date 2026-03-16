import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../projects/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}){

    const [service, setService] = useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)

    }
    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})

    }
    return (
        <form onSubmit={submit} className={styles.form}>
        <Input 
        type="text" 
        name="name" 
        placeholder="insira o nome do Serviço"
        text="Nome do serviço "  
        handleOnChange={handleChange}/>

        <Input 
        type="number" 
        name="cost" 
        placeholder="insira valor total "
        text="Custo do serviço"  
        handleOnChange={handleChange}/>

        <Input 
        type="text" 
        name="description" 
        placeholder="insira o nome do Serviço"
        text="Descrição "  
        handleOnChange={handleChange}/>

         <SubmitButton text={btnText}/>

    </form>

    )

    
}

export default ServiceForm