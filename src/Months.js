import React, { useState } from 'react';
import './Months.css';

const Months = (props)=>{
// use hooks
    const [showListUsers,setShowListUsers] = useState('');
    

// structure of data consisting of months and users who were born this month

    const sortUsers = props.users && props.users.reduce((previous, current) => {
        previous[new Date(current.dob).getMonth()].users.push(current);
        return previous;
        }, 
        props.months.map(each =>({
            month: each ,
            users:[]
        }))
      );

// hover effect of list   
    function hoverList(e,v){
        if(e.target){
        (v.length>0&&v.length<=2)
            ? e.target.style.backgroundColor = 'red'
            : (v.length>2&&v.length<=6)
                ? e.target.style.backgroundColor = 'blue'
                :(v.length>6&&v.length<=10)
                    ? e.target.style.backgroundColor = 'green'
                    :(v.length>10)
                        ?e.target.style.backgroundColor = 'red'
                        :e.target.style.backgroundColor = 'white';
        }
    }

// displaying list of users (firstname,lastname)
    function showUsers(arr,index,e){
        const obj = [...arr[index].users];
        let users = obj.map((item,index)=>{return(`${index+1} - ${item.firstName +" "+ item.lastName}`)})
        setShowListUsers(users); // change state of component Months
        
        // call function that change color of list childs
        hoverList(e,users) 
    }

    return(
        <div className='Container'>
            <ul className='ulStyle'>
                {props.months.map((item,index)=>{
                    return <li 
                            className='liStyle'
                            onMouseEnter={(event)=>showUsers(sortUsers,index,event)}
                            key={index}
                            >
                            {item}
                            </li>
                })}   
            </ul>
            {showListUsers?
                <ul style={{textAlign:'left'}}>
                    {showListUsers.map((item,index)=>(
                        <li key={index} style={{listStyleType: 'none'}}>{item}</li>))}
                </ul>
                :null}
        </div>
        
    )
}
    
export default Months;