
import React from 'react'
import ContactDat``
import Contact from './Contact'


// [{}, {}, {}, {}]
const ContactList = () => {

  return (
    <>
      <div className="row">

        {ContactData.map(info =>{
            return(<div className="col-3">
                <Contact info={info} />
            </div>)

        })}

      </div>
    </>
  )
}

export default ContactList