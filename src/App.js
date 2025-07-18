import ProjectSidebar from './components/ProjectSidebar';
import './App.css';
import NewProject from './components/NewProject';
import { useState } from 'react';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text){
    setProject(prevState=>{
      const taskId = Math.random();
      const newTask ={
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    })
  }

  function handleDeleteTask(id){
    setProject(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id),
      };
    });
  }

  function handleSelectProject(projectId) {
    setProject(prevState=>{
      return {
        ...prevState,
        selectedProjectId: projectId,
      }
    });
  }
  function handleAddProject() {
    setProject(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  };

  function handleCancelProject() {
    setProject(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  };

  function handleDeleteProject() {
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Deselect after deleting
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
      };
    });
  }


  function handleAddNewProject(projectData){
    setProject(prevState=>{
      const projectId = Math.random();
      const newProject ={
        ...projectData,
        id: projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  const tasksForSelectedProject = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );


  let content = <SelectedProject tasks={tasksForSelectedProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={selectedProject} onDeleteProject={handleDeleteProject}/>;
  

  if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddNewProject} onCancel={handleCancelProject}/>;
  }else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject}/>;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar 
      onSelectProject={handleSelectProject} 
      projects={projectState.projects} 
      onAddProject={handleAddProject}
      selectedProjectId={projectState.selectedProjectId}/>
      {content}    
    </main>
  );
}

export default App;
