import { StyleSheet, Text, View } from 'react-native';
// react-native-safe-area-context'ten SafeAreaView'i import edin [cite: 30, 33]
import { SafeAreaView } from 'react-native-safe-area-context'; 

export default function App() {
  return (
    // SafeAreaView'e container stilini uygulayın [cite: 44]
    <SafeAreaView> 
      <View style={styles.container} >
        <Text style={styles.content}>My Profile App</Text> {/* "My Profile App" metnini ekleyin [cite: 29, 38] */}
      </View>
    </SafeAreaView>
  );
}

// Stilleri tanımlayın [cite: 43]
const styles = StyleSheet.create({
  container: {
    flex: 1, // SafeAreaView için flex: 1 [cite: 45]
    backgroundColor: '#f0f2f5', // Açık gri arka plan rengi [cite: 45]
  },
  content: {
    padding: 20, // View'e padding: 20 verin [cite: 46]
  },
});