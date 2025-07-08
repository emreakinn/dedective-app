import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import data from '../data/data.json';

export default function ScenarioListScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>HİKAYE SEÇ</Text>
            <ScrollView contentContainerStyle={styles.grid}>
                {data.senarios.map((game) => (
                    <View style={styles.card} key={game.id}>
                        <Text style={styles.title}>{game.title}</Text>
                        <Text style={styles.description}><Text style={styles.bold}>Oyun Özeti:</Text> {game.description}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('ScenarioDetailScreen', { selectedGame: game })}
                        >
                            <Text style={styles.buttonText}>OYNA</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text style={styles.buttonText}>GERİ</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f0f0f', padding: 20 },
    header: { fontSize: 40, color: '#ccc', textAlign: 'center', paddingVertical: 20 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 15, justifyContent: 'space-between' },
    card: { width: '100%', backgroundColor: '#ccc', padding: 10, borderWidth: 1, borderColor: '#000', marginBottom: 15 },
    image: { width: '100%', height: 100, resizeMode: 'cover' },
    title: { fontSize: 20, marginTop: 10, color: '#000', textAlign: 'center' },
    description: { fontSize: 14, marginVertical: 5, color: '#000' },
    bold: { fontWeight: 'bold' },
    button: { backgroundColor: '#000', paddingVertical: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc' },
    buttonText: { color: '#ccc', textAlign: 'center', fontWeight: 'bold' },
});
