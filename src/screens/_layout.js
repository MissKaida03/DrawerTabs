import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import DashboardHome from './dashboard/index';
import Profile from './dashboard/profile';
import Settings from './dashboard/settings';
import DrawerContent from '../components/DrawerContent';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f4a7c5',
        tabBarStyle: { backgroundColor: '#fff' },
        headerShown: false, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardHome}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="settings" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Layout() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardTabs} />
    </Drawer.Navigator>
  );
}