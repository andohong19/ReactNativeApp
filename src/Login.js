import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkBlue } from './Constants'
import Field from './Field'
import Btn from './Btn'

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: 'white', fontSize: 52, fontWeight: 'bold', marginVertical: 60, 
          marginRight: 50 }}>
          Login
        </Text>
        <View style={{
          backgroundColor: 'white', height: 700, width: 460,
          borderTopLeftRadius: 130, paddingTop: 100, alignItems: 'center'
        }}>
          <Text style={{ fontSize: 40, color: darkBlue, fontWeight: 'bold', marginRight: 50 }}>
            Welcome!
          </Text>
          <Text style={{ color: 'grey', fontSize: 19, marginBottom: 20, fontWeight: 'bold', marginRight: 50 }}>
            Login to your account
          </Text>
          <Field placeholder="Email / Username" keyboardType={"email-address"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View style={{ alignItems: 'flex-end', width: '60%', paddingRight: 16, 
            marginBottom: 160 }}>
            <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16, marginRight: 10 }}>
              Forgot Password?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkBlue} btnLabel="Login" 
            Press={() => props.navigation.navigate('Home')}/>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: 50 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>
              Don't have an account?&nbsp;
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
}

export default Login

const styles = StyleSheet.create({})