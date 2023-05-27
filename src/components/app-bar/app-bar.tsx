import { Text, View } from 'react-native';
import styles from './app-bar-styles';

export default function AppBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>App Bar</Text>
            <Text style={styles.menuIcon}>...</Text>
        </View>
    )
}