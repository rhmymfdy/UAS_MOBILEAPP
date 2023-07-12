import React from 'react';
import { useEffect,useState } from 'react';
import { View, Text,ScrollView,  SafeAreaView, TouchableOpacity , StyleSheet,Button} from 'react-native';
import axios from 'axios';
import ApiSmp from '../Api/smpBackend';


export default function BacaSMP ({navigation}) {

    const [data,setData] = useState([])
    const [id,setId] = useState()
    useEffect(()=>{
        const getData = async() =>{
            
            try {
                let response = await axios.get('http://10.0.2.2:8080/smp').then(response=>(setData(response.data)))
                
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    })
    const hapus =  async(id) =>{
        try {
            let res = await ApiSmp.getSmp()
            console.log(res.data)
            if(data){
                res = await ApiSmp.deleteSmp(id)
                alert(`Succes || data pelajaran ${res.data[0].id} telah dihapus`)
                reload()
                navigation.navigate("BacaSMP")
            }
        } catch (error) {
            console.log(error)
        }
    }
    const reload = async()=>{
        try {
            const res = ApiSd.getSd().then(res=>(setData(res.data)))
        } catch (error) {
            console.log(error)
        }
    }
    
    return ( 
        <ScrollView style={styles.body}>
            <View style={styles.bungkus}>
                <View>
                    <Text style={styles.tittle} >MATERI SMP</Text>
                </View>
                <View>
                    
                    <View>
                        <Text style={styles.awas}> Baca Materi Disini</Text>
                    </View>

                    {data.map((data)=>(
                        <View key={data.id} style={styles.table}>
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
                        <TouchableOpacity onPress={() => navigation.navigate("EditSD",{id : data.id})}>
                            <View>
                                <Text>EDIT</Text>
                            </View>
                        </TouchableOpacity >

                        
                        <Button onPress={() => hapus(data.id)} title='Hapus'>
                        <View>
                            <Text>HAPUS</Text>
                        </View>
                        </Button>
                    </View> 
                    ))} 
                    
                </View>
            </View>
        </ScrollView>
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
 
