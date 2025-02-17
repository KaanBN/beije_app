import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CycleScreen, CalendarScreen, AnalysisScreen, GuideScreen} from '../screens';


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cycle" component={CycleScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Analysis" component={AnalysisScreen} />
            <Tab.Screen name="Guide" component={GuideScreen} />
        </Tab.Navigator>
    );
};

export default MainNavigator;
