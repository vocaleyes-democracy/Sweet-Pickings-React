import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    },
})

export default function Contact() {

  const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Typography variant="h4">COMING SOON</Typography>
        </Container>
    )
}
