
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";


function App() {
  return (
   <>
   <Header />
   <Container>
    <main>
        <HomeScreen/>
    </main>
   </Container>
   <Footer/>
   </>
  );
}

export default App;
