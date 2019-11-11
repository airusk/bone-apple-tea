import React from 'react';
import IngredientIndexItem from './ingredient/ingredient_index_item';
import StepIndexItem from './step/step_index_item';

class RecipeShow extends React.Component{

  componentDidMount(){
    this.props.fetchRecipe(this.props.match.params.recipeId);
    this.props.fetchIngredients();
    this.props.fetchSteps();
  }
  render(){
    const { recipe, ingredients, steps } = this.props;

    const recipeHead  = (
      <div className="recipe-show">
        <div className="post-head-container">
          <a className="theme unhealthy subheading">
            Unhealthyish
            {/* replace with new theme attribute from recipe */}
          </a>
          <h1 className="title">{recipe.title}</h1>
          <div className="author">
            <br />
            <p> Author ID: {recipe.user_id}</p>
          </div>
          <div className="rating subheading">
            12 ratings *****
          </div>
        </div>
        <div className="main-image">
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          PIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZAPIZZA
          </div>
        <div className="description header">
          <div className="body">
            {recipe.body}
          </div>
        </div>
      </div>
    );

    const recipeIngredients = (
      <div className="ingredients-container">
        <div>
          <ul>{
            ingredients.map(ingredient => (
              <IngredientIndexItem
                key = {ingredient.id}
                ingredient = {ingredient}
              />        
            ))
          }
          </ul>
        </div>
      </div>
    );

    const recipeSteps = (
      <div className="recipe-container">
        <div>
          <ol>{
            steps.map(step => (
              <StepIndexItem
                key = {step.id}
                step = {step}
              />
            ))
          }  
          </ol>
        </div>
      </div>
    );
    
    const recipePage = (
      <div className="recipe-page">
        { recipeHead }
        { recipeIngredients }
        { recipeSteps }
      </div>
    );
    return(
      recipePage
    );
  }
}

RecipeShow.defaultProps = {
  recipe:{
    id:"1337",
    title: "Beep.",
    user_id: "Bop",
    body: "Boop."
  },
  ingredients:{
    id: "1337",
    text: "Beep.",
    recipe_id: "Bop.",
    ord: "Boop."
  },
  steps:{
    id: "1337",
    body: "Beep.",
    recipe_id: "Bop.",
    ord: "Boop."
  }
}

export default RecipeShow;