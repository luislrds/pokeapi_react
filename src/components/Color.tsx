import axios from 'axios';
import { useEffect, useState } from 'react'
import { APIColor } from '../helpers/endpoint'

const Color = (props:any) => {
    const [element, setElement ] = useState({
        color : ""
    });
    useEffect(()=>{        
        consultarApi()
    },[])
    const consultarApi = async ()=>{ 
        await axios.get(APIColor()+props.id).then(f => {
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
