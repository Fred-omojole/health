import { Tabs } from "expo-router";
import { View } from "react-native";

import { Feed, Health2, Message2, Stethoscope, User } from "@/components/icons";

function TabIcon({ Icon, focused }: { Icon: React.ComponentType<{ className?: string; width?: number; height?: number }>; focused: boolean }) {
  return (
    <View className={`h-[38px] w-[38px] items-center justify-center rounded-2xl ${focused ? 'bg-[#F2733D]' : ''}`}>
      <Icon className={focused ? 'text-white' : 'text-[#8A93B2]'} width={18} height={18} />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F2733D",
        tabBarInactiveTintColor: "#8A93B2",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: ({ focused }) => <TabIcon Icon={Feed} focused={focused} /> }}
      />
      <Tabs.Screen
        name="care"
        options={{ title: "Get Care", tabBarIcon: ({ focused }) => <TabIcon Icon={Stethoscope} focused={focused} /> }}
      />
      <Tabs.Screen
        name="health"
        options={{ title: "My Health", tabBarIcon: ({ focused }) => <TabIcon Icon={Health2} focused={focused} /> }}
      />
      <Tabs.Screen
        name="contact"
        options={{ title: "Contact", tabBarIcon: ({ focused }) => <TabIcon Icon={Message2} focused={focused} /> }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarIcon: ({ focused }) => <TabIcon Icon={User} focused={focused} /> }}
      />
    </Tabs>
  );
}
