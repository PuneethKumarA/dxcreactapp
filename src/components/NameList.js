import React from 'react'

function NameList() {
    const names = ['abdul','ansari','tanveer','dxc']
    return (
        <div>
        {
            names.map(name => <h2>{name}</h2>)
        }

        </div>
    )
}

export default NameList