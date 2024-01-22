import HomePage from './pages/HomePage/HomePage';
import { ThemeProvider } from './contexts/theme.context';
import './App.css';

const App=()=>{
  return (
    <ThemeProvider>
    <HomePage/>
    </ThemeProvider>
  );
}

export default App;
