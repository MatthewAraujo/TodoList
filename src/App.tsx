import { Header } from './components/Header'
import { Task } from './components/Task'
import { Todo } from './components/Todo'
import global from './global.scss'

export function App() {

  return (
    <div>
      <Header/>
      <Todo
        task={{
          id: '1',
          task: '',
          state: false
        }
        }
      />
    </div>
  )
}


