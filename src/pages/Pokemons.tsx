import { useEffect, useState } from "react"
import PokemonDTO from "../type/PokemonDTO";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import Name from "../components/Element";
import Characteristic from "../components/Characteristic";
import Color from "../components/Color";
import Habitat from "../components/Habitat";

const API = 'https://pokeapi.co/api/v2/'

const Pokemons = () => {

    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [elements, setElements ] = useState([]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalResults, setTotalResults] = useState(0);
    
    useEffect(()=>{        
        consultarApi()
    },[])

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
        consultarApi(newPage, rowsPerPage)
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        consultarApi(0, parseInt(event.target.value))
    };

    const handleClick = (id:number) => {
        navigate(`/${id}`);
    };

    const consultarApi = async (offset:number= 0, limit:number=10)=>{ 
        setLoading(true)
        await axios.get(`${API}pokemon?limit=${limit}&offset=${offset}`)
        .then((res:any) => {
            setTotalResults(res.data.count)
            const arrayElement =  res.data.results.map((result:any)=>{  
                const regex = /\/(\d+)\//;
                let p = result.url.match(regex)
                let id = (p) ? parseInt(p[1]) : 0                 
                const object = {
                    id : id,
                    name:result.name,
                    url:result.url,
                }

                return object
            })
            setElements(arrayElement)
            setLoading(false)
        })
    }

  return (
    <div> 
     <TableContainer component={Paper}>
            <Table aria-label="table"  >
                <TableHead className="bg-blue-800">
                <TableRow >
                    <TableCell align='center'>
                        <p className='text-white text-2xl text-transform: uppercase'>Nombre</p>
                    </TableCell>
                    <TableCell align='center'>
                        <p className='text-white text-2xl text-transform: uppercase'>Características</p></TableCell>
                    <TableCell align='center'>
                        <p className='text-white text-2xl text-transform: uppercase'>Color</p>
                    </TableCell>
                    <TableCell align='center'>
                        <p className='text-white text-2xl text-transform: uppercase'>Habitat</p></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {
                    loading ?
                            <TableRow key={'loading'}> 
                                <TableCell component="th" scope="row" colSpan={4} align='center'>
                                    <CircularProgress></CircularProgress>
                                </TableCell>
                            </TableRow>
                    :

                    elements.map((row:PokemonDTO, index) => (         
                            <TableRow key={index} hover onClick={() => handleClick(row.id)}  
                            className="hover:cursor-pointer"
                            sx={{
                                '&.MuiTableRow-hover': {
                                  '&:hover': {
                                    backgroundColor: '#7992E8',
                                  },
                                },
                              }}>
                                    <TableCell component="th" scope="row">
                                        <p className="text-transform: uppercase font-black">
                                                {row.name} 
                                        </p>                                                                  
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <p> 
                                            <Characteristic id={row.id}></Characteristic>  
                                        </p>                                                              
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <p className="text-transform: uppercase"> 
                                            <Color id={row.id}></Color>        
                                        </p>                
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <p className="text-transform: uppercase"> 
                                            <Habitat id={row.id}></Habitat>       
                                        </p>                                                                 
                                    </TableCell>
                            </TableRow>
                           
                    ))
                 }
                </TableBody>                
            </Table>
            {loading ? 
                <></>
            :
                <TablePagination
                rowsPerPageOptions={[10,20,30]}
                    labelRowsPerPage={"Elementos por página"}
                    component="div"
                    count={totalResults}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            }

            </TableContainer>
           
     
     
    </div>
  )
}

export default Pokemons