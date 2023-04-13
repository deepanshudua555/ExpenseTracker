import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constans/styles";
import Button from "./Button";

// function ErrorOverlay({message, onConfirm}) {
function ErrorOverlay({message}) {
  return (
    <View style={styles.constainer}>
      <Text style={[styles.text, styles.title]}>An error Occured!!</Text>
      <Text style={styles.text}>{message}</Text>
      {/* <Button onPress={onConfirm}>Okay</Button> */}
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text:{
    color:'#fff',
    textAlign:'center',
    marginBottom:8,

  },
  title:{
    fontSize:20,
    fontWeight:'bold',
  },
});
