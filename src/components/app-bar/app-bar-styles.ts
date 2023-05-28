import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f4511e',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    shadowOpacity: 4,
  },
  dropdownContainer: {
    width: 200,
    backgroundColor: '#f4511e',
    zIndex: 999,
    elevation: 999
  },
  dropdown: {
    backgroundColor: '#fff',
    zIndex: 999,
    elevation: 999
  },
  dropdownDisabled: {
    opacity: 0.5,
    backgroundColor: '#f2f2f2',
  }
});