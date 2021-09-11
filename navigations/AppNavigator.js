import React, {
    useContext
} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { InAppNavigator, AuthNavigator } from './InAppNavigator'
import { AuthContext } from '../contexts/AuthContext'


const AppNavigator = props => {

    const [state] = useContext(AuthContext)

    return (
       <NavigationContainer>

           {state.userToken == null ? <AuthNavigator/> : <InAppNavigator/>}

           
       </NavigationContainer>
    )
}

export default AppNavigator
