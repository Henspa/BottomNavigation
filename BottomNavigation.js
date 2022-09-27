import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import {HomeScreen, MessagesScreen, SettingsScreen} from './Screens'

const Tab = createBottomTabNavigator();

const HOME = 'Home';
const MESSAGES = 'Messages';
const SETTINGS = 'Settings';
const icons = {
    [HOME]: 'home',
    [MESSAGES]: 'message1',
    [SETTINGS]: 'setting'
}

export default function BottomNavigation() {

    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name={HOME} 
            component={HomeScreen}
            options={{ tabBarIcon: ()=> <AntDesign name={icons[HOME]} size={20} />}}
            />
            <Tab.Screen name={MESSAGES} component={MessagesScreen}/>
            <Tab.Screen name={SETTINGS} component={SettingsScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
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