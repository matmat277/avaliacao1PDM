import { View, Text, TextInput, StyleSheet } from "react-native";

interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
}

export default function FormInput(props: FormInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>

      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />

      {props.error ? <Text style={styles.error}>{props.error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
