// banner for sweet pickings
// buttons for "start here --> sweet pickings"
// large image
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';

export default function Home() {

    return (
            <React.Fragment>
                <Container maxWidth="sm">
                    <Typography variant="h1" component="div" align="center" style={{ backgroundColor:  '#cfe8fc', height: '40vh', paddingTop: '4vh', marginTop: '5vh', marginBottom: '5vh' }}>
                        SWEET PICKINGS
                    </Typography>
                </Container>
            
                <Container maxWidth="sm" style={{ marginBottom: '5vh', textAlign: 'center' }}>
                    <Button style={{ backgroundColor: '#cfe8fc' }}>
                        <Link to="/about">
                            <Typography variant="h3" align="center" >Start Here</Typography>
                        </Link>
                    </Button>
                </Container>
            
            </React.Fragment>
    )
}
