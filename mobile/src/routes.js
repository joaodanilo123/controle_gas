import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import ListRelatorios from "./pages/ListRelatorios";
import Relatorio from "./pages/Relatorio";

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main: {
                screen: Main,
                navigationOptions: {
                    title: "Controle do gás"
                }
            },
            ListRelatorios: {
                screen: ListRelatorios,
                navigationOptions: {
                    title: "Lista dos Relatórios",
                }
            },
            Relatorio: {
                screen: Relatorio,
                navigationOptions: {
                    title: "Relatório",
                    headerShown: false,
                }
            }
        },
        {
            defaultNavigationOptions: {
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#0033a0',
                },
            },
        },
    )
)

export default Routes;