import React from 'react'
import {AppBar, Container, makeStyles, Menu, MenuItem, Select, Toolbar, Typography, withWidth} from "@material-ui/core"
import { Navigate, useNavigate } from 'react-router-dom';

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
