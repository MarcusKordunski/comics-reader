import { FlatList, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './library-styles';
import { LibraryItem } from '../../interfaces/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Dashboard: undefined;
    Comic: { itemId: number };
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Dashboard'>;

interface LibraryProps {
    data: LibraryItem[];
    isLoading: boolean;
    handleLoadMore: () => void;
    navigation: HomeScreenNavigationProp;
}

export default function Library({ data, isLoading, handleLoadMore, navigation }: LibraryProps) {
    const renderFooter = () => {
        if (!isLoading) return null;

        return (
            <View style={{ paddingVertical: 20 }}>
                <ActivityIndicator size="large" />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Comic', { itemId: item.num })} key={item.num} style={{ marginBottom: 20 }}>
                        <Text style={{ marginBottom: 5 }}>{item.title}</Text>
                        <Image source={{ uri: item.img, }}
                            style={{ width: 200, height: 200 }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                )
                }
                keyExtractor={item => String(item.num)}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
            />
        </View >
    )
}