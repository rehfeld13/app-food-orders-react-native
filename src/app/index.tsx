import { View } from "react-native";
import Header from "../components/Header";

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Cardápio" cartQuantityItems={3} />
    </View>
  );
}

