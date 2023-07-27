import { type tipos } from '../types'

interface IFilters {
  readonly type: tipos
  name: string
}

type arrayFilters = IFilters[]

const mockFilters: arrayFilters = [
  {
    type: 'all',
    name: 'Todos'
  },
  {
    type: 'active',
    name: 'Activos'
  },
  {
    type: 'completed',
    name: 'Completados'
  }
]

interface Props {
  filterSelected: tipos
  onFilterChange: (type: tipos) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
        <ul className="filters">
            {
                mockFilters.map(filter => (
                 <li key={filter.type}>
                    <a
                    key={filter.type}
                    className={`${filterSelected === filter.type ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      onFilterChange(filter.type)
                    }}
                    >
                        {filter.name}
                    </a>
                 </li>
                ))
            }

        </ul>
  )
}
