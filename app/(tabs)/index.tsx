import { ActivityRow } from "@/components/ActivityRow";
import { BlogCard } from "@/components/BlogCard";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, Text, View } from "react-native";
import {
  BellAlertIcon,
  BellIcon,
  CalendarDaysIcon,
  QrCodeIcon,
  ShieldCheckIcon,
} from "react-native-heroicons/outline";
import { ArrowRightIcon, PhoneIcon } from "react-native-heroicons/solid";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const activities = [
  {
    id: "1",
    type: "prescription" as const,
    avatar: require("@/assets/images/avatar.jpg"),
    time: "4min",
    detail: "Ezinne Ibeneme got prescription from XYZ Pharmacy",
  },
  {
    id: "2",
    type: "appointment" as const,
    avatar: require("@/assets/images/avatar.jpg"),
    time: "4min",
    detail: "You have an appointment with Dr. Olumuyiwa Azeez",
  },
  {
    id: "3",
    type: "appointment" as const,
    avatar: require("@/assets/images/avatar.jpg"),
    time: "4min",
    detail: "You have an appointment with Dr. Olumuyiwa Azeez",
  },
  {
    id: "4",
    type: "prescription" as const,
    avatar: require("@/assets/images/avatar.jpg"),
    time: "4min",
    detail: "Ezinne Ibeneme got prescription from XYZ Pharmacy",
  },
];

const blogPosts = [
  {
    id: "1",
    image: "https://picsum.photos/seed/health-blog-1/440/240",
    title: "Consectetur feugiat sagittis consectetur quam gravida lorem.",
    postedAgo: "3 hrs ago",
    readTime: "5 mins read",
  },
  {
    id: "2",
    image: "https://picsum.photos/seed/health-blog-2/440/240",
    title: "Consectetur feugiat sagittis consectetur quam gravida lorem.",
    postedAgo: "3 hrs ago",
    readTime: "5 mins read",
  },
  {
    id: "3",
    image: "https://picsum.photos/seed/health-blog-3/440/240",
    title: "Consectetur feugiat sagittis consectetur quam gravida lorem.",
    postedAgo: "3 hrs ago",
    readTime: "5 mins read",
  },
];

