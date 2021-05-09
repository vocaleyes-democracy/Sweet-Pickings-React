import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Button, Header } from 'semantic-ui-react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography'

// import apples from '../images/apples.jpg'
// import HeaderImg from '../Components/HeaderImg'

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    marginTop: 550,
    '&:hover': {
      backgroundColor: '#868d23',
      color: 'white'
    },
  },
  title: {
    // fontSize: 70,
    fontWeight: 'bold',
    // color: '#000',
    paddingTop: '15%',
    display: 'inline-block',
    float: 'right'
  },
  sweet: {
    color: '#404A3D'
  }
})


export default function Home() {
const classes = useStyles()
    return (
        <div className={'home'}>
          <Typography variant="h2"  color={'secondary'} className={classes.title}>
            PICKINGS
          </Typography>
          <Typography variant="h2" align='center' className={`${classes.title} ${classes.sweet}`}>
            SWEET
          </Typography>
          {/* <HeaderImg /> */}
          <Container align='center'>
            <Button 
            variant="contained"
            size="large"
            color="secondary"
            href="/about"
            className={classes.btn}
            endIcon={<KeyboardArrowRight/>}>
            Get Started
            
            </Button>
          </Container>
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