import React from 'react'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'abdul',
            age: 30,
            skill: 'react'
        },
        {
            id: 1,
            name: 'ansari',
            age: 30,
            skill: 'flutter'
        },
        {
            id: 1,
            name: 'tanveer',
            age: 30,
            skill: 'java'
        },
        {
            id: 1,
            name: 'praneshwar',
            age: 30,
            skill: 'spring'
        }
    ]



    /* const names = ['abdul', 'ansari', 'tanveer', 'dxc','react']
    const namesList = names.map(name => <h2>{name}</h2>) */
    const personList = persons.map(person => <h2> i am {person.name},i am {person.age} years old and my skill is {person.skill}</h2>)
    /* const names = ['abdul','ansari','tanveer','dxc']
    return (
        <div>
        {
            names.map(name => <h2>{name}</h2>)
        }

        </div> */
    return (
        <div>{personList}</div>
    )
}

export default NameList        