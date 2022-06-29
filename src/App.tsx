function App() {

  function minhaFuncao(){
    alert("Opa!");
  }
  

  return (
    <div>
      <h1>
        Olá Mundo!
        <button className="meu-botao" onClick={minhaFuncao}>Alert</button>
      </h1>
    </div>
  );
}

export default App
