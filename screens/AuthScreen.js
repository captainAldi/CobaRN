import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { 
    useState,
    useContext
} from 'react'
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'

const AuthScreen = () => {

    // Variable
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [ state, dispatch] = useContext(AuthContext)

    console.log(`username: ${username} + password: ${password}`)

    // Methods
    const signIn = async (data) => {

        try {

            // Cek Sederhana username dan pw
            if(data.username != 'admin' || data.password != 'admin') {
                Alert.alert(
                    'Peringatan !',
                    'Login gagal !',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('cancel'),
                            style: 'cancel'
                        },
                        {
                            text: 'Ok',
                            onPress: () => console.log('ok')
                        }
                    ]

                )

                return
            }

            await AsyncStorage.setItem('userToken', 'qwe')
            
        } catch (error) {
            console.log(`error di signIn`)
        }

        dispatch({
            type: 'SIGN_IN',
            token: 'qwe'
        })
    }

    return (
        <View style={styles.screen}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in" onPress={() => signIn({ username, password })} />
        </View>
        )
}

export default AuthScreen

//  Styling

export const screenOptions = navData => {
    return {
        headerTitle: 'Auth'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
