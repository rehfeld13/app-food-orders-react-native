import { View, FlatList } from "react-native";
import Header from "../components/Header";
import CategotyButton from "../components/CategoryButton";
import { CATEGORIES } from "@/src/utils/data/products"
import { useState } from "react";

export default function Home() {

  const [category, setCategoty] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string){
    setCategoty(selectedCategory)
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategotyButton 
            title={item} 
            onPress={() => handleCategorySelect(item)}
            isSelected={item === category}  
          />   
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

