import { TableCell } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react'
const API = 'https://pokeapi.co/api/v2/'

const Characteristic = (props:any) => {
    const [element, setElement ] = useState({
        characteristic : [],
    });
    useEffect(()=>{        
        consultarApi()
    },[])

    const consultarApi = async ()=>{ 
        await axios.get(API + 'characteristic/'+props.id).then(f => {
            const object :any = {
                characteristic:f.data.descriptions.map((e: any) => {
                    return e.description;
                })
             }
             setElement(object)
        }).catch(r=>{
           
        });       
    }

    
  return (
    <>
        {element.characteristic ? element.characteristic : '-'}
    </>
  )
}

export default Characteristic
