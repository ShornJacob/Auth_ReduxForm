import NavBar from '../components/NavBar'
import PrivateRoute from '../components/PrivateRoute'
import PublicRoute from '../components/PublicRoute'

import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    authenticated : state.auth.AUTHENTICATED,
    authenticating : state.auth.AUTHENTICATING,
    email : state.auth.email
})

//Own component props are available as second argument of mapStateToProps function:
const mapStateToPropsForRoutes = (state,ownProps) => ({
    authenticated : state.auth.AUTHENTICATED,
    authenticating : state.auth.AUTHENTICATING,
    ownProps
})

const connectedNavBar =  connect(mapStateToProps)(NavBar)

//The return of connect() is a wrapper function that takes your component and returns a wrapper component with the additional props it injects
const connectedPrivateRoute=  connect(mapStateToPropsForRoutes)(PrivateRoute)
const connectedPublicRoute=  connect(mapStateToPropsForRoutes)(PublicRoute)


export {connectedNavBar , connectedPrivateRoute, connectedPublicRoute}