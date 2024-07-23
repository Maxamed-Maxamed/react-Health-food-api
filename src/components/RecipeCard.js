import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent>
        <Typography variant="h5">{recipe.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;