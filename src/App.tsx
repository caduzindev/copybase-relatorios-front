import { SendReport } from "./pages/SendReport";
import { Dash } from "./templates/Dash";
import { ProviderTheme } from "./themes/Chakra/ProviderTheme";
import { ReactQueryProvider } from './providers/ReactQuery'

function App() {
  return (
   <ProviderTheme>
    <ReactQueryProvider>
      <Dash>
        <SendReport/>
      </Dash>
    </ReactQueryProvider>
   </ProviderTheme>
  );
}

export default App;
