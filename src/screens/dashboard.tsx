import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { AppBar, Library } from '../components'

export default function Dashboard() {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Library />
        </View >
    );
}