import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import images from '../assets/cluesImages';


export default function CluesScreen({ route, navigation }) {
    const { selectedGame } = route.params;
    const clues = selectedGame.clues;

    function getImageSource(image) {
        if (image.startsWith('http')) {
            return { uri: image };
        } else if (images[image]) {
            return images[image];
        } else {
            return images['/icon.png']; // veya başka bir default resim
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{selectedGame?.title}</Text>
            <Text style={styles.header}>İPUÇLARI</Text>
            {clues.map((clue) => (
                <View key={clue.id} style={styles.card}>
                    <Image source={getImageSource(clue.image)} style={styles.image} />
                    <Text style={styles.name}>{clue.title}</Text>
                    <Text style={styles.content}>{clue.content}</Text>
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
    content: { fontSize: 16, color: '#bbb' },
    buttonText: { color: '#ccc', textAlign: 'center', fontWeight: 'bold', },
    button: { backgroundColor: '#000', paddingVertical: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', marginBottom: 50 },

});