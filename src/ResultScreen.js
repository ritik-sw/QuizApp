import React from 'react'
import { View,Text,TouchableOpacity,ImageBackground,StyleSheet } from 'react-native'
import avenger from './avg.jpg'
const ResultScreen=(props)=> {
  return (
    <ImageBackground source={avenger} style={{flex:1,justifyContent:'center'}}>

        <Text style={styles.text}>Your Result is : {props.res}</Text>
      <TouchableOpacity style={styles.submitBtnContainer}
      onPress={props.restart}
      >
       <Text style={{color:'white',fontSize:16}}>Restart</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
    text:{
        marginTop:160,
        color:'white' ,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16
},
    submitBtnContainer: {
        marginTop:180,
        alignItems: "center",
        
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor:'red',
        width:120,
        height:40,
        borderRadius:10
    },
})
export default ResultScreen