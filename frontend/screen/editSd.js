import axios from 'axios';
import ApiSd from '../Api/sdBackend';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function EditSD({ navigation, route }) {
  let id = route.params.id;
  const [pelajaran, setPelajaran] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [materi, setMateri] = useState('');
  const [pertanyaan, setPertanyaan] = useState('');

  const [_pelajaran, set_Pelajaran] = useState('');
  const [_penerbit, set_Penerbit] = useState('');
  const [_materi, set_Materi] = useState('');
  const [_pertanyaan, set_Pertanyaan] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiSd.getSdById(id);
        const data = response.data;
        if (data.length > 0) {
          const sdData = data[0];
          setPelajaran(sdData.pelajaran);
          setPenerbit(sdData.penerbit);
          setMateri(sdData.materi);
          setPertanyaan(sdData.pertanyaan);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

    

  const put = async () => {
    try {
      const updatedData = {
        pelajaran: _pelajaran,
        penerbit: _penerbit,
        materi: _materi,
        pertanyaan: _pertanyaan,
      };

      const response = await ApiSd.updateSd(id, updatedData);
      console.log(response.data);
      alert('Success');
      navigation.navigate("SD")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <View>
          <Text style={styles.tittle}>FORM MATERI SEKOLAH SD</Text>
        </View>
        <View style={styles.awas}>
          <Text style={styles.label}>Nama Mata Pelajaran</Text>
          <TextInput
            value={_pelajaran}
            onChangeText={(value) => set_Pelajaran(value)}
            style={styles.input}
            placeholder={pelajaran}
          />

          <Text style={styles.label}>Nama Penerbit</Text>
          <TextInput
            value={_penerbit}
            onChangeText={(value) => set_Penerbit(value)}
            style={styles.input}
            placeholder={penerbit}
          />

          <Text style={styles.label}>Masukan Materi</Text>
          <TextInput
            value={_materi}
            onChangeText={(value) => set_Materi(value)}
            style={styles.box}
            placeholder={materi}
          />

          <Text style={styles.label}>Masukan</Text>
          <TextInput
            value={_pertanyaan}
            onChangeText={(value) => set_Pertanyaan(value)}
            style={styles.input}
            placeholder={pertanyaan}
          />
        </View>
        <View>
          <TouchableOpacity onPress={put}>
            <View>
              <Text style={styles.button}>SEND</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 160,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    overflow: 'visible',
    marginBottom: 60,
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
    backgroundColor: '#a2d2ff',
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
    marginBottom: 200,
  },
  form: {
    padding: 10,
  },
  awas: {
    marginTop: 50,
  },
});
