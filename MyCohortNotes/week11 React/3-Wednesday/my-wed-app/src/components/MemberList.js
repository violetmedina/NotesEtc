import React from 'react'
import Member from './Member'

const MemberList = () => {

const staffMembers = [
    {
        name: { first:'Jared', last:'Donald Dunn' },
        title: 'Head of Business Development',
    },
    {
        name: { first: 'Russ', last: 'Hanneman'},
        title: 'Founder',
    },
    {
        name: { first: 'Erlich', last: 'Bachman' },
        title: 'Chief PR Officer',
    },
    {
        name: { first: 'Richard', last: 'Hendricks' },
        title: 'President',
    },
    {
        name: { first: 'Dinesh', last: 'Chugtai' },
        title: 'Lead Engineer',
    },
    {
        name: { first: 'Bertram', last: 'Gilfoyle' },
        title: 'Systems Architect',
    }
]

return (
    <>
        <ul>

            {staffMembers.map(staff => <Member info={staff} />)}

        </ul>
    </>
)
}

export default MemberList