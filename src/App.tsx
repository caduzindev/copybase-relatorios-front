import { SendReport } from "./pages/SendReport";
import { Dash } from "./templates/Dash";
import { ProviderTheme } from "./themes/Chakra/ProviderTheme";
import { ReactQueryProvider } from './providers/ReactQuery'
import { RootStore } from "./shared/store";

function App() {
  return (
   <ProviderTheme>
    <ReactQueryProvider>
      <RootStore>
        <Dash>
          <SendReport/>
        </Dash>
      </RootStore>
    </ReactQueryProvider>
   </ProviderTheme>
  );
}

export default App;
