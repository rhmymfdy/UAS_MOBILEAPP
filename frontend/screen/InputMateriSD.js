import axios from 'axios';
import ApiSd from '../Api/sdBackend';
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';


export default function InputSD({ navigation }) {

    const [pelajaran, setPelajaran] = useState('')
    const [penerbit, setPenerbit] = useState('')
    const [materi, setMateri] = useState('')
    const [pertanyaan, setPertanyaan] = useState('')

    const post = async () => {
        if (!pelajaran || !penerbit || !materi || !pertanyaan) {
            alert('Data Masih Ada Yang kosong')
        } else {
            try {
                const p = await ApiSd.postSd({
                    "pelajaran": pelajaran,
                    "penerbit": penerbit,
                    "materi": materi,
                    "pertanyaan": pertanyaan
                })
                alert("Succes")
                navigation.navigate('SD')
            } catch (error) {
                console.log(error.message)
            }

        }
    }

    return (
        <SafeAreaView style={style.bungkus}>
            <View style={style.form} >
                <View>
                    <Text style={style.tittle}>FORM MATERI SEKOLAH SD</Text>
                </View>
                <View style={style.awas}>
                    <Text style={style.label}>Nama Mata Pelajaran </Text>
                    <TextInput value={pelajaran}
                        onChangeText={value => { setPelajaran(value) }}
                        style={style.input}
                        placeholder='Masukan Nama Mata Pelajaran' />

                    <Text style={style.label}>Nama Penerbit </Text>
                    <TextInput value={penerbit}
                        onChangeText={value => { setPenerbit(value) }}
                        style={style.input}
                        placeholder='Masukan Nama Penerbit Materi ' />

                    <Text style={style.label}>Masukan Materi </Text>
                    <TextInput value={materi}
                        onChangeText={value => { setMateri(value) }}
                        style={style.box}
                        placeholder='Materi Yang Ingin Di Sampaikan ' />

                    <Text style={style.label}>Masukan</Text>
                    <TextInput value={pertanyaan}
                        onChangeText={value => { setPertanyaan(value) }}
                        style={style.input}
                        placeholder='Masukan' />


                </View>
                <View>
                    <TouchableOpacity onPress={post}>
                        <View>
                            <Text style={style.button}>SEND</Text>
                        </View>
                    </TouchableOpacity>
                    

                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    box: {
        height: 160,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        overflow: 'visible',
        marginBottom: 60
    },
    label: {
        fontWeight: 'bold',
        marginTop: 6,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    bungkus: {
        backgroundColor: '#a2d2ff'
    },
    tittle: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 50,
        fontWeight: 'bold',
    },
    button: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 6,
        marginBottom: 200
    },
    form: {

        padding: 10
    },
    awas: {
        marginTop: 50
    }

})