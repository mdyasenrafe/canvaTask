import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppThemeProvider} from './src/theme/AppThemeProvider';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <NavigationContainer></NavigationContainer>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
