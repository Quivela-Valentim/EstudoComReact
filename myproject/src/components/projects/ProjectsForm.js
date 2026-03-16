import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useEffect, useState } from 'react'


function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories]= useState([])
    const [project, setProject]= useState(projectData || {})

     useEffect(()=> {
        fetch("http://localhost:5001/categories", {
        method:"GET", 
        headers:{
            'Content-Type': 'application/json'
        }
     })
     .then((resp)=> resp.json())
     .then((data)=>{
        setCategories(data)

     })
     .catch((err)=> console.log(err))
     },[])

     const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
     }
     
     function handleOnChange(e){
        setProject({...project, [e.target.name]: e.target.value})
     }

     function handleOnCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name:e.target.options[e.target.selectedIndex].text,
        },})
     }

    return (
        <form onSubmit={submit} className={styles.form}>
             <Input type="text" name="name" text="Nome do projecto" 
             placeholder="Insira  nome do projecto"  
               handleOnChange={handleOnChange} value={project.name ? project.name:''}/>

              <Input type="number" name="budget" text="Orçamento do projecto" 
             placeholder="Insira  orçamento do projecto"  
             handleOnChange={handleOnChange} value={project.budget ? project.budget:''}/>
 

             <Select name="category_id" text="selecione a categoria"
              options={categories} handleOnchange={handleOnCategory} 
              value={project.category ? project.category.id: ''}/>
             <SubmitButton text={btnText}/> 

             

        </form>
    )
}

export default ProjectForm