import { useState, useRef } from "react";
import { Text, View, FlatList, SectionList } from "react-native";

import { CATEGORIES, MENU } from "@/src/utils/data/products"

import CategoryButton from "../components/CategoryButton";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Home() {

  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

  function handleCategorySelect(selectedCategory: string){
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    )

    if(sectionListRef.current){
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0
      })
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={3} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton 
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

      <SectionList
        sections={MENU}
        ref={sectionListRef}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) =>
          <Product data={item} />
        }
        renderSectionHeader={({ section: { title }}) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
      />
    </View>
  );
}

