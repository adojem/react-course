import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
   render() {
      return (
         <div className="recipe-card">
            <div className="recipe-card-img">
               <img src={this.props.img} alt={this.props.title}/>
            </div>
            <div className="recipe-card-content">
               <h3 className="recipe-title">{this.props.title}</h3>
               <h4>Ingredients:</h4>
               <ul>
                  {this.props.ingredients}
               </ul>
               <h4>Instructions:</h4>
               <p>{this.props.instructions}</p>
            </div>
            
         </div>
      );
   }
}

export default Recipe;
