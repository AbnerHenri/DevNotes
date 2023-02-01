import { createStackNavigator } from "@react-navigation/stack";

import ListScreen from "../Pages/ListScreen";
import EditScreen from "../Pages/EditScreen";

const Stack = createStackNavigator()

export default () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListScreen}/>
            <Stack.Screen name="EditNote" component={EditScreen}/>
        </Stack.Navigator>
    )
}