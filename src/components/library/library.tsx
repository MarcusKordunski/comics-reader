import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import styles from './library-styles';
import { LibraryItem } from '../../interfaces/interfaces';

interface LibraryProps {
    data: LibraryItem[];
    isLoading: boolean;
    handleLoadMore: () => void;
}

export default function Library({ data, isLoading, handleLoadMore }: LibraryProps) {

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
                    <View key={item.num}>
                        <Text>{item.title}</Text>
                        <Image source={{ uri: item.img, }}
                            style={{ width: 200, height: 200 }} />
                    </View>
                )}
                keyExtractor={item => String(item.num)}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
            />
        </View>
    )
}