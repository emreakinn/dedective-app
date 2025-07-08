import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DEDECTİVE GAME</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ScenarioListScreen')}>
                <Text style={styles.button}>OYUNA GİR</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
    text: { color: '#fff', fontSize: 30 },
    button: { fontSize: 24, color: '#fff', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, overflow: 'hidden' },
});
