import React from 'react'

const Actor = ({ name, as }) => {
    return (
        <>
            <p className='movie__cast--actor'>{name}</p>
            <p className='movie__cast--role'>as {as}</p>
        </>
    )
}

export default Actor