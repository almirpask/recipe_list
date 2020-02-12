import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReactMarkdown from 'react-markdown'
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const useStyles = makeStyles({
  description: {
    fontSize: '16px',
  },
  title: {    
    fontSize: '25px',
  },
  img: {    
    width: '100%',
    height: '600px',
    borderRadius: '4px'
  },
  chef: {
    fontSize: '14px'
  },
  breadcrumbs: {
    marginBottom: '10px',
    marginTop: '10px',
  }
});

export default function Recipe({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const [recipe, setRecipe] = useState({
  })  
  useEffect(() => {    
    api.getEntry(match.params.id).then(response => {
      setRecipe(response.fields)
    }).catch(() => {
      history.push('/')
    })
  },[history, match.params.id])
  return (
    <Container>
      <div className="App">
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="inherit" href="/">
            Recipes
          </Link>
          <Typography color="textPrimary">
            {recipe.title}
          </Typography>
        </Breadcrumbs>
        { recipe.photo && (<img src={recipe.photo.fields.file.url} alt="" className={classes.img}/>)}      
        <Grid container>
          <Grid item xs={6}>
            {recipe.chef && (
              <Typography gutterBottom variant="h5" align="left" component="h2" className={classes.chef}>
                Chef Name: {recipe.chef.fields.name}
              </Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            {recipe.tags && (
              <Typography gutterBottom variant="h5" align="right" component="h2" className={classes.chef}>
                tags: {recipe.tags.map(tag => (
                  <Chip label={tag.fields.name} />
                ))}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>          
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {recipe.title}  
            </Typography>                            
            <Typography gutterBottom variant="h5" component="h2" className={classes.description}>
              <ReactMarkdown source={recipe.description} />
            </Typography>          
          </Grid>
          <Grid item md={4} xs={12}></Grid>
        </Grid>                  
      </div>
    </Container>
  );
}
