import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

import api from "../api/api";


function Relatorios({ navigation }) {
    const [relatorios, setRelatorios] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadRelatorios() {
        const response = await api.get("/relatorios");
        setRelatorios(response.data);
    }

    function goToRelatorio(relatorio) {
        navigation.navigate("Relatorio",  {relatorio} )
    }

    useEffect(() => {
        loadRelatorios().then(() => {
            setLoading(false)
        });
    }, [])

    if (loading) return (<Text>Carregando...</Text>);

    return (
        <ScrollView>
            <View style={styles.conteiner} >
                {relatorios.map(relatorio => (
                    <View key={relatorio.relatorio_id} style={styles.box}>
                        <TouchableOpacity style={styles.btn} onPress={() => goToRelatorio(relatorio)}>
                            <Text style={styles.label}>ID: {relatorio.relatorio_id}</Text>
                            <Text style={styles.label}>DATA: {relatorio.relatorio_data}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    box: {
        marginTop: 5,
        height: 70,
    },
    btn: {
        height: 60,
        width: Dimensions.get('screen').width - 15,
        backgroundColor: "#0066ff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    label: {
        color: "#fff",
    }
})

export default Relatorios;