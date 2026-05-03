import {useState} from 'react'

export const FilterContext = () => {
    const [filter, setFilter] = useState('All')

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter)
        console.log('Current filter is now ', newFilter)
    }
    return (
        <div>
            <button onClick={() => handleFilterChange('All')}>All</button>
            <button onClick={() => handleFilterChange('Active')}>Active</button>
            <button onClick={() => handleFilterChange('Completed')}>Completed</button>
        </div>
     )
    }

