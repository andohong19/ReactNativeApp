import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkBlue } from './Constants'

const Welcome = (props) => {

    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 300 }}>
                <View>
                    <Text style={{ color: 'white', fontSize: 40, marginBottom: 80, 
                        fontWeight: 'bold' }}>
                        Weather Tracking
                    </Text>
                </View>

                <View style={{ marginLeft: 30 }}>
                    <Btn bgColor={darkBlue} textColor={'white'} btnLabel="Login" 
                        Press={() => props.navigation.navigate('Login')} />
                    <Btn bgColor={'white'} textColor={darkBlue} btnLabel="Sign Up" 
                        Press={() => props.navigation.navigate('SignUp')} />
                </View>
            </View>
        </Background>
    )
}

export default Welcome

const styles = StyleSheet.create({})