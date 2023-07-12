import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text,  SafeAreaView, TouchableOpacity , StyleSheet} from 'react-native';
import ApiSma from '../Api/smaBackend';



export default function BacaSMA ({navigation}) {

    const [data,setData] = useState([])

    useEffect(()=> {
        const getData = async() => {

            try {
                let response = await axios.get('http://10.0.2.2:8000/sma').then(response=>(setData(response.data)))
            } catch (error) {
                console.log(error)
            }
    }
    getData()
})
    return ( 
        <SafeAreaView style={styles.body}>
            <View style={styles.bungkus}>
                <View>
                    <Text style={styles.tittle} >MATERI SMA</Text>
                </View>
                <View>
                    
                    <View>
                        <Text style={styles.awas}> Baca Materi Disini</Text>
                    </View>

                    <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>Mata Pelajaran </Text>
                        <Text style={styles.cell}>{data.pelajaran}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>Penerbit</Text>
                        <Text style={styles.cell}>{data.penerbit}</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.cell}>Materi</Text>
                        <Text style={styles.cell}>{data.materi}</Text>
                    </View>
                    <View style={styles.tableRow}>
                            <Text style={styles.cell}>Masukan</Text>
                            <Text style={styles.cell}>{data.pertanyaan}</Text>
                        </View>
                    <TouchableOpacity onPress={() => navigation.navigate('InputSMA')}>
                            <View>
                                <Text>EDIT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>  
                    
                </View>
            </View>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    table: {
      borderWidth: 1,
      borderColor: 'black',
      marginVertical: 5,
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      paddingVertical: 5,
    },
    cell: {
      flex: 1,
    },
    bungkus:{
        padding : 15
    },
    body:{
        backgroundColor : '#fefae0'
    },
    tittle:{
        fontSize : 20,
        textAlign : 'center',
        marginTop : 50,
        marginBottom : 50,
        fontWeight:'bold',
    },
    awas:{
        fontSize : 15,
        fontWeight :'bold',
        marginBottom : 10
    }
  });
 
