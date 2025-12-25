import { Text, View } from "react-native";

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
    </View>
  );
}
