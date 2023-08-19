import "./sass/main.scss";

import Header from "./layouts/header";
import Banner from "./pages/banner";
import Footer from "./layouts/footer";
import Services from "./pages/services";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
