import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ManageExp from "./Screens/ManangeExp";
import RecentExp from "./Screens/RecentExp";
import AllExp from "./Screens/AllExp";
import { Ionicons } from "@expo/vector-icons"; // Example icons
import { GlobalStyles } from "./constants/styles";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabFn() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:GlobalStyles.colors.primary500,},
        headerTintColor:"white",
        tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
        tabBarActiveTintColor:GlobalStyles.colors.accent500,
      }}
    >
      <BottomTab.Screen
        name="RecentExpense"
        component={RecentExp}
        options={{
          title :"Recent Expense",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="analytics" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AllExpense"
        component={AllExp}
        options={{
          title :"All Expense",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTab"
            component={BottomTabFn}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name="ManageExp"
            component={ManageExp}
            options={{ title: "ManageExpense" }} // Example header option
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

