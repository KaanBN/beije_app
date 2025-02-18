import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CycleScreen, CalendarScreen, AnalysisScreen, GuideScreen} from '../screens';
import {Text} from 'react-native';
import {BottomTabBar} from '../widgets';
import CalendarIcon from "../assets/react_icons/calendar.tsx";
import CycleIcon from "../assets/react_icons/cycle.tsx";
import AnalysisIcon from "../assets/react_icons/analysis.tsx";
import GuideIcon from "../assets/react_icons/guide.tsx";


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#f3f3f3',
            borderTopColor: 'transparent',
          },
          tabBarActiveTintColor: '#F69C85',
          tabBarInactiveTintColor: '#B1B1B1',
            tabBarLabel: ({focused, color}) => {
              return <Text style={{color: focused ? "#000" : color, fontSize: 12, fontWeight: 'bold'}}>{route.name}</Text>;
            },
            tabBarIcon: ({color}) => {
              if (route.name === 'Cycle') {
                return <CycleIcon color={color} />;
              } else if (route.name === 'Calendar') {
                return <CalendarIcon color={color} />;
              }
              else if (route.name === 'Analysis') {
                  return <AnalysisIcon color={color} />;
              }
              else if (route.name === 'Guide') {
                  return <GuideIcon color={color} />;
              }
            },
        })}>
        <Tab.Screen name="Cycle" component={CycleScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Analysis" component={AnalysisScreen} />
        <Tab.Screen name="Guide" component={GuideScreen} />
      </Tab.Navigator>
    );
};

export default MainNavigator;
