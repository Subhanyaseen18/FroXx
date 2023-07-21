import {View} from 'react-native';
import React from 'react';
import Text from '../Components/CustomText';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Login';
import Menu from '../screen/Menu';
import Changepass from '../screen/Changepassword';
import Chatbot from '../screen/Chatbot';
import Faq from '../screen/FAQ/inde';
import Documents from '../screen/Documents';
import Support from '../screen/Support';
import Profile from '../screen/Profile';
import Location from '../screen/Location';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  );
};
const HomeStack = () => {
  const {isChangePassword} = useSelector(state => state.user);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      {...{initialRouteName: isChangePassword == true ? 'Menu' : 'Changepass'}}>
      <Stack.Screen name="Menu" component={Menu}></Stack.Screen>
      <Stack.Screen name="Chatbot" component={Chatbot}></Stack.Screen>
      <Stack.Screen name="Faq" component={Faq}></Stack.Screen>
      <Stack.Screen name="Documents" component={Documents}></Stack.Screen>
      <Stack.Screen name="Support" component={Support}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      <Stack.Screen name="Location" component={Location}></Stack.Screen>
      <Stack.Screen name="Changepass" component={Changepass}></Stack.Screen>
    </Stack.Navigator>
  );
};
const Mainstack = () => {
  const {token} = useSelector(state => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{headerShown: false}}>
        {token ? (
          <Stack.Screen name="HomeStack" component={HomeStack}></Stack.Screen>
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Mainstack;
