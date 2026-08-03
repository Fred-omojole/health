import { FilterHospitalModal } from "@/components/filterHospitalModal";
import { HospitalCard } from "@/components/HospitalCard";
import { router } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import {
    AdjustmentsHorizontalIcon,
    ArrowLeftIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const categories = [
  "Hospital",
  "Pharmacy",
  "Med Lab",
  "Dental Clinic",
  "Eye Clinic",
];

const nearYou = {
  initials: "KH",
  color: "#7C7AED",
  name: "Kings Hill Center",
  category: "Hospital",
  rating: 3.8,
  address: "12 Idowu Martins Street, Victoria Island, Lagos.",
};

const hospitals = [
  {
    initials: "FM",
    color: "#6B7280",
    name: "Falomo Med Center",
    category: "Hospital",
    rating: 3.8,
    address: "12 Idowu Martins Street, Victoria Island, Lagos.",
  },
  {
    initials: "KH",
    color: "#7C7AED",
    name: "Kings Hill Center",
    category: "Hospital",
    rating: 3.8,
    address: "12 Idowu Martins Street, Victoria Island, Lagos.",
  },
  {
    initials: "SJ",
    color: "#F2733D",
    name: "St. Joseph's Hospital",
    category: "Hospital",
    rating: 4.2,
    address: "5 Awolowo Road, Ikoyi, Lagos.",
  },
  {
    initials: "RC",
    color: "#0EA5E9",
    name: "Reddington Clinic",
    category: "Hospital",
    rating: 4.5,
    address: "12 Idowu Martins Street, Victoria Island, Lagos.",
  },
];

export default function FindAHospital() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState("Hospital");
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <View className="flex-1 bg-gray-50" style={{ paddingTop: insets.top }}>
      <View className="bg-white px-[15px] pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-9 w-9 items-center justify-center -ml-2 mt-3"
        >
          <ArrowLeftIcon size={22} color="#6366F1" />
        </TouchableOpacity>

        <Text className="text-blue-950 text-2xl font-bold mt-2">
          Find Health Services
        </Text>

        <View className="flex-row items-center gap-3 mt-4">
          <View className="flex-1 flex-row items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 h-11">
            <MagnifyingGlassIcon size={18} color="#8A93B2" />
            <TextInput
              placeholder="Search health service provider"
              placeholderTextColor="#8A93B2"
              className="flex-1 text-blue-950 text-sm"
            />
          </View>
          <TouchableOpacity
            onPress={() => setFilterOpen(true)}
            className="flex-row items-center gap-1.5 border border-gray-200 rounded-xl px-3 h-11"
          >
            <AdjustmentsHorizontalIcon size={18} color="#F2733D" />
            <Text className="text-blue-950 text-sm font-medium">Filter</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
          className="mt-4"
        >
          {categories.map((category) => {
            const active = category === activeCategory;
            return (
              <Pressable
                key={category}
                onPress={() => setActiveCategory(category)}
              >
                <View
                  className={
                    active
                      ? "border border-[#F2733D] rounded-lg px-4 py-2"
                      : "px-1 py-2"
                  }
                >
                  <Text
                    className={
                      active
                        ? "text-[#F2733D] font-semibold text-sm"
                        : "text-[#8A93B2] text-sm"
                    }
                  >
                    {category}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{
          paddingTop: 15,
          paddingBottom: 40 + insets.bottom,
        }}
        ListHeaderComponent={
          <View className="mb-4">
            <View className="bg-orange-50 px-[15px] py-2 mb-3">
              <Text className="text-[#F2733D] text-xs font-semibold">
                Hospitals Near You
              </Text>
            </View>
            <HospitalCard {...nearYou} />

            <View className="flex-row items-center justify-between px-[15px] mt-2 mb-1">
              <Text className="text-blue-950 font-semibold text-sm">
                600 Hospitals
              </Text>
              <TouchableOpacity className="flex-row items-center gap-1">
                <Text className="text-gray-400 text-xs">
                  SORT:{" "}
                  <Text className="text-blue-950 font-medium">Rating</Text>
                </Text>
                <ChevronDownIcon size={14} color="#8A93B2" />
              </TouchableOpacity>
            </View>
          </View>
        }
        renderItem={({ item }) => <HospitalCard {...item} />}
      />

      <FilterHospitalModal
        visible={filterOpen}
        onClose={() => setFilterOpen(false)}
      />
    </View>
  );
}
