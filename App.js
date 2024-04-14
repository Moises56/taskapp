import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator();

//gererar


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={(navigation) => ({ 
          title: "Facturas Creadas",
          headerStyle: {backgroundColor: "#5ccedf"},
          headerTitleStyle: {color: "#fff"},
          headerRight: () => (
            <TouchableOpacity onPress={() => {
              navigation.navigation.navigate("TaskForm")
            }}>
              <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>Add Fact.</Text>
            </TouchableOpacity>

          )
          })} />
        <Stack.Screen name="TaskForm" component={TaskFormScreen} 
        options={{ 
          title: "Crear Factura",
          headerStyle: {backgroundColor: "#5ccedf"},
          headerTitleStyle: {color: "#fff"},
          headerTintColor: "#fff",

          }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;