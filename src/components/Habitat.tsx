import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { APIHabitat } from '../helpers/endpoint'

const Habitat = (props:any) => {
    const [element, setElement ] = useState({
        habitat : ""
    });
    useEffect(()=>{        
        consultarApi()
    },[])
    const consultarApi = async ()=>{ 
        await axios.get(APIHabitat()+props.id).then(f => {
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
