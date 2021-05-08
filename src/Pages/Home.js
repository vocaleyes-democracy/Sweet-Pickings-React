import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Header } from 'semantic-ui-react'
import apples from '../images/apples.jpg'
import HeaderImg from '../Components/HeaderImg'

export default function Home() {

    return (
        <div>
          <HeaderImg />
            {/* <Container center>
                <Header
                    as="h1"
                    style={{
                      width: "100vw",
                      height: 320,
                      display: "inline-block",
                      backgroundImage: `url(${apples})`,
                      backgroundSize: "cover",
                      paddingTop: 29
                    }}
                >
                    <div className="header-text">
                        SWEET PICKINGS
                    </div>
                </Header>
            </Container>
            <Container textAlign={"center"} fluid style={{marginTop: 30}}>
                <Button size="massive" color="olive" >
                    <Link to="/about">Get Started</Link>
                </Button>
            </Container> */}
        </div>
    )
}
 
{/* // <HeaderImg /> */}

    {/* // <React.Fragment>
    //     <Container maxWidth="sm">
    //         <HeaderImg/>
    //         <Typography variant="h1" component="div" align="center" style={{ backgroundColor:  '#cfe8fc', height: '30vh', paddingTop: '4vh', marginTop: '5vh', marginBottom: '5vh' }}>
    //             SWEET PICKINGS
    //         </Typography>
    //     </Container>
    
    //     <Container maxWidth="sm" style={{ marginBottom: '5vh', textAlign: 'center' }}>
    //         <Button style={{ backgroundColor: '#cfe8fc' }}>
    //             <Link to="/about">
    //                 <Typography variant="h3" align="center" >Start Here</Typography>
    //             </Link>
    //         </Button>
    //     </Container>
    
    // </React.Fragment> */}