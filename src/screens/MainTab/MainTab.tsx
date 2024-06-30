import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { Main, Settings } from "@/screens";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            // Return the Ionicons component
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#347AF0', // Color for active tab
          tabBarInactiveTintColor: 'gray', // Color for inactive tabs
          tabBarStyle: {
            backgroundColor: '#FFFFFF', // Background color of the tab bar
          },
          tabBarLabelStyle: {
            fontSize: 14, // Font size of tab labels
            fontWeight: 'bold', // Font weight of tab labels
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;
