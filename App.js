import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import BottomNavigation from './BottomNavigation';

export default function App() { 
  return (
    <BottomNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
