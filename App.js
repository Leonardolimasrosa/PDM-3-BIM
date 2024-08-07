import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View>

      </View>
      <View>
        <Button>D4</Button>
        <Button>D6</Button>
        <Button>D10</Button>
        <Button>D12</Button>
        <Button>D20</Button>
        <Button>D100</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
