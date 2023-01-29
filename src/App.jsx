import { NewsProvider } from "./context/NewsProvider";
import AppNews from "./components/AppNews";


function App() {


  return (
    <NewsProvider>
      <AppNews />
    </NewsProvider>
  )
}

export default App
