import { useContext, useEffect } from "react";
import { Button, FlatList, Text, View } from "react-native";
import Loader from "../components/Loader";
import { ApiContext } from "../contexts/ApiContext";

export default function ProductListScreen({ navigation }) {
  const { products, fetchProducts, loading } = useContext(ApiContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.title}</Text>
          <Button
            title="View"
            onPress={() => navigation.navigate("Details", { product: item })}
          />
        </View>
      )}
    />
  );
}
