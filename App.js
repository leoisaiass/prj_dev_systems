import { Navigation, NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { Routes } from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#008B8B" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  )
}

// View - é um espaço na tela, uma caixinha que pode receber coisas
// Text - é para conseguir inserir textos
// StyleSheet - estilização

