import { ChakraProvider } from '@chakra-ui/react'
import { Data } from './Context/ContextStates';
import  GlobalContext  from './Context/GlobalContex.js';
import { Router } from './Routes/Router';

function App() {
  const context = Data()
  return (
  <GlobalContext.Provider value={context}>
   <ChakraProvider>
      <Router/>
    </ChakraProvider>
  </GlobalContext.Provider> 
  );
}

export default App;
