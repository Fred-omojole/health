import { useState } from "react";
import { Modal, Pressable, Switch, Text, View } from "react-native";
import {
  ChevronDownIcon,
  StarIcon as StarIconOutline,
} from "react-native-heroicons/outline";
import { StarIcon as StarIconSolid } from "react-native-heroicons/solid";

interface FilterHospitalModalProps {
  visible: boolean;
  onClose: () => void;
}

export const FilterHospitalModal = ({
  visible,
  onClose,
}: FilterHospitalModalProps) => {
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [rating, setRating] = useState(0);

  const reset = () => {
    setUseCurrentLocation(false);
    setRating(0);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable className="flex-1 bg-black/40 justify-end" onPress={onClose}>
        <Pressable className="bg-white rounded-t-3xl px-[15px] pt-3 pb-8">
          <View className="w-10 h-1 rounded-full bg-gray-200 self-center mb-5" />

          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-blue-950 text-xl font-bold">Filter by</Text>
            <Pressable onPress={reset}>
              <Text className="text-[#F2733D] text-sm font-medium">Reset</Text>
            </Pressable>
          </View>

          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-blue-950 font-semibold text-sm">
              Location
            </Text>
            <View className="flex-row items-center gap-2">
              <Text className="text-gray-400 text-xs">
                Use Current Location
              </Text>
              <Switch
                value={useCurrentLocation}
                onValueChange={setUseCurrentLocation}
                trackColor={{ false: "#E5E7EB", true: "#F2733D" }}
              />
            </View>
          </View>

          <View className="flex-row gap-3 mb-6">
            <View className="flex-1 border border-gray-200 rounded-xl px-3 py-2">
              <Text className="text-gray-400 text-[10px]">State</Text>
              <View className="flex-row items-center justify-between mt-0.5">
                <Text className="text-blue-950 text-sm font-medium">Lagos</Text>
                <ChevronDownIcon size={16} color="#8A93B2" />
              </View>
            </View>
            <View className="flex-1 border border-gray-200 rounded-xl px-3 py-2">
              <Text className="text-gray-400 text-[10px]">LGA</Text>
              <View className="flex-row items-center justify-between mt-0.5">
                <Text className="text-blue-950 text-sm font-medium">
                  Surulere
                </Text>
                <ChevronDownIcon size={16} color="#8A93B2" />
              </View>
            </View>
          </View>

          <View className="mb-6 relative">
            <Text className="text-blue-950 font-semibold text-sm mb-4">
              Distance
            </Text>
            <View className="h-1 rounded-full bg-gray-200">
              <View className="absolute -top-2 left-0 h-5 w-5 rounded-full bg-white border-2 border-gray-200" />
            </View>
            <Text className="text-gray-400 text-xs mt-3">0 km</Text>
          </View>

          <View className="mb-8">
            <Text className="text-blue-950 font-semibold text-sm mb-3">
              Rating
            </Text>
            <View className="flex-row items-center justify-between">
              <View className="flex-row gap-2">
                {[1, 2, 3, 4, 5].map((value) => {
                  const Star =
                    value <= rating ? StarIconSolid : StarIconOutline;
                  return (
                    <Pressable key={value} onPress={() => setRating(value)}>
                      <Star
                        size={26}
                        color={value <= rating ? "#FBBF24" : "#D1D5DB"}
                      />
                    </Pressable>
                  );
                })}
              </View>
              <Text className="text-[#F2733D] text-sm font-semibold">
                {rating.toFixed(1)}
              </Text>
            </View>
          </View>

          <Pressable
            className="bg-[#F2733D] rounded-xl py-4 items-center"
            onPress={onClose}
          >
            <Text className="text-white font-semibold text-base">
              Show Results
            </Text>
          </Pressable>

          <Pressable className="items-center mt-4" onPress={onClose}>
            <Text className="text-blue-950 font-semibold text-sm">Close</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};
