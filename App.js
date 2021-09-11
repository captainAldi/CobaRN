import React from 'react'
import { AuthContextProvider } from './contexts/AuthContext'
import AppNavigator from './navigations/AppNavigator'
import { Provider as PaperProvider } from 'react-native-paper';



const App = () => {
  return (
    <AuthContextProvider>
      <PaperProvider>
        <AppNavigator/>
      </PaperProvider>
    </AuthContextProvider>
    
  )
}

export default App

