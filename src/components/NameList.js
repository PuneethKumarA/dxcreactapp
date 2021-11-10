import React from 'react'

function NameList() {
    const names = ['abdul', 'ansari', 'tanveer', 'dxc', 'react']
    const namesList = names.map(name => <h2>{name}</h2>)

    /* const names = ['abdul','ansari','tanveer','dxc']
    return (
        <div>
        {
            names.map(name => <h2>{name}</h2>)
        }

        </div> */
    return (
        <div>{namesList}</div>
    )
}
    
export default NameList        