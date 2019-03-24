import { createStackNavigator } from "react-navigation";
import WelcomeView from "../Views/GetStarted/WelcomeView";
import LoginView from "../Views/GetStarted/LoginView";
import SignUpView from "../Views/GetStarted/SignUpView";
import Routes from "./Routes";

export const TabNavigator = createStackNavigator(
    {
        [Routes.Welcome]: { screen: WelcomeView },
        [Routes.Login]: { screen: LoginView },
        [Routes.SignUp]: { screen: SignUpView }
    },
    {
        navigationOptions: ({ navigation }) => ({
            gesturesEnabled: false
        }),
        initialRouteName: Routes.Welcome,
    }
);