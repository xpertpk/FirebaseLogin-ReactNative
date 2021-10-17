import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleSignout =()=> {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignout}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        backgroundColor:'#0782f9',
        padding:15,
        borderRadius:10,
        width:'60%',
        alignItems:'center',
        marginTop:30
    },
    buttonText: {
        color:'white',
        fontWeight:'700',
        fontSize:16
    }
})
