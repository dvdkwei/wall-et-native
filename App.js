import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { PTMono_400Regular, useFonts } from '@expo-google-fonts/pt-mono';
import { 
  Lato_300Light, 
  Lato_400Regular, 
  Lato_400Regular_Italic, 
  Lato_700Bold 
} from '@expo-google-fonts/lato';
import { useCallback, useEffect } from 'react';
import Login from './src/views/Login';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fonts] = useFonts({ PTMono_400Regular, Lato_300Light, Lato_400Regular, Lato_400Regular_Italic, Lato_700Bold });

  const onLayoutRootView = useCallback(async () => {
    if (fonts) {
      await SplashScreen.hideAsync();
    }
  }, [fonts]);

  if(!fonts){
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1E28',
  },
});
