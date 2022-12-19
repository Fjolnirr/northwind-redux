import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from "../../redux/actions/categoryActions"

class CategoryList extends Component {

  componentDidMount(){
    this.props.actions.getCategories()
  }

  render() {
    return (
      <div>
        
        <ListGroup>
        <ListGroupItemHeading>Categories</ListGroupItemHeading>
          {this.props.categories.map(category =>(
            <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
          ))}
          
        </ListGroup>
        <h5>Current Category : {this.props.currentCategory.categoryName}</h5>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    currentCategory:state.changeCategoryReducer,
    categories:state.categoryListReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
      getCategories:bindActionCreators(categoryActions.getCategories, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);


