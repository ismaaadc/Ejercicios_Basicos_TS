import { type tipos } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  allTodos: number
  filterSelected: tipos
  onClearCompleted: () => void
  handleFilterChange: (filter: tipos) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  allTodos = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{completedCount}/{allTodos} </strong>tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button
                    className='clear-completed'
                    onClick={() => { onClearCompleted() }}
                    >
                        Borrar completados
                    </button>
                )
            }

        </footer>
  )
}
