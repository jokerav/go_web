import Header from "./Components/header/header";
import Solutions from "./Components/solution/solution";
import Cases from "./Components/Cases/cases";
import Blog from "./Components/blog/blog";
import Team from "./Components/team/team";
import Contact from "./Components/contact/contact";
import Footer from "./Components/footer/footer";
import ToTopBtn from "./Components/shared/toTopBtn";


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
            <ToTopBtn/>
        </div>
    );
}

export default App;
