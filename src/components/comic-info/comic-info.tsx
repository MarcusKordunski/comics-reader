import { Text, View, Image } from 'react-native';
import styles from './comic-info-styles';

interface ComicInfoProps {
    title: string;
    day: string;
    month: string;
    year: string;
    num: number;
    alt: string;
    img: string;
}

export default function ComicInfo({ title, day, month, year, num, alt, img }: ComicInfoProps) {
    return (
        <View style={styles.container}>
            <Text>{`${title} №${num}`}</Text>
            <Text>{`${day}/${month}/${year}`}</Text>
            <Image source={{ uri: img, }}
                style={{ width: 300, height: 300 }}
                resizeMode='contain' />
            <Text>{alt}</Text>
        </View>
    )
}