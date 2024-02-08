import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex flex-col items-center gap-1">
        <Text className="text-green-500 text-lg font-heading">Hello World</Text>
        <Text className="text-white">This is the first page of your app.</Text>
      </View>
    </View>
  );
}

