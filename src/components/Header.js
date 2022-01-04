import React from 'react'
import {AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography, } from "@material-ui/core"
import {useNavigate } from 'react-router-dom';
import { CryptState } from '../CryptContext';

const useStyles = makeStyles(() => ({
    title:{
        flex:1,
        color:"#20A4F3",
        fontFamily:"Montserrat",
        fontWeight:"bold",
        fontSize:"27x",
        cursor: "pointer",
    }
}))

const Header = () => {

    const classes = useStyles()
    const navigate = useNavigate()

    const {currency, setCurrency } = CryptState();

    console.log(currency)
    return (
        <div>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick ={() => navigate("/")}className={classes.title}>
                            Crypt Hunt
                        </Typography>
                        <Select variant='outlined'
                           style={{
                            Width:100,
                            height:40,
                           marginRight:15,
                          }}
                          value={currency}
                          onChange={(e) => setCurrency(e.target.value) }
                        >
                            <MenuItem value = {'USD'}>USD</MenuItem>
                            <MenuItem value = {'NGN'} >NGN</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header
