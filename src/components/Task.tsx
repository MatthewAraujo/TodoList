import styles from './task.module.scss'

import {Circle, CheckCircle, Trash} from 'phosphor-react'
interface Task {
    id:string;
    task: string;
    state: boolean;
}

interface TaskProps {
    content: Task;
    onDeleteTask: (task:string) => void;
    onCompletedTask: (id:string) => void;
}





export function Task({content,onDeleteTask,onCompletedTask}: TaskProps) {
    function handleDeleteTask(){
    onDeleteTask(content.task)

    }
   
    return (
        <div className={styles.container}>
            <button 
                onClick={() => onCompletedTask (content.id)} 
                className={styles.check}
                >
                {content.state ? <CheckCircle size={20} /> : <Circle size={20} />}
            </button>
            <div className={styles.task}>
                <p style={
                    {textDecoration: content.state ? 'line-through' : 'none'
                ,opacity: content.state ? 0.5 : 1}
                }>{content.task}</p>
            </div>
            <button onClick={handleDeleteTask} className={styles.delete}>
                <Trash size={20}/>
            </button>
        </div>
    )
}