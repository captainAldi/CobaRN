import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileScreen = () => {

    // Variable
    const [tokenUser, setTokenUser] = useState(null)

    useEffect(() => {
        
        const getDataUser = async () => {
            let dataUser = null

            try {
                dataUser = await AsyncStorage.getItem('userToken')
            } catch (error) {
                console.log('no item can get in profile screen')
            }

            setTokenUser(dataUser)

        }

        getDataUser()
 
    }, [])

    return (
        <View>
            <Text>Ini Profile</Text>
            <Text>Dengan Token {tokenUser}</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
