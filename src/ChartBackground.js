import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

const ChartBackground = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require('../assets/images/details_image.jpg')}
                style={{ height: deviceHeight, width: deviceWidth }} 
                imageStyle={{ opacity: 0.7, backgroundColor: 'black' }} />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    )
}

export default ChartBackground

const styles = StyleSheet.create({})