import { Dimensions, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-chart-kit";
import ChartBackground from './ChartBackground';
import Icon from 'react-native-vector-icons/Ionicons'

const Charts = () => {
  return (
    <ChartBackground>

        <View style={{ alignItems: 'center' }}>
            <Text style={{ color: 'white', marginTop: 200, fontSize: 40, fontWeight: 'bold' }}>
                Temperature Chart
            </Text>
        </View>

        <LineChart
            data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        data: [18,19,21,20,19,22,21]
                    }
                ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={400}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#eee",
                //backgroundGradientFrom: "#ddd",
                //backgroundGradientTo: "#211F1F",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16,
                marginTop: 50
            }}
            />
    </ChartBackground>


  )
}

export default Charts

const styles = StyleSheet.create({})