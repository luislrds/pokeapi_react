import axios from 'axios';
import { useEffect, useState } from 'react';

const API = 'https://pokeapi.co/api/v2/'

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
        await axios.get(API + 'pokemon/'+props.id).then(f => {
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
        <p className='text-transform: uppercase font-black text-4xl'>
            {element.name}
        </p>
        
        <img className='pt-10 mx-auto' src={element.image} alt="{element.name}" />
    </>
  )
}

export default Element