export default function Feed() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 130 + insets.bottom }}
    >
      <View className="pr-[18px] pl-[15px] w-full h-28 bg-white flex flex-row items-center justify-between">
        <Text className=" text-blue-950 text-xl font-bold uppercase leading-8 ">
          my hmo
        </Text>
        <View className="flex flex-row gap-4">
          <QrCodeIcon size={20} color={"#F2733D"} />
          <BellIcon size={20} color={"#F2733D"} />
        </View>
      </View>

      <View className="px-[15px] pt-[20px] mx-auto relative">
        <LinearGradient
          colors={["#F2733D", "#FBA35C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 24,
            padding: 20,
            width: 343,
            height: 195,
            // paddingBottom: 20,
          }}
        >
          <View className="  flex-row items-center gap-3">
            <Image
              source={require("@/assets/images/avatar.jpg")}
              className="h-[59px] w-[61px] rounded-md"
            />
            <View>
              <Text className="text-white text-base font-semibold">
                Goodness Ibeneme
              </Text>
              <Text className="text-white/80 text-xs mt-0.5">
                Enrollee Id 2000152-2
              </Text>
            </View>
          </View>

          <View className="flex-row  items-center justify-between mt-6">
            <View>
              <Text className="text-white/70 text-xs">Enrolled Plan</Text>
              <Text className="text-white font-semibold mt-1">PRO - MAX</Text>
            </View>
            <View className="w-px h-10 bg-white/30" />
            <View>
              <Text className="text-white/70 text-xs">Policy expiry</Text>
              <Text className="text-white font-semibold mt-1">25/04/2023</Text>
            </View>
            <View className="w-px h-10 bg-white/30" />
            <View className="flex-row items-center gap-2 bg-white/20 rounded-md px-3 py-2">
              <PhoneIcon size={14} color="#fff" />
              <Text className="text-white text-xs font-medium ">
                Tap for
                <br /> Emergency
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          className="absolute h-[100px] rounded-2xl bg-white flex-row items-center mx-auto"
          style={{
            left: 25,
            right: 25,
            bottom: -70,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <View className="flex-1 items-center gap-2 px-2">
            <BellAlertIcon size={24} color="#F2733D" />
            <Text className="text-blue-950 text-xs text-center">
              Talk to a Doctor
            </Text>
          </View>
          <View className="w-px h-10 bg-gray-200" />
          <View className="flex-1 items-center gap-2 px-2">
            <CalendarDaysIcon size={24} color="#F2733D" />
            <Text className="text-blue-950 text-xs text-center">
              Book Hospital Visit
            </Text>
          </View>
          <View className="w-px h-10 bg-gray-200" />
          <View className="flex-1 items-center gap-2 px-2">
            <ShieldCheckIcon size={24} color="#F2733D" />
            <Text className="text-blue-950 text-xs text-center">
              View Authorizations
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-[89px] flex-row flex-wrap gap-[17px]  items-center justify-center">
        <View className="bg-white rounded-lg w-[170px] h-[120px] px-[17px] py-[17px] justify-between overflow-hidden">
          <Image
            source={require("@/assets/images/card1.svg")}
            className="absolute right-20 bottom-0"
            style={{ width: 96, height: 98 }}
          />
          <View>
            <Text className="w-full max-w-[130px] mb-[8px] text-blue-950 text-base font-semibold leading-4 font-['urbanist']">
              Find a Hospital
            </Text>
            <Text className="w-[124px] text-blue-950 text-[10px] font-normal font-['urbanist']">
              Browse our network of 5000+ providers across the country
            </Text>
          </View>
          <View className="h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F2733D]">
            <ArrowRightIcon size={10} color="#fff" />
          </View>
        </View>

        <View className="bg-white rounded-lg w-[170px] h-[120px] px-[17px] py-[17px] justify-between overflow-hidden">
          <Image
            source={require("@/assets/images/card1.svg")}
            className="absolute left-10 bottom-10"
            style={{ width: 96, height: 98 }}
          />
          <View>
            <Text className="w-full max-w-[130px] mb-[8px] text-blue-950 text-base font-semibold leading-4 font-['urbanist']">
              View Id cards
            </Text>
            <Text className="w-[124px] text-blue-950 text-[10px] font-normal font-['urbanist']">
              View ID cards for you and your dependents here
            </Text>
          </View>
          <View className="h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F2733D]">
            <ArrowRightIcon size={10} color="#fff" />
          </View>
        </View>

        <View className="bg-white rounded-lg w-[170px] h-[120px] px-[17px] py-[17px] justify-between overflow-hidden">
          <Image
            source={require("@/assets/images/card1.svg")}
            className="absolute right-20 bottom-0"
            style={{ width: 96, height: 98 }}
          />
          <View>
            <Text className="w-full max-w-[130px] mb-1 text-blue-950 text-base font-semibold leading-4 font-['urbanist']">
              Find a Hospital
            </Text>
            <Text className="w-[124px] text-blue-950 text-[10px] font-normal font-['urbanist']">
              Browse our network of 5000+ providers across the country
            </Text>
          </View>
          <View className="h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F2733D]">
            <ArrowRightIcon size={10} color="#fff" />
          </View>
        </View>

        <View className="bg-white rounded-lg w-[170px] h-[120px] px-[17px] py-[17px] justify-between overflow-hidden">
          <Image
            source={require("@/assets/images/card1.svg")}
            className="absolute right-20 bottom-0"
            style={{ width: 96, height: 98 }}
          />
          <View>
            <Text className="w-full max-w-[130px] mb-1 text-blue-950 text-base font-semibold leading-4 font-['urbanist']">
              Find a Hospital
            </Text>
            <Text className="w-[124px] text-blue-950 text-[10px] font-normal font-['urbanist']">
              Browse our network of 5000+ providers across the country
            </Text>
          </View>
          <View className="h-[22px] w-[22px] items-center justify-center rounded-full bg-[#F2733D]">
            <ArrowRightIcon size={10} color="#fff" />
          </View>
        </View>
      </View>

      <View className="mt-[50px] px-[15px]">
        <Text className="text-blue-950 font-bold text-sm mb-4">
          Recent Activities
        </Text>
        {activities.map((activity, index) => (
          <View key={activity.id}>
            <ActivityRow
              type={activity.type}
              avatar={activity.avatar}
              time={activity.time}
              detail={activity.detail}
            />
            {index < activities.length - 1 && (
              <View className="h-px bg-gray-200 my-4" />
            )}
          </View>
        ))}
      </View>

      <View className="mt-[30px] ">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={blogPosts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 12, paddingHorizontal: 15 }}
          renderItem={({ item }) => (
            <BlogCard
              image={item.image}
              title={item.title}
              postedAgo={item.postedAgo}
              readTime={item.readTime}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}
