import {
    Platform,
} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Routes from './Routes';
import WelcomeView from '../Views/GetStarted/WelcomeView';


const AppNavigator = createSwitchNavigator(
    {
        [Routes.WelcomeView]: WelcomeView
    },
    {
        initialRouteName: Routes.WelcomeView
    }
);

export default createAppContainer(AppNavigator);