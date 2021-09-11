import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from 'react-native-paper'

const HomeScreen = ({navigation}) => {


    const [state, dispatch] = useContext(AuthContext)

    const signOut = async () => {

        try {
            await AsyncStorage.removeItem('userToken')
        } catch (error) {
            console.log(`error di signOut + ${error}`)
        }

        dispatch({
            type: 'SIGN_OUT'
        })
    }

    return (
        <View style={styles.screen}>
            <Text>Home Screen</Text>


            <Button
                mode="contained"
                onPress={() => navigation.navigate('Profile')}
                style={styles.button}
            >
                Profile
            </Button>

            <Button
                onPress={signOut}
                mode="contained"
                style={styles.button}
            >
                Logout
            </Button>

        </View>
    )
}

export default HomeScreen

//  Styling

export const screenOptions = navData => {
    return {
        headerTitle: 'Home'
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        // backgroundColor: '#1090e6',
        marginBottom: 5,
        padding: 5,
    },
    text: {
        color: "#ffffff"
    }
})
