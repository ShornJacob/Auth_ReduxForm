import NavBar from '../components/NavBar'
import RoutedApp from '../components/Auth/RoutedApp'

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    authenticated : state.auth.AUTHENTICATED,
    authenticating : state.auth.AUTHENTICATING,
    email : state.auth.email
})

const connectedNavBar =  connect(mapStateToProps)(NavBar)
const connectedRoutedApp =  connect(mapStateToProps)(RoutedApp)



export {connectedNavBar, connectedRoutedApp}