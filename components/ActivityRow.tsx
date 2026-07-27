import type { ImageSource } from "expo-image";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { ChatBubbleLeftIcon, FolderIcon } from "react-native-heroicons/outline";
import { CheckIcon, XMarkIcon } from "react-native-heroicons/solid";

type ActivityType = "prescription" | "appointment";

interface ActivityRowProps {
  type: ActivityType;
  avatar: ImageSource;
  time: string;
  detail: string;
}

const TYPE_CONFIG: Record<
  ActivityType,
  { title: string; Icon: typeof FolderIcon }
> = {
  prescription: { title: "Prescription", Icon: FolderIcon },
  appointment: { title: "Appointment", Icon: ChatBubbleLeftIcon },
};

export const ActivityRow = ({
  type,
  avatar,
  time,
  detail,
}: ActivityRowProps) => {
  const { title, Icon } = TYPE_CONFIG[type];

  return (
    <View className="flex-row gap-3">
      <View className="mt-2 h-2 w-2 rounded-full bg-[#F2733D]" />
      <Image source={avatar} className="h-10 w-10 rounded-md" />
      <View className="flex-1">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Text className="text-blue-950 font-semibold text-sm">{title}</Text>
            <Text className="text-gray-400 text-xs">{time}</Text>
          </View>
          <View className="h-8 w-8 items-center justify-center rounded-md bg-indigo-50">
            <Icon size={16} color="#6366F1" />
          </View>
        </View>
        <Text className="text-blue-950 text-sm mt-1">{detail}</Text>
        {type === "appointment" && (
          <View className="flex-row gap-3 mt-3">
            <View className="flex-1 flex-row items-center justify-center gap-1 bg-green-400 rounded-lg py-2">
              <CheckIcon size={14} color="#fff" />
              <Text className="text-white text-xs font-semibold">
                Reschedule
              </Text>
            </View>
            <View className="flex-1 flex-row items-center justify-center gap-1 bg-red-400 rounded-lg py-2">
              <XMarkIcon size={14} color="#fff" />
              <Text className="text-white text-xs font-semibold">Cancel</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
