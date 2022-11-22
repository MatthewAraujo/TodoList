import styles from './todo.module.scss'
import {PlusCircle, ClipboardText} from 'phosphor-react'
import { Task } from './Task'
import { ChangeEvent, FormEvent, useState } from 'react'; 


interface Task {
    id:string;
    task: string;
    state: boolean;
}

interface TaskProps {
    task: Task[];
}


export function Todo({task}: TaskProps) {
   
    const [tasks,setTasks] = useState<Task[]>([
        
    ])
    
    const [newTask, setNewTask] = useState('')


    function handleCreateTask(event: FormEvent<HTMLElement> ){
        event.preventDefault();
        
        setTasks([...tasks, {id:crypto.randomUUID(),task:newTask, state:false}])
        
        setNewTask('')

    }


    function deleteTask(taskToDeleted: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.task !== taskToDeleted
        })

        setTasks(tasksWithoutDeletedOne)
    }

    function isCompleted(id: string){
        setTasks(tasks.map(task => {
            if(task.id === id){
                task.state = !task.state
            }
            return task
        })
    )}
    
    const taskQuantity = tasks.length;
    const taskCompleted = tasks.filter(task => task.state).length;
    return (
        <div className={styles.task}>    
            <div className={styles.container}>
                <form onSubmit={handleCreateTask} className={styles.addTask}>
                    
                    <input 
                        name="comment"
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                        />
                    <button 
                        type="submit"
                        disabled={(newTask.length ==0)}
                        >
                            Criar 
                        <PlusCircle size={20} />
                    </button>
                </form>
                <header>
                    <div className={styles.ViewTask}>
                        <p>Tarefas criadas</p>
                        <span>{taskQuantity}</span>
                    </div>
                    <div className={styles.doneTask}>
                        <p>Concluidas</p>
                        <span>{taskCompleted} de {taskQuantity}</span>
                    </div>
                </header>
                {tasks.length==0 ? (
                     <div className={styles.nothingList}>
                     <div className={styles.taskItem}>                     
                         <span><ClipboardText size={50}/></span>
                         <p>Voce ainda não tem tarefas cadastradas</p>
                         <span>Crie tarefas e organize seus itens a fazer</span>
                     </div>
                 </div>
                ): (
                    <div className={styles.list}>
                    {tasks.map(task => {
                        return (
                            <Task 
                                key={task.id}
                                content={task}
                                onDeleteTask ={deleteTask}
                                onCompletedTask={isCompleted}
                            />
                        )
                    })}
                
                </div>   
                )} 
            </div>
        </div>

    )
}