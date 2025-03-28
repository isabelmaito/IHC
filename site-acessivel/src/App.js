import logo from "./assets/images/pokebola.png"
import "./App.css"
import Footer from "./components/footer"
import Header from "./components/header"
import TextToSpeech from "./components/textToSpeech"

function App() {
    return (
        <div className="App">
            <div vw class="enabled">
                <div vw-access-button class="active"></div>
                <div vw-plugin-wrapper>
                    <div class="vw-plugin-top-wrapper"></div>
                </div>
            </div>
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Site Acessível</p>
                <button>
                    <TextToSpeech text="Site Acessível" />
                </button>
            </header>
        </div>
    )
}

export default App
