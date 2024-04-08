import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: newName,
    }
  if (persons.some(personObject => personObject.name === newName)) {
    alert(`${newName} is already added to the phonebook`)
  } else {
  setPersons(persons.concat(personObject))
  setNewName('')
  }
}

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persons =>
      <div key={persons.id}>{persons.name} </div>
      )}
    </div>
  )
}

export default App