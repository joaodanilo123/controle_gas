import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from '../api/api'

export default function Relatorio({ navigation }) {

    const dados = JSON.parse(navigation.getParam('relatorio').relatorio_dados);

    //  :"2020-01-20T03:00:00.000Z"
    // ->"20/01/2020 03:00" 
    function formatDate(strDate = Date) {

        const slicedDate = `${strDate}`.slice(0, 10);
        const slicedHour   = `${strDate}`.slice(11, 16);
        const [Y, M, D] = slicedDate.split("-");

        //const [M, D, Y, H] = sliced.split(" ");
        return `${slicedHour} de ${D}/${M}/${Y}`
    }

    useEffect(()=>{console.log(formatDate(dados[0].botijao_atualizacao))})
    return (
        <View>
            {dados.map(obj =>
                (
                    <View key={obj.botijao_tipo} style={styles.container}>
                        <Text style={styles.titulo}>{obj.botijao_tipo}</Text>
                        <Text>Cheios {obj.botijao_cheios}</Text>
                        <Text>Vazios {obj.botijao_vazios}</Text>
                        <Text>Emprestados {obj.botijao_emprestados}</Text>
                        <Text>Atualizado as {formatDate(obj.botijao_atualizacao)}</Text>
                    </View>
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        padding: 30,
        marginHorizontal: 0
    },
    titulo: {
        fontSize: 30,
    }
})