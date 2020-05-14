import React, {Component} from 'react'


export default function Citizen({citizens}){
    console.log(`receiving props:`,citizens)
  
        return <div>
            <h1>Citizen no. {citizens.id}</h1>
            <p>{citizens.firstName} {citizens.lastName}</p>
            <span>Email: </span>
            <p>{citizens.email}</p>
            <span>School:</span>
            <p>{citizens.school}</p>

        </div>
    
}