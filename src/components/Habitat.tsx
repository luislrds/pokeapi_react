import { TableCell } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API = 'https://pokeapi.co/api/v2/'

const Habitat = (props:any) => {
    const [element, setElement ] = useState({
        habitat : ""
    });
    useEffect(()=>{        
        consultarApi()
    },[])
    const consultarApi = async ()=>{ 
        await axios.get(API + 'pokemon-habitat/'+props.id).then(f => {
            const object :any = {
                habitat : f.data.name
            }
            setElement(object)
        }).catch(r=>{
           
        });
    }

  return (
    <>
        {element.habitat ? element.habitat : '-'}
    
    </>
  )
}

export default Habitat
