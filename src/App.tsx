import { Dash } from "./templates/Dash";
import { ProviderTheme } from "./themes/Chakra/ProviderTheme";

function App() {
  return (
   <ProviderTheme>
    <Dash>
      manolo
    </Dash>
   </ProviderTheme>
  );
}

export default App;
