import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'

import { Welcome } from './pages/welcome'
import { Login } from './pages/login'
import { Cadastro } from './pages/cadastro'
import { Home } from './pages/home'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Routes() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

        // <Tab.Navigator>
        //     <Tab.Screen
        //         name="Welcome"
        //         component={Welcome}
        //         options={{
        //             headerShown: false,
        //             tabBarIcon: ({ focused, size, color }) => {
        //                 if (focused) {
        //                     return <Ionicons size={size} color={color} name="home" />
        //                 }
        //             }
        //         }}
        //     />

        //     <Tab.Screen
        //         name="Login"
        //         component={Login}
        //     />
        // </Tab.Navigator> */}
    )
}