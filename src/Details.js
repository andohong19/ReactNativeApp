import { ImageBackground, Image, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import { API_KEY } from './Constants'
import WeatherScroll from './WeatherScroll'

export default function Details(props) {
    const [data, setData] = useState();
    const { name } = props.route.params;

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
        )
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

    const Data = ({ title, value }) => <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center'
    }}>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
            {title}
        </Text>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
            {value}
        </Text>
    </View>

    return (
        <View>
            <ImageBackground source={require('../assets/images/details_image.jpg')}
                style={{ height: deviceHeight, width: deviceWidth }}
                imageStyle={{ opacity: 0.7, backgroundColor: 'black' }}
            />

            <View style={{
                position: 'absolute',
                paddingVertical: 50, 
                paddingHorizontal: 10,
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center', width: deviceWidth - 20
                }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <Icon name='arrow-back' size={46} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Charts')}>
                        <Icon name='analytics' size={46} color='white' />
                    </TouchableOpacity>
                </View>
                {
                    data ? (
                        <View style={{
                            flexDirection: 'column',
                            //justifyContent: 'space-evenly', 
                            alignItems: 'center',
                            height: deviceHeight
                        }}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 40 }}>
                                    {name}
                                </Text>

                                <Text style={{ fontSize: 22, color: 'white', textAlign: 'center', marginBottom: 20 }}>
                                    {data['weather'][0]['main']}
                                </Text>
                            </View>

                            <Text style={{ color: 'white', fontSize: 64, marginBottom: 30 }}>
                                {(data['main']['temp'] - 273).toFixed(2)}&deg; C
                            </Text>

                            <View style={{borderColor: 'white', borderWidth: 1, padding: 20, 
                                borderRadius: 50 }}>
                                <Text style={{ color: 'white', fontSize: 22, marginBottom: 16, 
                                    textAlign: 'center', fontWeight: 'bold' }}>
                                    Weather Details
                                </Text>

                                <View style={{ width: deviceWidth - 60 }}>
                                    <Data value={`${data['wind']['speed']}m/s`} title='Wind' />
                                    <Data value={`${data['main']['pressure']}hPa`} title='Pressure' />
                                    <Data value={`${data['main']['humidity']}%`} title='Humidity' />
                                    <Data value={`${data['visibility'] / 1000}km`} title='Visibility' />
                                </View>
                            </View>
                        </View>
                    ) : null
                }
            </View>

            <WeatherScroll />
        </View>
    )
}