import React from 'react'
import App from 'App.js'



const mapStateToProps = (state,ownProps) => {
    return {
      todos: getVisibleTodos(state.todos, ownProps.filter)
    }
  }
  
const connectedApp = connect(mapStateToProps,mapDispatchtoProps)(App)
const connectedNav = connect(mapStateToProps,mapDispatchtoProps)(App)