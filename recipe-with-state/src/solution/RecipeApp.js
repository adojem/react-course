import React, { Component } from 'react';
import NavBar from './NavBar';
import Recipe from './Recipe';
import './RecipeApp.css';

class RecipeApp extends Component {

  static defaultProps = {
    mainTitlle: 'Recipe App',
    navMenus: ['New Recipe', 'Home', 'About', 'Contact Us'],
    recipes: [
      {
        title: 'Spahetti',
        ingreidients: ['flour', 'water'],
        instructions: 'Mix ingredients',
        img: 'spaghetti.jpg'
      },
      {
        title: 'Milkshake',
        ingreidients: ['2 Scoops Ice cream', '8 ounces milk'],
        instructions: 'Combine ice cream and milk. Blend until creamy',
        img: 'milkshake.jpg'
      },
      {
        title: 'Avocado Toast',
        ingreidients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'papper'],
        instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
        img: 'avocado_toast.jpg'
      }
    ]
  };

  render() {
    const cards = this.props.recipes.map((recipe, index) => (
      <Recipe
        key={index}
        title={recipe.title}
        ingredients={recipe.ingredients}
        img={recipe.img}
        instructions={recipe.instructions}
      />
    ));

    return (
      <div className="App">
        <NavBar
          title={this.props.mainTitlle}
          menus={this.props.navMenus}
        />
        <div className="recipes">{cards}</div>
      </div>
    );
  }
}

export default RecipeApp;
