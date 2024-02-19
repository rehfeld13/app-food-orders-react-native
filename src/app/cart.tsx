import { Text, View } from "react-native";

import { useCartStore } from "../stores/cart-store";

import Header from "../components/Header";
import Product from "../components/Product";

export default function Cart(){
  const cartStore = useCartStore()
  return(
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho"/>

      {cartStore.products.length > 0 ? (
        <View className="p-5 flex-1">
          {cartStore.products.map((product) => (
            <Product data={product} key={product.id} />
          ))
          }
        </View>
        ) : ( 
        <Text className="font-body text-slate-400 text-center my-8">
          Seu carrinho está vazio.
        </Text>
      )}
    </View>
  )
}