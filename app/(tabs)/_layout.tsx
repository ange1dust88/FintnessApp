import { Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons'; 

export default () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: '#fff',       
                tabBarInactiveTintColor: '#828282',     
                tabBarStyle: {                           
                    backgroundColor: '#0C0A0A',
                    height: 100,   
                    alignItems:"center",
                    justifyContent: 'center',                       
                    paddingTop: 10, 
                    borderTopWidth: 0, 
                    elevation: 0,
                },
            }}
        >
            <Tabs.Screen 
                name="Explore" 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="fitness-center" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="Summary" 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="list-alt" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="Profile" 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
