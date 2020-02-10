import React, { useState, useEffect } from 'react';
import api from '../../services/api'
export default function Recipe() {
  const [recipes, setRecipes] = useState([])  
  useEffect(() => {
    api.getEntries({content_type: 'recipe'}).then(response => {      
      setRecipes(response.items)
      console.log(response.items)
    }).catch(console.error)
  },[])
  return (
    <div className="App">     
      {recipes.map(recipe => (
        <div>
          <p>{recipe.fields.title}</p>
          {recipe.fields && (<img src={recipe.fields.photo.fields.file.url} alt=""/>)}
        </div>
      ))}
    </div>
  );
}
