import { View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppBar, ComicInfo, Library } from '../components'
import { useState, useEffect } from 'react'
import { LibraryItem } from '../interfaces/interfaces'
import axios from 'axios';

type RootStackParamList = {
    Dashboard: undefined;
    Comic: { itemId: string };
};

type ComicScreenRouteProp = RouteProp<RootStackParamList, 'Comic'>;

export default function Comic() {
    const [comicData, setComicData] = useState<LibraryItem>();

    const [open, setOpen] = useState<boolean>(false);
    const [sourceValue, setSourceValue] = useState<string>('xkcd.com');
    const [sources, setSources] = useState([
        { label: 'xkcd.com', value: 'xkcd.com' },
    ]);

    const route = useRoute<ComicScreenRouteProp>();
    const { itemId } = route.params;

    const fetchComic = async () => {
        try {
            if (sourceValue === 'xkcd.com') {
                const response = await axios.get(`https://xkcd.com/${itemId}/info.0.json`);
                const newComic = response.data;

                setComicData(newComic)
            } else {
                return
            }
        } catch (error) {
            console.error('Error fetching comic:' + itemId, error);
        }
    };

    useEffect(() => {
        fetchComic()
    })

    return (
        <View style={{ flex: 1 }}>
            <AppBar open={open} setOpen={setOpen} sourceValue={sourceValue} setSourceValue={setSourceValue} sources={sources} setSources={setSources} disabled={true} />
            {comicData && <ComicInfo title={comicData.title} day={comicData.day} month={comicData.month} year={comicData.year} num={comicData.num} alt={comicData.alt} img={comicData.img} />}
        </View >
    );
}