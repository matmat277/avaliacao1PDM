import { Pressable, Text, StyleSheet } from "react-native";

interface FormButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function FormButton(props: FormButtonProps) {
  return (
    <Pressable
      style={[styles.button, props.disabled && styles.buttonDisabled]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonDisabled: {
    backgroundColor: "#999999",
    opacity: 0.6,
  },
});
