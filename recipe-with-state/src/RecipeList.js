import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
   static defaultProps = {
      recipes: [
        {
          title: 'Spahetti',
          ingredients: ['flour', 'water'],
          instructions: 'Mix ingredients',
          img: 'spaghetti.jpg'
        },
        {
          title: 'Milkshake',
          ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
          instructions: 'Combine ice cream and milk. Blend until creamy',
          img: 'milkshake.jpg'
        },
        {
          title: 'Avocado Toast',
          ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'papper'],
          instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
          img: 'avocado_toast.jpg'
        }
      ]
   };
   
   static propTypes = {
      recipes: PropTypes.arrayOf(PropTypes.object)
   };

   render() {
      const recipes = this.props.recipes.map((r, index) => (
         <Recipe key={r.id} {...r} />
      ));

      return (
         <div className="recipe-list">
            {recipes}
         </div>
      );
   }
}

export default RecipeList;
