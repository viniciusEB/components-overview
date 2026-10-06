import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TextInput,
  Button,
  Switch,
  ScrollView,
  Pressable,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const registrarCredencial = () => {
    if (nome.trim() === '') {
      Alert.alert('Atenção', 'Digite seu nome de desenvolvedor.');
      return;
    }
    Alert.alert(
      'Credencial registrada!',
      `Dev: ${nome}\nAcesso: ${isAdmin ? 'Total (Admin)' : 'Básico'}`
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <Text style={[styles.headerTitle, styles.titleBlue]} selectable={true}>
            DevBadge Profile
          </Text>
        </View>

        <View style={styles.textComposition}>
          <Text style={styles.baseText}>
            Status do Sistema:
            <Text style={styles.highlighText}> Online</Text>
          </Text>
        </View>

        <Image
          style={styles.logo}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <Text
          style={styles.hint}
          onPress={() => console.log('Pressionamento rapido')}
          onLongPress={() =>
            Alert.alert('Dica', 'Preencha seus dados abaixo.')
          }
        >
          (Pressione e segure para dicas)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome de desenvolvedor..."
          placeholderTextColor="#6e7681"
          value={nome}
          onChangeText={setNome}
        />

        <View style={styles.fullWidth}>
          <Button
            title="Registrar Credencial"
            color="#58a6ff"
            onPress={registrarCredencial}
          />
        </View>

        <View style={styles.adminCard}>
          <Text style={styles.baseText}>Ativar Modo Admin?</Text>
          <Switch
            value={isAdmin}
            onValueChange={setIsAdmin}
            trackColor={{ false: '#30363d', true: '#238636' }}
            thumbColor={isAdmin ? '#ffffff' : '#adbac7'}
          />
        </View>

        <View style={[styles.badge, isAdmin && styles.badgeAdmin]}>
          <Text style={[styles.badgeText, isAdmin && styles.badgeTextAdmin]}>
            {isAdmin ? 'Acesso Total (Admin)' : 'Acesso Básico'}
          </Text>
        </View>

        {[1, 2, 3, 4, 5].map((n) => (
          <Pressable
            key={n}
            style={styles.elemento}
            onPress={() => Alert.alert('Elemento', `Você tocou no Elemento ${n}`)}
            onLongPress={() =>
              Alert.alert('Elemento', `Toque longo no Elemento ${n}`)
            }
          >
            <Text style={styles.elementoText}>Elemento {n}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#586aff',
    backgroundColor: '#0D1117',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#3FB950',
  },
  titleBlue: {
    color: '#58a6ff',
  },
  textComposition: {
    marginBottom: 20,
  },
  baseText: {
    color: '#fff',
    fontSize: 16,
  },
  highlighText: {
    color: '#3FB950',
    fontWeight: 'bold',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#21262d',
    marginBottom: 20,
  },
  hint: {
    color: '#8b949e',
    fontSize: 13,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    backgroundColor: '#161b22',
    borderColor: '#58a6ff',
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  fullWidth: {
    width: '100%',
  },
  adminCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161b22',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 28,
    marginBottom: 24,
  },
  badge: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 12,
  },
  badgeAdmin: {
    borderColor: '#3FB950',
  },
  badgeText: {
    color: '#adbac7',
    fontWeight: 'bold',
    fontSize: 14,
  },
  badgeTextAdmin: {
    color: '#3FB950',
  },
  elemento: {
    width: 170,
    height: 90,
    backgroundColor: '#161b22',
    borderColor: '#58a6ff',
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  elementoText: {
    color: '#58a6ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});