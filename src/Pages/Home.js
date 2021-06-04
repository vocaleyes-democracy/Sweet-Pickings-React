import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    marginTop: '5%',
    '&:hover': {
      backgroundColor: '#868d23',
      color: 'white'
    },
  },
  title: {
    fontWeight: 'bold'
  },
  sweet: {
    color: '#404A3D'
  }
})

export default function Home() {
const classes = useStyles()
    return (
      <>
        <div className={'home'}>
          <Typography variant="h2"  color={'secondary'} className={classes.title}>
            SWEET
          </Typography>
          <Typography variant="h2" align='center' className={`${classes.title} ${classes.sweet}`}>
            PICKINGS
          </Typography>
          </div>
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
        </>
    )
}