import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Pressable,
  Switch,
  View,
} from "react-native";
import FormInput from "./src/components/FormInput";
import FormButton from "./src/components/FormButton";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [formularioValido, setFormularioValido] = useState(false);

  useEffect(() => {
    const valido =
      nome.trim() !== "" &&
      email.includes("@") &&
      senha.length >= 6 &&
      aceitouTermos;

    setFormularioValido(valido);
  }, [nome, email, senha, aceitouTermos]);

  function validarFormulario() {
    const novosErros = {
      nome: nome.trim() === "" ? "Informe seu nome." : "",
      email: !email.includes("@") ? "Informe um e-mail válido." : "",
      senha:
        senha.length < 6 ? "A senha deve ter pelo menos 6 caracteres." : "",
    };

    setErros(novosErros);

    return (
      novosErros.nome === "" &&
      novosErros.email === "" &&
      novosErros.senha === ""
    );
  }

  function cadastrarUsuario() {
    if (!validarFormulario()) {
      return;
    }

    if (!aceitouTermos) {
      console.log("É necessário aceitar os termos de uso.");
      return;
    }

    console.log("Cadastro realizado com sucesso!");
    console.log({
      nome,
      email,
      senha,
      aceitouTermos,
    });
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {loading ? (
          <Text style={styles.loading}>Sistema Carregado...</Text>
        ) : (
          <>
            <Image
              source={{ uri: "https://i.pravatar.cc/300?img=47" }}
              style={styles.headerImage}
            />
            <Text style={styles.title}>Cadastro de Usuário</Text>

            <Text style={styles.subtitle}>
              Preencha seus dados para criar uma conta.
            </Text>

            <FormInput
              label="Nome completo"
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
              error={erros.nome}
            />

            <FormInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
              error={erros.email}
            />

            <FormInput
              label="Senha"
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              error={erros.senha}
            />

            <View style={styles.termsContainer}>
              <Switch value={aceitouTermos} onValueChange={setAceitouTermos} />

              <Text>Aceito os termos de uso</Text>
            </View>

            <FormButton
              title="Cadastrar"
              onPress={cadastrarUsuario}
              disabled={!formularioValido}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  content: {
    padding: 20,
    flexGrow: 1,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },

  loading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 20,
  },

  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
  },

  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
