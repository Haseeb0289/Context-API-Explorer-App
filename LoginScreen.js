import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Loader from "../components/Loader";
import { AuthContext } from "../contexts/AuthContext";

export default function LoginScreen() {
  const { login, loading, error } = useContext(AuthContext);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  if (loading) return <Loader />;

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <Button title="Login" onPress={() => login(email, password)} />
    </View>
  );
}
