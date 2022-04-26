
import React from 'react'

const Days = () => {
    let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    ];

    return (
    <>
    <ui>
    {days.map(day => <li>{day}</li>)}
    </ui>

    </>
  )
}

export default Days
