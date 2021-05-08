import React from 'react'
// import { Header, Container } from 'semantic-ui-react'
import apples from '../images/apples.jpg'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // margin: 0,
    // position: 'relative'
  },
  media: {
    // width: '100%',
    height: 400,
    // objectFit: 'cover',
  }
})
)

export default function HeaderImg() {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}
        image={`${apples}`}
        alt="apples hanging from tree"
      >
        <Typography variant='h1' align='center'>
          SWEET PICKINGS
        </Typography>
      </CardMedia>
    </Card>
    // <Container center>
    //   <Header
    //     as="h1"
    //     style={{
    //       width: 1024,
    //       height: 320,
    //       display: "inline-block",
    //       opacity: 0.9,
    //       backgroundImage: `url(${apples})`,
    //       backgroundSize: "cover",
    //       marginBottom: 0,
    //       textAlign: "center"
    //     }}
    //   >
    //   </Header>
    // </Container>

    // <Image
    //   src='../assets/images/apples.jpg'
    //   alt="apples hanging from tree"
    //   fluid
    //   style={{
    //     background-position:
    //   }}
    // as='a'
    // href='/about'
    // centered={true}
    // content="testing testing"
    // />
  )
}
