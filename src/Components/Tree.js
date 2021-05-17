import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

import apples from '../images/apples2.png'


// import { List } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
  
  card: {
    maxWidth: 545,
    height: 400,
    overflow: "auto",
    marginBottom: 35
  },
  media: {
    height: 140
  },
  mediaTitle: {
    backgroundColor: 'rgba(237, 226, 225, 0.5)',
    color: '#423e3e'
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

const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
   <Container>
     <Card elevation={2} className={classes.card} style={{backgroundColor: '#7FA11C'}}>
     <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${apples}`}
          title="Produce">
          <Typography variant="h4" align='center' className={classes.mediaTitle}>{tree.variety}</Typography>

          </CardMedia>
        <CardContent>
          <CardHeader align='center'
          title={`${tree.type}# ${tree.id}`}
          />

          <Typography variant="h5" color="inherit" align='center' gutterBottom='true'>
          {tree.numberOfTrees > 1 ? `${tree.numberOfTrees} ${tree.variety} Trees`: `${tree.numberOfTrees} ${tree.variety} Tree`}
          </Typography>

          <Typography variant="body2" color="textSecondary" align='center'>
          {`Location: ${tree.address1}, ${tree.address2}`}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:
          {tree.comment ? ` ${tree.comment}` : " No comment."}
          </Typography>
          </CardContent>
      </Collapse>
       </Card>
   </Container>

  )
}

export default Tree