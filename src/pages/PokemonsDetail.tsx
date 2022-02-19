import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Element from '../components/Element';
import { Link, useParams } from 'react-router-dom';
import Characteristic from '../components/Characteristic';
import Color from '../components/Color';
import Habitat from '../components/Habitat';
import { ListSubheader } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';

const PokemonsDetail = () => {
 
  const { id } = useParams();

  return (
    <>  
        <div className='pt-2 pb-10'>
            <Link to="/">
                <ArrowBack className="text-gray-600"></ArrowBack>
            </Link>
        </div>
        <div className='md:flex md:min-h-screen'>
            <div className="md:w-1/3 text-center">
                <Element id={id}></Element>
            </div>      
            <div className="md:w-2/3">     
            <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'none',
                        maxHeight: 300,
                        '& ul': { padding: 0 },
                    }}
                    subheader={<li />}
                    >
                    <li key={`section-1`}>
                        <ul>
                            <ListSubheader>{`Característica`}</ListSubheader>
                            <ListItem key={`list-1`}>
                                <ListItemText primary={
                                    <Characteristic id={id}></Characteristic>
                                } />
                            </ListItem>
                            <ListSubheader>{`Color`}</ListSubheader>
                            <ListItem key={`list-2`}>
                                <ListItemText primary={
                                    <p className="text-transform: uppercase">
                                        <Color id={id}></Color>
                                    </p>                                   
                                } />
                            </ListItem>
                            <ListSubheader>{`Habitat`}</ListSubheader>
                            <ListItem key={`list-3`}>
                                <ListItemText primary={
                                     <p className="text-transform: uppercase">
                                      <Habitat id={id}></Habitat>
                                     </p> 
                                } />
                            </ListItem>
                        </ul>
                    </li>
                    </List>       
                
            </div>
        </div>
    </>
  )
}

export default PokemonsDetail
