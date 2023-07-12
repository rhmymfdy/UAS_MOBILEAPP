import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ImageComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({navigation}) {

    
  return (
    <SafeAreaView>

        <View>
            <ImageBackground  style={style.banner} source={require('../assets/6920933.jpg')}/>
        </View>

        <View style={style.containermenu} >
            <Text style={style.menu}>WELLCOME TO MY LEARNING APP</Text>
        </View>

        <View style={style.container2} >
            <TouchableOpacity onPress={() => navigation.navigate('SD')}>
                <View style={style.jarak}>
                    {/* <Image style={style.logo} source={icon}/> */}
                    <Image  style={style.logo} source={require('../assets/sd.png')}/>
                    <Text style={style.text}>SD</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SMP')}>
                <View style={style.jarak}>
                    {/* <Image style={style.logo} source={icon}/> */}
                    <Image  style={style.logo} source={require('../assets/smp.png')}/>
                    <Text style={style.text}>SMP</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SMA')}>
                <View style={style.jarak}>
                    {/* <Image style={style.logo} source={icon}/> */}
                    <Image  style={style.logo} source={require('../assets/sma.png')}/>
                    <Text style={style.text}>SMA</Text>
                </View>
            </TouchableOpacity>
            
        </View>
        
    </SafeAreaView>

  );
}

const style = StyleSheet.create({
    banner :{
        // display : 'flex',
        height : 400,
        width : 430,
        border : 1,

        justifyContent:'center',
        alignItems :'center'
        
    },
    containermenu :{
        padding:5,
        margin:15,
        borderBottomWidth : 1,
        borderBottomColor : 'blue'
    },
    menu : {
        fontWeight : 'bold',
        fontSize : 20,
        textAlign : 'center'
    },
    logo : {
        height : 70,
        width : 60
    },

    container2 :{
        display : 'flex',
        flexDirection: 'row',
        justifyContent :'space-evenly',
        marginTop : 40
        
    },
    text :{
        textAlign :'center',
        fontSize : 20,
        fontStyle :'italic',
        fontWeight :'bold',
        marginTop : 10
    }
    
})
