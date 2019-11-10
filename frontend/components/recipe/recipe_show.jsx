import React from 'react';

class RecipeShow extends React.Component{
  componentDidMount(){
    this.props.fetchRecipe(this.props.match.params.recipeId)
  }
  render(){
    const { recipe } = this.props;
    return(
      <div className="recipe-show">
        <div className="post-head-container">
          <a className="theme unhealthy subheading">
            Unhealthyish
          </a>
          <h1 className="title">{recipe.title}</h1>
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
          </div>
        <div className="description header">
          <div className="body">
            {recipe.body}
          </div>
        </div>
        <p>{recipe.user_id}</p>
      </div>
    );
  }
}

RecipeShow.defaultProps = {
  recipe:{
    title: "Beep.",
    body: "Bop.",
    user_id: "Boop"
  }
}

export default RecipeShow;