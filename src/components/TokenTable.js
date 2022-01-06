import { Container,LinearProgress,Table,TableContainer,TableHead,TextField,Typography,TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Classnames } from 'react-alice-carousel'
import { useNavigate } from 'react-router-dom'
import { CoinList } from '../config/api'
import { CryptState } from '../CryptContext'

const  TokenTable = () => {

    const [tokens , setTokens] = useState([]);
    const [loading, setloading] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const {currency} = CryptState();

    const fetchtokens = async () => {
        
        setloading(true);
        const {data} = await axios.get(CoinList(currency));

        setTokens(data);
        setloading(false );
    }

 console.log(tokens)
    useEffect( () => {
        fetchtokens();
    }, [currency])

const handleSearch = () => {
    return tokens.filter((token) => (
        token.name.toLowerCase().includes(search) ||
        token.symbol.toLowerCase().includes(search) 
    ))
}
 const useStyles = makeStyles( ()=> ({
     
 }));

 const classes = useStyles();
    return (
        <div>
            <Container style={{ textAlign:"center"}}>

                <Typography
                variant ="h5"
                style= {{marign:"18", fontFamily : "Montsarrat" }}
                >
                    Cryptocurrency Prices by Market Cap
                </Typography>
                <TextField label="Search for a Crypto Currency..." 
                variant ="outlined" 
                style = {{marginBottom:"15", width :"100%"}}
                onChange={(e)=> setSearch(e.target.value)}
                 />
                 <TableContainer>
                     {
                         loading? (
                            <LinearProgress style = {{backgroundColor : "#20A4F3" }} />
                         ) :(
                            <Table>
                                 <TableHead style = {{backgroundColor: "#20A4F3"}}>
                                     <TableRow>
                                         {["Coin","Price"," 24hChange", "Market Cap"].map((head) => (
                                             <TableCell 
                                             style ={{
                                                 color : "darkgery",
                                                 fontWeight : "700",
                                                 fontFamily : "Montserrat"
                                             }}
                                             key= {head}
                                             align={head === "Coin" ? "" : "right"}
                                             >
                                                 {head}
                                             </TableCell>
                                         ))}
                                     </TableRow>
                                     <TableBody>
                                           {handleSearch().map((row) => {
                                               const profit = row.price_change_percentage_24h > 0; 
                                               
                                               return(
                                                   <TableRow
                                                   onClick={() => navigate(`/tokens/${row.id}`)}
                                                   className={Classnames.row}
                                                   key={row.name}
                                                   >
                                                     <TableCell 
                                                     component= "th" 
                                                     scope= 'row'
                                                     style= {{
                                                         display : "felx",
                                                         gap: 15,
                                                     }}
                                                     >
                                                        <img 
                                                        src= {row?.image}
                                                        alt={row.name}
                                                        height={"50"}
                                                        style={{marginBottom : 10}}
                                                        />
                                                        <div style ={{ display : "flex" , flexDirection: "column"}}>
                                                            <span 
                                                            style={{
                                                                textTransform: "uppercase",
                                                                fontSize: 22,
                                                            }}
                                                            >{row.symbol}
                                                            </span>
                                                            <span style={{color:"darkgrey"}}>{row.name}</span>
                                                        </div>
                                                     </TableCell>
                                                   </TableRow>
                                               );
                                           })}
                                       </TableBody>
                                 </TableHead>
                             </Table>
                         )
                     }
                 </TableContainer>
            </Container>
        </div>
    )
}

export default TokenTable
