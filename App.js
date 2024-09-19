import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoList from './src/Screens/ToDoList'
import AddNewTask from './src/Screens/AddNewTask'
import EditTask from './src/Screens/EditTask'
import CompletedTask from './src/Screens/CompletedTask';
import ToDoListDetail from './src/Screens/ToDoListDetail';


// Create Stack
const Stack = createNativeStackNavigator();

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen name="ToDoList" component={ToDoList}  options={{headerShown:false}}/>
        <Stack.Screen name="AddNewTask" component={AddNewTask} options={{headerShown:false}}/>
        <Stack.Screen name="EditTask" component={EditTask} options={{headerShown:false}} />
        <Stack.Screen name="CompletedTask" component={CompletedTask}  options={{headerShown:false}}/>
        <Stack.Screen name="ToDoListDetail" component={ToDoListDetail}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
