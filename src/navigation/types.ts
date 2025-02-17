import {NavigatorScreenParams} from '@react-navigation/native';

export type MainNavigatorParamList = {
    Cycle: undefined;
    Calendar: undefined;
    Analysis: undefined;
    Guide: undefined;
};

export type AppNavigatorParamList = {
    Main: NavigatorScreenParams<MainNavigatorParamList>;
    Splash: undefined;
};
