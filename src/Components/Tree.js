import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import apples from '../images/apples2.png'


// import { List } from 'semantic-ui-react'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 545,
    height: 400,
    // padding: theme.spacing(1),
    overflow: "auto"
  },
  media: {
    height: 140
  },
  deets: {
    backgroundColor: 'rgba(237, 226, 225, 0.5)',
    color: '#423e3e'
  }
}));


function Tree({ tree }) {
const classes = useStyles()
  return (
   <div>
     <Card elevation={2} className={classes.root} style={{backgroundColor: '#7FA11C'}}>
     <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${apples}`}
          title="Produce Ready To Pick">
          <Typography variant="h4" align='center' className={classes.deets}>{tree.variety}</Typography>

          </CardMedia>
        <CardContent>
          <CardHeader
          title={`${tree.type}# ${tree.id}`}
          />
          <Typography variant="body2" color="textSecondary">
          {`Location: ${tree.address1},`}
          </Typography>

          <Typography variant="body2" color="textSecondary">
          {tree.address2}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
          {tree.comment ? `Comments: ${tree.comment}` : null}
          </Typography>

        </CardContent>
      </CardActionArea>
       </Card>
   </div>

    // <List as="h3" className="list-item">
    //   <List.Item className="list-item">
    //     <List.Icon name='leaf' color='green' />
    //     <List.Content>
    //       <List.Header>#{tree.id}</List.Header>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Type: {tree.type}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Variety: {tree.variety}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Number of Assets: {tree.numberOfTrees}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Address #1: {tree.address1}</List.Description>
    //     </List.Content>
    //     <List.Content>
    //       <List.Description>Address #2: {tree.address2}</List.Description>
    //     </List.Content>
    //   {tree.comment ? 
    //     (<List.Content>
    //       <List.Description>Comment: {tree.comment}</List.Description>
    //     </List.Content>)
    //     :
    //     null
    //   }
    //   </List.Item>
    // </List>
  )
}

export default Tree