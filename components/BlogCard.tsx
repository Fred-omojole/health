import { Image } from "expo-image";
import { Text, View } from "react-native";
import { ClockIcon } from "react-native-heroicons/outline";

interface BlogCardProps {
  image: string;
  title: string;
  postedAgo: string;
  readTime: string;
}

export const BlogCard = ({
  image,
  title,
  postedAgo,
  readTime,
}: BlogCardProps) => {
  return (
    <View
      className="w-[220px] bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)" }}
    >
      <Image source={image} className="h-[120px] w-full" />
      <View className="p-3">
        <Text
          className="text-blue-950 text-sm font-semibold leading-5"
          numberOfLines={3}
        >
          {title}
        </Text>
        <View className="flex-row items-center gap-1 mt-3">
          <ClockIcon size={14} color="#9CA3AF" />
          <Text className="text-gray-400 text-xs">{postedAgo}</Text>
          <Text className="text-gray-400 text-xs">•</Text>
          <Text className="text-gray-400 text-xs">{readTime}</Text>
        </View>
      </View>
    </View>
  );
};
