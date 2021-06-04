import React from 'react'
import apples from '../images/apples.jpg'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  media: {
    height: 400
  }
})
)

export default function HeaderImg() {
  const classes = useStyles()
  return (
    <Card 
      className={classes.root}>
      <CardMedia 
        className={classes.media}
        image={`${apples}`}
        alt="apples hanging from tree"
      >
        <Typography
          variant='h2' 
          align='center' 
          color='secondary'
        >
          SWEET PICKINGS
        </Typography>
      </CardMedia>
    </Card>
  )
}
