import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import apples from '../images/apples2.png'

const useStyles = makeStyles((theme) => ({
  
  card: {
    maxWidth: 545,
    height: 300,
    overflow: "auto",
    marginBottom: 35
  },

  header: {
    padding: 2
  },

  media: {
    height: 140
  },
  mediaTitle: {
    backgroundColor: 'rgba(237, 226, 225, 0.5)',
    color: '#423e3e',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));


function Tree({ tree }) {
const classes = useStyles()

// const [cardFlip, setCardFlip] = React.useState(false);

// this handleClick function will take user to show page of site/tree
  const handleClick = () => {
    console.log('going to site show page...');
  };

  // there is an issue here where if there is more than one asset we aren't iterating thru and returning any url. using .find should return the first url but i haven't worked it out yet
  function renderFruitImage() {
    return tree.asset.map(asset => {
      console.log(asset.variety.length)
      // if (asset.url > 1) {
      //   return asset.url[0]
      // }
      // return asset.url ? asset.url : apples
    })
  }
  // console.log(tree.asset.type ? tree.asset.map(treeObj => treeObj.variety) : null)

  return (
    <Container>
      <Card elevation={2} className={classes.card} style={{backgroundColor: '#7FA11C'}} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={renderFruitImage()}
          title="Produce">

          <Typography key={tree.id} variant="h4" align="center" className={classes.mediaTitle}>{tree.address1}</Typography>

          </CardMedia>
        <CardContent>
          <CardHeader className={classes.header} align='center'
          title={`Site# ${tree.id}`}
          />

          <Typography variant="body2" color="inherit" align='center' gutterBottom='true'>
          Variety: {tree.asset.map(treeObj => treeObj.variety).join(', ')}
          </Typography>

          <Typography variant="body2" color="textSecondary" align='center'>
          {`Location: ${tree.address2}`}
          </Typography>

        </CardContent>
      </CardActionArea>
      </Card>
  </Container>
  )
}

export default Tree