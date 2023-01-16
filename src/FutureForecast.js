import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FutureForecast = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
    </View>
  )
}

const FutureForecastItem = () => {
    return (
        <View style={styles.futureForecastItemContainer}>
            <Text style={styles.day}>Mon</Text>
            <Image source={require('../assets/images/weather_forecast_image.jpg')} style={styles.image}/>
            <Text style={styles.temp}>Night - 26&deg; C</Text>
            <Text style={styles.temp}>Day - 35&deg;C</Text>
        </View>
    )
}

export default FutureForecast

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  futureForecastItemContainer: {
    justifyContent: 'center',
    backgroundColor: '#00000033',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 5,
    flex: 1,
    marginLeft: 10
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
})