import React, { useState } from 'react'
import './Agecalc.css'

const Agecalc = () => {

    const [birthdate , setbirthdate] = useState('') ;
    const [age , setage] =  useState(0) ;  

    const calculateAge = () =>{             
        const today = new Date() ;              
        const birth = new Date(birthdate) ;                 

        let age = today.getFullYear() - birth.getFullYear() ;                       
        let monthdiff = today.getMonth() - birth.getMonth() ;    
                                   
        if(monthdiff < 0 || (monthdiff == 0 && today.getDate() < birth.getDate())){                                 
            age-- ; 
        }
        setage(age) ; 
    } 


    const resetcalc = () =>{
        setbirthdate('') ; 
        setage(0) ; 
    }

  return (
    <div className='Container'>
        <h2 className='heading container_title'>Age Calculator</h2>
        <p className='para container_title'>The age Calculator can be determine the age or interval two dates . the calculated age will be displayed in yours .</p>
        <div className='container_middle'>
            <div className='right'>
                <h4>Date of birth</h4>
                <input className='date' type="date" value={birthdate} onChange={e => setbirthdate(e.target.value)}/>
                <div className='btn'>
                    <button className='button1'  onClick={calculateAge} >Calculate Age</button>
                    <button className='button2'  onClick={ resetcalc } >Reset</button>
                </div>
            </div>

            <div className='left'>
                <div className='container_middle_para'>
                    <h1>Your Age is</h1>
                </div>
                <h1>{age>0 ? `${age}` : ``}</h1>
            </div>
        </div>
    </div>
  )
}

export default Agecalc
