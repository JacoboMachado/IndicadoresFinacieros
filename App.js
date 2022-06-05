/**
 * App creada con fin el fin de cumplir con prueba tecnica para https://www.3it.cl/
 * Desarrollado por Jacobo Machado entre los dias 4 y 5 de Junio del 2022
 * 
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndicatorsList from './src/views/IndicatorsList';
import IndicatorDetail from './src/views/IndicatorDetail';
import IndicatorHistory from './src/views/IndicatorHistory';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from "./src/store/index";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App: () => Node = () => {

  return (
    <Provider store={ store }>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
            <Stack.Navigator
                // screenOptions={{
                //     gestureEnabled: false,
                //     headerShown: false
                // }}
            >
            <Stack.Screen name='Indicadores' component={ IndicatorsList } />
            <Stack.Screen name='Indicador' component={ IndicatorDetail } options={({route}) => ({title: route.params.title })}/>
            <Stack.Screen name='Historial' component={ IndicatorHistory } options={({route}) => ({title: route.params.title })}/>
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
