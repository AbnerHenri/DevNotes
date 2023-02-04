import { createStackNavigator } from "@react-navigation/stack";

import ListScreen from "../Pages/List/ListScreen";
import EditScreen from "../Pages/Edit/EditScreen";

const Stack = createStackNavigator()

export default () => {

    return(
        <Stack.Navigator screenOptions={{
            headerStyle : {
                backgroundColor: '#0D0D0D',
                shadowColor : 'transparent'
            },
            headerTintColor : '#FFF'
        }}>
            <Stack.Screen name="List" component={ListScreen}/>
            <Stack.Screen name="EditNote" component={EditScreen}/>
        </Stack.Navigator>
    )
}