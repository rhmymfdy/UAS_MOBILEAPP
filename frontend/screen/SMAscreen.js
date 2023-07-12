import React from 'react';
import { StyleSheet, View, Text,  SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';

// Kemudian lanjutkan dengan komponen dan logika lainnya


export default function SMAscreen ({navigation}) {
    return ( 
        <SafeAreaView style={style.body}>
            <View>
                <ImageBackground  style={style.banner} source={require('../assets/smabg.jpg')}/>
            </View>
            <View>
                <Text style={style.tittle}>OPTION</Text>
                
            </View>
           <View style={style.margin}>
                <TouchableOpacity onPress={() => navigation.navigate('InputSMA')}>
                        <View style={style.bungkus}>
                            <Image style ={style.logo} source={require('../assets/input.png')}/>
                            <Text>INPUT MATERI SMA</Text>
                        </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('BacaSMA')}>
                        <View  style={style.bungkus}>
                            <Image style ={style.logo} source={require('../assets/book.png')}/>
                            <Text>BACA MATERI SMA</Text>
                        </View>
                </TouchableOpacity>         
                
           </View>
        </SafeAreaView>
     );
}

const style = StyleSheet.create({
    body:{
        backgroundColor : '#bde0fe'
    },
    margin:{

        // justifyContent : 'center',
        alignItems:'center',
        display : 'flex',
        flexDirection: 'row',
        justifyContent :'space-evenly',
        marginTop : 50,
        marginBottom :125
        
        
    },
    tittle :{
        textAlign :'center',
        marginTop :20,
        borderBottomWidth : 3,
        borderBottomColor : 'white',
        fontSize : 20,
        fontWeight :'bold',
        marginBottom : 20
    },
    logo : {
        height : 70,
        width : 60,
        marginBottom :20
        
    },
    bungkus:{
        alignItems :'center'
    },
    banner:{
        height : 400,
        width : 430,
    }
})
 
