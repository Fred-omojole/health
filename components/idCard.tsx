import { Text, View } from "react-native";
import { EyeIcon } from "react-native-heroicons/outline";

type Relation =
  | { kind: "principal" }
  | { kind: "dependent"; relationship: "spouse" | "son" | "daughter" };

interface IdCardProps {
  name: string;
  relation: Relation;
}

export const IdCard = ({ name, relation }: IdCardProps) => {
  return (
    <View className="bg-white rounded-2xl p-4 flex-row items-center justify-between">
      <View>
        <Text className="text-blue-950 font-semibold text-base">{name}</Text>
        <Text className="text-gray-400 text-xs mt-1 capitalize">
          {relation.kind === "principal"
            ? "Principal"
            : `Dependant  ·  ${
                relation.relationship
                // relation.relationship.slice(1)
              }`}
        </Text>
      </View>
      <EyeIcon size={20} color="#8A93B2" />
    </View>
  );
};
