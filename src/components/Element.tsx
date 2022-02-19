import { Divider } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { APIName } from '../helpers/endpoint'

const Element = (props:any) => {
    const [element, setElement ] = useState({
        id:0,
        name : "",
        image: ""
    });
    useEffect(()=>{        
        consultarApi()
    },[])
    const consultarApi = async ()=>{ 
        await axios.get(APIName()+props.id).then(f => {
            const object :any = {
               id:f.data.id,
               name : f.data.name,
               image: f.data.sprites['front_default']
            }
            setElement(object)
        }).catch(r=>{
           
        });        
    }

  return (
    <>
        <div className="border-b-4 border-b-red-500">
            <p className='text-transform: uppercase font-black text-4xl py-4'>
                {element.name}
            </p>
        </div>
        
        <img className='pt-10 mx-auto' src={element.image} alt="{element.name}" />
    </>
  )
}

export default Element

