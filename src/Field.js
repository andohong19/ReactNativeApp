import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { darkBlue } from './Constants'

const Field = (props) => {
  return (
    <TextInput {...props} style={{ borderRadius: 100, color: darkBlue, 
        width: '60%', height: 50, paddingHorizontal: 5, backgroundColor: 'rgb(220,220,220)', 
        marginVertical: 10, marginRight: 50 }} 
        placeholderTextColor={darkBlue}>

    </TextInput>
  )
}

export default Field

const styles = StyleSheet.create({})