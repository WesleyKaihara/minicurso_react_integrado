import logo from './logo.svg';
import './App.css';

function BotaoPrincipal(props) {
  const btnStyle = {
    color: "white",
    backgroundColor: "#111199",
    padding: "2vh 5vh",
    border: "none",
    borderRadius: 5
  };
  return (
    <button style={btnStyle} >{props.children}</button>
  );
};


function App() {

  const meusElementos = (
    <div>
      <button
        onClick={() => alert("clicou no botão")}
        onMouseOver={() => alert("passou o mouse")}
      >Clique aqui</button>

      <p>Olá CONCCEPAR</p>
      <img src={logo} alt="logo" className="App-logo" />
    </div>
  );

  return (
    <div className="App">
      {meusElementos}
      <BotaoPrincipal >
        Clique aqui
      </BotaoPrincipal>
      <br />
      <br />
      <BotaoPrincipal >
        Voltar
      </BotaoPrincipal>
    </div>
  );
}

export default App;
