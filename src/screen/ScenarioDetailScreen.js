import React, { useState } from 'react'
import { Modal, ScrollView } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ScenarioDetailScreen({ route, navigation }) {
    const { selectedGame } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
        setModalVisible(false);
        navigation.navigate('SolutionScreen', { selectedGame });
    };
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{selectedGame?.title}</Text>
            <Text style={styles.description}><Text style={styles.bold}>Ölüm Saati: </Text> {selectedGame?.timeOfDeath}</Text>
            <Text style={styles.description}><Text style={styles.bold}>Ölüm Sebebi: </Text> {selectedGame?.causeOfDeath}</Text>
            <Text style={styles.description}><Text style={styles.bold}>Oyun Özeti: </Text>{selectedGame?.description}</Text>
            <ScrollView contentContainerStyle={styles.grid}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('SuspectsScreen', { selectedGame })}
                >
                    <View >
                        <Text style={styles.buttonText}>ŞÜPHELİLER</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('CluesScreen', { selectedGame })}
                >
                    <View>
                        <Text style={styles.buttonText}>İPUÇLARI</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>KATİLİ ÖĞREN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ScenarioListScreen')}
            >
                <Text style={styles.buttonText}>GERİ</Text>
            </TouchableOpacity>
            <Modal transparent visible={modalVisible} animationType="fade">
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, marginBottom: 20 }}>Katili öğrenmek ister misin?</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity
                                style={{ flex: 1, backgroundColor: '#000', padding: 12, marginRight: 5, borderRadius: 6 }}
                                onPress={handleConfirm}
                            >
                                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Evet</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ flex: 1, backgroundColor: '#ccc', padding: 12, marginLeft: 5, borderRadius: 6 }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ color: '#000', textAlign: 'center', fontWeight: 'bold' }}>Hayır</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView >

    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#0f0f0f' },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 50 },
    card: { width: '100%', backgroundColor: '#000', padding: 30, borderWidth: 1, borderColor: '#ccc', marginBottom: 15 },
    title: { fontSize: 28, color: '#ccc', marginBottom: 10, textAlign: 'center' },
    description: { fontSize: 16, color: '#ccc' },
    buttonText: { color: '#ccc', textAlign: 'center', fontWeight: 'bold', },
    bold: { fontWeight: 'bold' },
    button: { backgroundColor: '#000', paddingVertical: 10, marginTop: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', marginBottom: 50 },
    modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)' },
    modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' },
    modalText: { fontSize: 18, color: '#000', marginBottom: 10 },
    closeButton: { marginTop: 10, padding: 10, backgroundColor: '#000', borderRadius: 5 },

});