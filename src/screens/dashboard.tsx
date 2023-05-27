import { View } from 'react-native';
import { AppBar, Library } from '../components'
import { useState, useEffect } from 'react'
import LibraryItem from '../interfaces/interfaces'
import axios from 'axios';

export default function Dashboard() {
    const [libraryData, setLibraryData] = useState<LibraryItem[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchComics = async () => {
        if (loading) return;

        setLoading(true);

        try {
            const response = await axios.get(`https://xkcd.com/${currentId}/info.0.json`);
            const newComic = response.data;

            setLibraryData(prevComics => [...prevComics, newComic]);
            setCurrentId(prevId => prevId + 1);
        } catch (error) {
            console.error('Error fetching comic:', error);
        }

        setLoading(false);
    };

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            fetchComics();
        }
    };

    useEffect(() => {
        fetchComics()
    })

    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Library data={libraryData} isLoading={loading} handleLoadMore={handleLoadMore} />
        </View >
    );
}