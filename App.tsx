import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AppThemeProvider} from './src/theme/AppThemeProvider';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './src/navigation/AppNavigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
