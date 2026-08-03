import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Feed, Health2, Message2, Stethoscope, User } from "@/components/icons";

function TabIcon({
  Icon,
  focused,
}: {
  Icon: React.ComponentType<{
    className?: string;
    width?: number;
    height?: number;
  }>;
  focused: boolean;
}) {
  return (
    <View
      className={`h-[38px] w-[38px] items-center justify-center rounded-2xl ${focused ? "bg-[#F2733D]" : ""}`}
    >
      <Icon
        className={focused ? "text-white" : "text-[#8A93B2]"}
        width={22}
        height={22}
      />
    </View>
  );
}

function TabLabel({
  focused,
  children,
}: {
  focused: boolean;
  children: string;
}) {
  return (
    <Text
      className={`mt-[14px] text-xs ${focused ? "font-semibold text-[#F2733D]" : "font-normal text-[#8A93B2]"}`}
    >
      {children}
    </Text>
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabel: ({ focused, children }) => (
          <TabLabel focused={focused}>{children}</TabLabel>
        ),
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 94 + insets.bottom,
          paddingTop: 25,
          paddingBottom: insets.bottom,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          borderTopWidth: 0,
          backgroundColor: "#fff",
          boxShadow: "0 -4px 16px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={Feed} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="care"
        options={{
          title: "Get Care",
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={Stethoscope} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="health"
        options={{
          title: "My Health",
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={Health2} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={Message2} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon Icon={User} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
