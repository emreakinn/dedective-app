import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CharactersScreen({ route, navigation }) {
    const { selectedGame, selectedCharacter } = route.params;
    const statements = selectedCharacter.statements;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{selectedGame?.title}</Text>
            <Text style={styles.header}>ŞÜPHELİLER</Text>
            <Text style={styles.name}>{selectedCharacter.name}</Text>
            <Text style={styles.role}>{selectedCharacter.role}</Text>
            {statements.map((statement, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.name}>{statement.question}</Text>
                    <Text style={styles.role}>{statement.answer}</Text>
                </View>
            ))}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SuspectsScreen', { selectedGame, selectedCharacter })}
            >
                <Text style={styles.buttonText}>GERİ</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f0f0f', padding: 16 },
    header: { fontSize: 24, color: '#fff', marginBottom: 12, textAlign: 'center' },
    card: { backgroundColor: '#222', marginBottom: 16, padding: 12, borderRadius: 8, },
    image: { width: '100%', height: 150, borderRadius: 6 },
    title: { fontSize: 28, color: '#ccc', marginBottom: 10, textAlign: 'center' },
    name: { fontSize: 20, color: '#fff', marginTop: 10 },
    role: { fontSize: 16, color: '#bbb' },
    notes: { fontSize: 14, color: '#ccc', marginTop: 6 },
    buttonText: { color: '#ccc', textAlign: 'center', fontWeight: 'bold', },
    button: { backgroundColor: '#000', paddingVertical: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', marginBottom: 50 },
});