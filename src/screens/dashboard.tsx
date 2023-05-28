import { View } from 'react-native';
import { AppBar, Library } from '../components'
import { useState, useEffect } from 'react'
import { LibraryItem } from '../interfaces/interfaces'
import axios from 'axios';

export default function Dashboard() {
    const [libraryData, setLibraryData] = useState<LibraryItem[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [hasMore, setHasMore] = useState(true);
    const [comicsQuantity, setComicsQuantity] = useState(0);
    const [currentId, setCurrentId] = useState(0);

    const [open, setOpen] = useState<boolean>(false);
    const [sourceValue, setSourceValue] = useState<string>('xkcd.com');
    const [sources, setSources] = useState([
        { label: 'xkcd.com', value: 'xkcd.com' },
    ]);


    const fetchComics = async () => {
        if (loading || currentId === 0) return;

        setLoading(true);

        try {
            if (sourceValue === 'xkcd.com') {
                const response = await axios.get(`https://xkcd.com/${currentId}/info.0.json`);
                const newComic = response.data;

                setLibraryData(prevComics => [...prevComics, newComic]);
                setCurrentId(prevId => prevId - 1);
            } else {
                return
            }
        } catch (error) {
            console.error('Error fetching comic:' + currentId, error);
        }

        setLoading(false);
    };

    const fetchComicsQuantity = async () => {
        try {
            if (sourceValue === 'xkcd.com') {
                const response = await axios.get(`https://xkcd.com/info.0.json`);
                const latestsComic = response.data;

                setComicsQuantity(latestsComic.num);
            } else {
                return
            }
        } catch (error) {
            console.error('Error fetching comic:', error);
        }
    };

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            fetchComics();
        }
    };

    useEffect(() => {
        fetchComicsQuantity()
        if (currentId === 0) {
            setCurrentId(comicsQuantity)
        } else if (currentId === 1) {
            setHasMore(false)
        }
        fetchComics()
    })

    return (
        <View style={{ flex: 1 }}>
            <AppBar open={open} setOpen={setOpen} sourceValue={sourceValue} setSourceValue={setSourceValue} sources={sources} setSources={setSources} />
            <Library data={libraryData} isLoading={loading} handleLoadMore={handleLoadMore} />
        </View >
    );
}