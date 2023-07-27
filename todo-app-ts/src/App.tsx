import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoTitle, type tipos, type Todo } from './types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<tipos>('all')

  const handleRemove = ({ id }: Pick<Todo, 'id'>): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: tipos): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === 'active') return !todo.completed
    if (filterSelected === 'completed') return todo.completed

    return todo
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const singleTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodo = [...todos, singleTodo]
    setTodos(newTodo)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        handleRemove={handleRemove}
        handleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        allTodos={todos.length}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
