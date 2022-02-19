import axios from 'axios';
import { useEffect, useState } from 'react'
import { APICharacteristic } from '../helpers/endpoint'

const Characteristic = (props:any) => {
    const [element, setElement ] = useState({
        characteristic : [],
    });
    useEffect(()=>{        
        consultarApi()
    },[])

    const consultarApi = async ()=>{ 
        await axios.get(APICharacteristic()+props.id).then(f => {
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
