import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AbaHome from "../abahome/abahome.jsx";
import AbaCalendar from "../abacalendar/abacalendar.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";

const Tab = createBottomTabNavigator();

function Main() {
  return <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={AbaHome} />
      <Tab.Screen name="Calendar" component={AbaCalendar} />
      <Tab.Screen name="Profile" component={AbaProfile} />
    </Tab.Navigator>
  </NavigationContainer>
}

export default Main;