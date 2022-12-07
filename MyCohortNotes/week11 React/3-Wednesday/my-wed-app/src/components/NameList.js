import React from 'react'
import FirstName from './Name'


const Name = () => {

    const addresses = [
        { first: 'Bruce', last: 'Banner' },
        { first: 'Carol', last: 'Danvers' },
        { first: 'Thor', last: 'Odinsson' },
        { first: 'Natasha', last: 'Romanov' },
        { first: 'Wanda', last: 'Maximoff' },
        { first: 'Tony', last: 'Stark' },
        { first: 'Sam', last: 'Wilson' },
        ]


    return (
    <>
        <ul>

            {addresses.map(info => <FirstName firstName={info.first} lastName={info.last} />)}

        </ul>
    </>
    )
}

export default Name