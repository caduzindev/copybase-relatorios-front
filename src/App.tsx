import { SendReport } from "./pages/SendReport";
import { Dash } from "./templates/Dash";
import { ProviderTheme } from "./themes/Chakra/ProviderTheme";

function App() {
  return (
   <ProviderTheme>
    <Dash>
      <SendReport/>
    </Dash>
   </ProviderTheme>
  );
}

export default App;
