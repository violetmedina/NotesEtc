import React from 'react'
import Friend from './Friend'

const FriendList = () => {


    const friends = [
        'Bob',
        'Linda',
        'Tina',
        'Louise',
        'Gene',
      ]



  return (
    <>
        <ul>
            {/* {friends.map(friend => <li>{friend}</li>)}  //for reference */}

            {friends.map(friend => <Friend name={friend} />)}

        </ul>

    </>
  )
}

export default FriendList