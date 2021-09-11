import React, {
    useReducer,
    useEffect,
    createContext
} from 'react'
import { AuthReducer } from '../reducers/AuthReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Buat Context
export const AuthContext = createContext()

// initalState
const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null
}

// Buat Provider
export const AuthContextProvider = props => {
    // Gunakan useReducer
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Hooks setiap Render
    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
    
          try {
            userToken = await AsyncStorage.getItem('userToken')
          } catch (e) {
            // Restoring token failed
            console.log('Token Belum Ada !')
          }
    
          // After restoring token, we may need to validate it in production apps
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({ type: 'RESTORE_TOKEN', token: userToken });
          console.log(`useEffect of token: ${userToken}`)
        };
    
        bootstrapAsync();
      }, []);
      

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {props.children}
        </AuthContext.Provider>
    )
}