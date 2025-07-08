import React from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SolutionScreen({ route, navigation }) {
    const { selectedGame } = route.params;
    const solution = selectedGame.solution || [];
    const characters = selectedGame.characters || [];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{selectedGame?.title}</Text>
            <Text style={styles.header}>KATİL AÇIĞA ÇIKTI</Text>
            {solution.map((sol, index) => {
                const killer = characters.find(c => c.id === sol.killerId);
                return (
                    <View key={sol.killerId || index} style={styles.card}>
                        <Image source={{ uri: killer?.image }} style={styles.image} />
                        <Text style={styles.name}>{killer?.name}</Text>
                        <Text style={styles.content}>{sol.explanation}</Text>
                    </View>
                );
            })}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ScenarioDetailScreen', { selectedGame })}
            >
                <Text style={styles.buttonText}>GERİ</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f0f0f', padding: 16 },
    title: { fontSize: 28, color: '#ccc', marginBottom: 10, textAlign: 'center' },
    header: { fontSize: 24, color: 'red', marginBottom: 12, textAlign: 'center' },
    card: { backgroundColor: '#222', marginBottom: 16, padding: 12, borderRadius: 8 },
    image: { width: '100%', height: 150, borderRadius: 6, marginBottom: 10 },
    name: { fontSize: 20, color: '#fff', marginBottom: 6 },
    content: { fontSize: 16, color: '#ccc' },
    button: { backgroundColor: '#000', paddingVertical: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', marginBottom: 50, },
    buttonText: { color: '#ccc', textAlign: 'center', fontWeight: 'bold' },
});
