import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { ButtonSCAnimation, ButtonSCBase, ButtonSCExtending, ButtonSCWithProps, InputValidate, INStyleButton, ModuleButton, ModuleInput } from './components';
import { InputValidate2 } from './components/input-validate/input-validate2';
import { InputValidate3 } from './components/input-validate/input-validate3';
import { theme } from './theme/theme';

function App() {

 const [primary, setPrimary] = useState(false)

 useEffect(() => {
  setTimeout(() => {
    setPrimary(true)
  }, 1000);
 })

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <InputValidate/> 
      {/* <InputValidate2 />
      <InputValidate3 /> */}
      {/* <INStyleButton/>
      <ModuleButton/>
      <ModuleInput/> */}
      {/* <InputValidate marginTop={100} /> */}
      {/* <ButtonSCBase>
        Click me!
      </ButtonSCBase> */}
      {/* <ButtonSCWithProps>
        Click me
      </ButtonSCWithProps>
      <ButtonSCWithProps primary={primary}>
        Click me
      </ButtonSCWithProps> */}
      {/* <ButtonSCExtending>
        Click me
      </ButtonSCExtending> */}
      {/* <ButtonSCAnimation isAnimatedOnHover>
        Click me
      </ButtonSCAnimation> */}
    </div>
    </ThemeProvider>
  );
}

export default App;
