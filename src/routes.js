import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dash from "./pages/Dashboard";
import Profile from "./pages/Profile";

import SelectProvider from "./pages/New/SelectProvider";
import SelectDateTime from "./pages/New/SelectDateTime";
import Confirm from "./pages/New/Confirm";

// retornar func em vez de component para poder fazer um if. 
export default (signedIn = false) => createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            SignUp,
        }),
        App: createBottomTabNavigator({
            Dash,
            // Passamos a createStackNavigator como objeto para poder usar icons depois
            /* New: {
                screen: createStackNavigator({
                    SelectProvider,
                    SelectDateTime,
                    Confirm
                })
            }, */
            Profile
        }, {
            tabBarOptions: {
                // Nao deixa o teclado ir para cima da tabBar
                keyboardHidesTabBar: true,
                activeTintColor: '#FFF',
                inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                style: {
                    backgroundColor: '#8d41a8',
                }
            }
        })
    }, {
        initialRouteName: signedIn ? 'App' : 'Sign',
    }),
);

// initialRouteName faz com que se o usuario estiver logado, liste o conjunto dee rotas correto. 
// Se o usuário estiver logado, a func irá passar a rota Dash para o arquivo app.js, se nao passa a rota Sign
