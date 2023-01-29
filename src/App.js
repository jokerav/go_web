import Header from "./Components/header/header";
import Solutions from "./Components/solution/solution";
import Cases from "./Components/Cases/cases";
import Blog from "./Components/blog/blog";
import Team from "./Components/team/team";

function App() {
    return (

        <div className="App">
                <Header/>
                <Solutions/>
                <Cases/>
                <Blog/>
                <Team/>
        </div>
    );
}

export default App;
