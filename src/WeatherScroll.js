import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { deviceWidth } from './Dimensions'
import FutureForecast from './FutureForecast'

const WeatherScroll = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      <CurrentTempEl />
      <FutureForecast />
    </ScrollView>
  )
}

const CurrentTempEl = () => {
    return (
        <View style={styles.currentTempContainer}>
            <Image source={require('../assets/images/weather_forecast_image.jpg')} style={styles.image} />
            <View style={styles.otherContainer}>
                <Text style={styles.day}>Sunday</Text>
                <Text style={styles.temp}>Night - 28&deg;C</Text>
                <Text style={styles.temp}>Day - 30&deg;C</Text>
            </View>
        </View>
    )
}

export default WeatherScroll

const styles = StyleSheet.create({
    scrollView: {
        position: 'absolute',
        top: 555,
        width: deviceWidth,
        backgroundColor: '#18181bcc',
        padding: 30,
        flex: 0.4
    },
    image: {
        marginLeft: 25,
        width: 150,
        height: 150,
    },
    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 1
    },
    day: {
        fontSize: 20,
        color: 'white',
        backgroundColor: '#3c3c44',
        padding: 10,
        textAlign: 'center',
        fontWeight: '200',
        marginBottom: 15,
        marginTop: 10
    },
    temp: {
        fontSize: 16,
        color: 'white',
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 5
    },
    otherContainer: {
        padding: 30
    }
})