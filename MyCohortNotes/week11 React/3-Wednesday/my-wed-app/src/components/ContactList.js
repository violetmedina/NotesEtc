import React from 'react'
import contactData from '../data/contacts.js'
import Contact from './Contact'

const ContactList = () => {
  return (
    <>
    <div className='row'>

        {contactData.map(info => {

            return (
                <div className='col-3'>

                    <Contact info={info} />

                </div>
            )

        })}

    </div>
    </>
  )
}

export default ContactList