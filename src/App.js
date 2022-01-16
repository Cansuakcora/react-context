import './App.css';
import  { ThemeProvider } from "./context/ThemeContext";
import Container from './components/Container';


function App() {
  return (
   <ThemeProvider>
     {/* ThemeContext componentinde oluşturuldu */}
      <Container/>
   </ThemeProvider>
  );
}
   
export default App;
