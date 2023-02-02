import Header from "./Components/header/header";
import Solutions from "./Components/solution/solution";
import Cases from "./Components/Cases/cases";
import Blog from "./Components/blog/blog";
import Team from "./Components/team/team";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";

function App() {
    return (

        <div className="App">
                <Header/>
                <Solutions/>
                <Cases/>
                <Blog/>
                <Team/>
                <Contact/>
                <Footer/>
        </div>
    );
}

export default App;
