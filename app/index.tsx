import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Olá!</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignItens: "center",
  }
})