import { forwardRef } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { formatCurrency } from "../utils/data/functions/format-currency";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
  quantity?: number
  price: number
}

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps
}

 const Product = forwardRef<TouchableOpacity, ProductProps> (
  ({ data, ...rest }, ref ) => {
  return(
    <TouchableOpacity 
      className="w-full flex-row items-center pb-4" 
      {...rest}
      ref={ref}
    >
      <Image 
        source={data.thumbnail}
        className="w-20 h-20 rounded-md"
      />

      <View className="flex-1 ml-3">
        <View className="flex-row items-center">
          <View className="flex-1 flex-row gap-2 items-center">
            <Text className="text-slate-100 font-subtitle text-base">
              {data.title}
            </Text>

            <Text className="text-slate-100 font-subtitle text-xs pt-1">
              {formatCurrency(data.price)}
            </Text>
          </View>

          {data.quantity && (
            <Text className="text-slate-400 font-subtitle text-sm">
            x {data.quantity}
            </Text>
          )}
        </View>

        <Text className="text-slate-400 text-xs leading-5 mt-0.5">
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
})

export default Product