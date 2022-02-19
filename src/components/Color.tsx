import { TableCell } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API = 'https://pokeapi.co/api/v2/'
const Color = (props:any) => {
    const [element, setElement ] = useState({
        color : ""
    });
    useEffect(()=>{        
        consultarApi()
    },[])
    const consultarApi = async ()=>{ 
        await axios.get(API + 'pokemon-color/'+props.id).then(f => {
            const object :any = {
                color:f.data.name
            }
            setElement(object)
        }).catch(r=>{
           
        });
    }

  return (
    <>
        {element.color ? element.color : '-'}
    </>
  )
}

export default Color
