import { Text, TouchableOpacity, View } from "react-native";
import { EllipsisHorizontalIcon, MapPinIcon } from "react-native-heroicons/outline";
import { PhoneIcon, StarIcon } from "react-native-heroicons/solid";

interface HospitalCardProps {
  initials: string;
  color: string;
  name: string;
  category: string;
  rating: number;
  address: string;
}

export const HospitalCard = ({
  initials,
  color,
  name,
  category,
  rating,
  address,
}: HospitalCardProps) => {
  return (
    <View className="bg-white rounded-2xl p-4 mx-[15px] mb-3">
      <View className="flex-row items-start gap-3">
        <View className="relative">
          <View
            className="h-12 w-12 rounded-lg items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <Text className="text-white font-bold text-sm">{initials}</Text>
          </View>
          <View className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 border-2 border-white" />
        </View>

        <View className="flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-blue-950 font-semibold text-base">
              {name}
            </Text>
            <TouchableOpacity className="h-7 w-7 items-center justify-center rounded-md border border-gray-200">
              <EllipsisHorizontalIcon size={16} color="#8A93B2" />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-2 mt-1">
            <View className="bg-gray-100 rounded px-2 py-0.5">
              <Text className="text-gray-500 text-[10px]">{category}</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <StarIcon size={12} color="#FBBF24" />
              <Text className="text-blue-950 text-xs font-medium">
                {rating}
              </Text>
            </View>
          </View>

          <Text className="text-gray-400 text-xs mt-2">{address}</Text>
        </View>
      </View>

      <View className="h-px bg-gray-100 my-3" />

      <View className="flex-row items-center">
        <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1.5 py-1">
          <MapPinIcon size={16} color="#F2733D" />
          <Text className="text-[#F2733D] text-xs font-semibold">
            Directions
          </Text>
        </TouchableOpacity>
        <View className="w-px h-5 bg-gray-200" />
        <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-1.5 py-1">
          <PhoneIcon size={14} color="#22C55E" />
          <Text className="text-green-500 text-xs font-semibold">
            Call Hospital
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
