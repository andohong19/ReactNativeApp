import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkBlue } from './Constants'
import Field from './Field'
import Btn from './Btn'

const SignUp = (props) => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: 'white', fontSize: 52, fontWeight: 'bold', marginTop: 60, marginRight: 50 }}>
          Register
        </Text>
        <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 20, marginRight: 50 }}>
          Create a new account
        </Text>
        <View style={{
          backgroundColor: 'white', height: 700, width: 460,
          borderTopLeftRadius: 130, paddingTop: 80, alignItems: 'center'
        }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email / Username" keyboardType={"email-address"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />

          <View style={{
            display: 'flex', flexDirection: 'row', width: '60%', paddingRight: 16, marginRight: 167,
            marginTop: 20
          }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              By signing in, you agreed to our&nbsp;
            </Text>
            <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>
              Terms, Conditions
            </Text>
          </View>

          <View style={{
            display: 'flex', flexDirection: 'row', width: '60%', paddingRight: 16,
            justifyContent: 'center', marginBottom: 10
          }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              and&nbsp;
            </Text>
            <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>
              Privacy Policy
            </Text>
          </View>

          <Btn textColor='white' bgColor={darkBlue} btnLabel="Sign Up"
            Press={() => {
              alert('Account created')
              props.navigation.navigate('Login')
            }} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: 50 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>
              Already have an account?&nbsp;
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
              <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
}

export default SignUp

const styles = StyleSheet.create({})