import { IdCard } from "@/components/idCard";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const enrollees = [
  { name: "Goodness Ibeneme", relation: { kind: "principal" } },
  {
    name: "Martha Ibeneme",
    relation: { kind: "dependent", relationship: "spouse" },
  },
  {
    name: "Eze Ibeneme",
    relation: { kind: "dependent", relationship: "son" },
  },
  {
    name: "Ezinne Ibeneme",
    relation: { kind: "dependent", relationship: "daughter" },
  },
] as const;

const ViewIdCards = () => {
  const inset = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-gray-100">
      <View
        style={{ paddingTop: inset.top }}
        className="bg-white px-[20px] pb-6"
      >
        <TouchableOpacity
          className="h-9 w-9 flex items-center -ml-3  justify-start mt-3"
          onPress={() => router.back()}
        >
          <ArrowLeftIcon size={22} color="#6366F1" />
        </TouchableOpacity>
        <Text className="text-[20px]  font-[90px] text-[#242F57]">
          E-ID Card
        </Text>
        <View className=" w-[304px] h-[24px]">
          <Text className="text-[12px] text-[#0E1871] leading-[14px]   mt-2">
            Use for provider verification and authorizations
          </Text>
        </View>
      </View>

      <View className="px-[20px] pt-4 gap-3">
        {enrollees.map((enrollee) => (
          <IdCard
            key={enrollee.name}
            name={enrollee.name}
            relation={enrollee.relation}
          />
        ))}
      </View>
    </View>
  );
};

export default ViewIdCards;
