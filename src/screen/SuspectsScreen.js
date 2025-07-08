import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SuspectsScreen({ route, navigation }) {
    const { selectedGame } = route.params;
    const suspects = selectedGame.characters;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{selectedGame?.title}</Text>
            <Text style={styles.header}>ŞÜPHELİLER</Text>
            {suspects.map((suspect) => (
                <View key={suspect.id} style={styles.card}>
                    <Image source={{ uri: suspect.image }} style={styles.image} />
                    <Text style={styles.name}>{suspect.name}</Text>
                    <Text style={styles.role}>{suspect.role}</Text>
                    <Text style={styles.notes}>{suspect.notes}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('CharactersScreen', { selectedGame, selectedCharacter: suspect, })}
                    >
                        <Text style={styles.buttonText}>İNCELE</Text>
                    </TouchableOpacity>
                </View>
            ))}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ScenarioDetailScreen', { selectedGame })}
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