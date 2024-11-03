import { Stack } from "expo-router";
import { Platform } from "react-native";

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                title: '',
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#0C0A0A',
                    ...Platform.select({
                        android: { elevation: 0 }, 
                    }),
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                
            }}
            
        >
            <Stack.Screen 
                name="(tabs)" 
            />
        </Stack>
    );
};

export default StackLayout;
