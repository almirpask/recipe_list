import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import api from '../../services/api';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 140,
  },
  card: {
    flexGrow: 1,      
    height: '100%',    
    fontSize: '16px',    
  },
  cardTitle: {
    fontSize: '18px',
  },
  carDescription: {
    fontSize: '16px',
  },
  title: {    
    fontSize: '25px',
  },
  breadcrumbs: {
    marginBottom: '10px',
    marginTop: '10px',
  }
});

export default function Home() {
  const classes = useStyles();
  const history = useHistory()
  const [recipes, setRecipes] = useState([])  
  useEffect(() => {
    api.getEntries({content_type: 'recipe'}).then(response => {      
      setRecipes(response.items)      
    })
  },[])
  return (
    <Container>
      <div className={classes.root}>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Typography color="textPrimary">
            Recipes
          </Typography>           
        </Breadcrumbs>
        <Typography gutterBottom variant="h5" align="center" component="h2" className={classes.title}>
          Recipes        
        </Typography>
        <Grid container spacing={2} alignItems="stretch">      
          {recipes.map(recipe => (
            <Grid item xs={12} md={3} className={classes.root} key={recipe.sys.id}>
              <Card  className={classes.card} onClick={() => history.push(`/recipe/${recipe.sys.id}`)}>
                <CardActionArea className={classes.cardAction}>
                  {recipe.fields && (
                    <CardMedia
                      className={classes.media}
                      image={recipe.fields.photo.fields.file.url}
                      title="Contemplative Reptile"
                    />
                  )}            
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                      {recipe.fields.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.cardDescription}>
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>              
              </Card> 
            </Grid>   
          ))}
          {recipes.length === 0 && (
            <Grid item xs={12}>
              <Typography gutterBottom variant="h5" component="h2" align="center" className={classes.cardTitle}>
                There are no recipes :(
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
    </Container>
  );
}
