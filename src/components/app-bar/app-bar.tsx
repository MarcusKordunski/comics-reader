import { Text, View } from 'react-native';
import styles from './app-bar-styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { Source } from '../../interfaces/interfaces'

interface AppbarProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    sourceValue: string;
    setSourceValue: React.Dispatch<React.SetStateAction<string>>;
    sources: Source[];
    setSources: React.Dispatch<React.SetStateAction<Source[]>>;
}

export default function AppBar({ open, setOpen, sourceValue, setSourceValue, sources, setSources }: AppbarProps) {
    return (
        <View style={styles.container}>
            <DropDownPicker
                open={open}
                value={sourceValue}
                items={sources}
                setOpen={setOpen}
                setValue={setSourceValue}
                setItems={setSources}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
            />
        </View>
    )
}