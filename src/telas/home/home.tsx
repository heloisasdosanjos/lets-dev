import * as s from "./styled-home";
import {
  Footer,
  Header,
  TituloSecao,
  Card,
  InputButton,
} from "../../componentes";
import { ImagemPerfil, Logo } from "../../imagens";
import { useContext } from "react";
import { MyContext } from "../../contexto";

const Home = () => {

  const { setNomeUsuario, nomeUsuario } = useContext(MyContext);

  const telas = [
    {
      titulo: "Formulário em HTML e CSS",
      link: "/form-basico",
      descricao: (
        <p>
          O primeiro <i>“Hello World”</i> a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS.
        </p>
      ),
    },
    {
      titulo: "Formulário 2.0",
      link: "/form-completo",
      descricao: (
        <p>
          O primeiro <i>“console.log”</i> a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS.
        </p>
      ),
    },
    {
      titulo: "Consumindo API's",
      link: "/consumindo-apis",
      descricao:
        "Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela.",
    },
    {
      titulo: "A PAIPE e os Paipers",
      link: "/sobre-paipers",
      descricao:
        "Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe.",
    },
  ];

  return (
    <s.Container>
      <Header />
      <s.Banner>
        <h1>Que prazer te ver aqui, {nomeUsuario}!</h1>
        <button onClick ={() => localStorage.removeItem('nomeUsuario')}>
          Sair
        </button>
        <img src={Logo} />
        <h2>
          Seja bem-vindo(a) ao Let’s Dev! O evento que vai transformar sua
          carreira.
        </h2>
        <p>
          Você está no módulo Front-end e vai aprender a criar um site básico do
          zero.
        </p>
      </s.Banner>
      <s.Content>
        <TituloSecao titulo="O que fizemos até agora..." />

        <s.GroupCards>
          {telas.map((card) => (
            <Card
              titulo={card.titulo}
              link={card.link}
              descricao={card.descricao}
            />
          ))}
        </s.GroupCards>

        <TituloSecao titulo="Um pouco sobre mim..." />

        <s.Row>
          <img src={ImagemPerfil} alt="Imagem de perfil da aluna." />
          <s.Column>
            <h3>Meu nome é Heloisa!</h3>
            <p>
            🟣Atualmente estou cursando Análise e Desenvolvimento de Sistemas e estudando tecnologias front-end.<br/>
            🟣Eu sou formada em arquitetura e urbanismo e apaixonada pela área de tecnologia!<br/>
            🟣Sou de Porto Alegre/RS!<br/>
            🟣Tenho facilidade com a área das artes, criatividade e design.<br/>
            🟣Meus hobbies incluem: cantar, desenhar, cozinhar para os amigos e aprender idiomas.<br/>
            </p>

            <h4>Meus contatos:</h4>

            <s.ButtonGroup>
              <InputButton
                outlined
                type="button"
                value="LinkedIn"
                onClick={() => {
                  //Aqui vai o seu perfil do linkedIn
                  window.open("https://www.linkedin.com/in/heloisadosanjos/", "_blank");
                }}
                title="Acessa o perfil do LinkedIn."
              />
              <InputButton
                type="submit"
                value="GitHub"
                onClick={() => {
                  //Aqui vai o seu perfil do GitHub
                  window.open("https://github.com/heloisasdosanjos", "_blank");
                }}
                title="Acessa o perfil do GitHub."
              />
              <InputButton
                outlined
                type="button"
                value="Email"
                onClick={() => {
                  //Aqui vai o seu perfil do linkedIn
                  window.open("mailto:heloisasdosanjos@gmail.com");
                }}
                title="Envia um email."
              />
              <InputButton
                outlined
                type="button"
                value="Instagram"
                onClick={() => {
                  //Aqui vai o seu perfil do linkedIn
                  window.open("https://www.instagram.com/heloisadosanjos/", "_blank");
                }}
                title="Acessa o instagram."
              />
            </s.ButtonGroup>
          </s.Column>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default Home;
