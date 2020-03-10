import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, StatusBar } from "react-native";

function Main({ navigation }) {
    
    function goToRelatorios() {
        navigation.navigate('ListRelatorios');
    }

    function goToGerarRelatorio() {
        navigation.navigate('GerarRelatorio');
    }

    function goToAtualizarBotijao() {
        navigation.navigate('AtualizarBotijao');
    }

    return (
        <View style={styles.main}>
            <StatusBar hidden={true}/>
            <Image style={styles.img} source={{
                uri: "http://hgcipo.com.br/wp-content/uploads/2017/05/cropped-hgLOGO.png"
            }}/>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btn} onPress={goToGerarRelatorio}>
                    <Text style={styles.btnText}>Gerar relatório</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Atualizar Botijão</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={goToRelatorios}>
                    <Text style={styles.btnText}>Listar relátórios</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    btnGroup: {
        flexDirection: "column"
    },
    btn: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        height: 50,
        width: Dimensions.get('window').width - 10,
        borderRadius: 5,
        backgroundColor: '#0066ff'
    },
    btnText: {
        color: "#fff",
        fontSize: 20,
    },
    img: {
        marginVertical: 10,
        width: 300,
        height: 200
    }
})

export default Main;