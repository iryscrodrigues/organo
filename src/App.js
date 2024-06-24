import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Criminal Minds',
      cor: '#932211'
    },
    {
      id: uuidv4(),
      nome: '9-1-1',
      cor: '#3A3748'
    },
    {
      id: uuidv4(),
      nome: 'Law & Order: Special Victims Unit (SVU)',
      cor: '#0E364B'
    },
    {
      id: uuidv4(),
      nome: 'Cold Case',
      cor: '#6E6860'
    },
    {
      id: uuidv4(),
      nome: 'The X-Files',
      cor: '#000000'
    },
    {
      id: uuidv4(),
      nome: 'Lie to me',
      cor: '#929EBD'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Aaron Hotchner',
      cargo: ' Agente Especial Supervisor e Chefe de Unidade da Unidade de Análise Comportamental (BAU)',
      imagem: 'https://i.pinimg.com/564x/b8/b8/a8/b8b8a8cdd434d5a5a52ad8ade57ef2f2.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jennifer Jareau',
      cargo: 'Agente Especial e Liaison da Unidade de Análise Comportamental (BAU)',
      imagem: 'https://i.pinimg.com/564x/5f/1a/e1/5f1ae1daad037d7a1bf13eebf694279b.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Spencer Reid',
      cargo: 'Agente Especial e Profiler da BAU',
      imagem: 'https://i.pinimg.com/474x/b5/6e/6c/b56e6c9860c8edd32ef1b857be6c6c15.jpg	',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Emily Prentiss',
      cargo: 'Chefe de Unidade da BAU',
      imagem: 'https://i.pinimg.com/564x/b6/cc/36/b6cc36c2ca6008b04e7431be020aefe5.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: ' Robert "Bobby" Nash',
      cargo: 'Capitão do Corpo de Bombeiros de Los Angeles',
      imagem: 'https://i.pinimg.com/474x/85/46/24/854624cc9de9afafd8c4c192174f1e23.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Athena Grant-Nash',
      cargo: 'Sargento da Polícia de Los Angeles',
      imagem: 'https://i.pinimg.com/564x/69/12/1c/69121c0ad4f1eb10689797de30e07029.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Evan Buckley',
      cargo: 'Bombeiro do Corpo de Bombeiros de Los Angeles',
      imagem: '	https://i.pinimg.com/474x/7e/9e/91/7e9e91d66db3041bd949fb26350c1bfe.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Henrietta Wilson',
      cargo: 'Paramedica e Bombeira do Corpo de Bombeiros de Los Angeles',
      imagem: 'https://i.pinimg.com/474x/6b/62/6a/6b626a599ab9d232c37f60c2cfa8a53f.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Olivia Benson',
      cargo: 'Tenente e Comandante da Unidade de Vítimas Especiais',
      imagem: 'https://i.pinimg.com/474x/f1/83/a3/f183a3352ad9dea6e57e0c5d3896ee95.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Elliot Stabler',
      cargo: 'Detetive Sênior da Unidade de Vítimas Especiais',
      imagem: 'https://i.pinimg.com/474x/d9/4d/d0/d94dd0e8e390119953ada1b99670824c.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fin Tutuola',
      cargo: 'Detetive da Unidade de Vítimas Especiais',
      imagem: '	https://i.pinimg.com/474x/0c/ac/66/0cac660a9a610700a68440f6ecbba4f0.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Amanda Rollins',
      cargo: 'Detetive da Unidade de Vítimas Especiais',
      imagem: 'https://i.pinimg.com/474x/5e/a3/a8/5ea3a882f22792557b96511a1d286899.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Lilly Rush',
      cargo: 'Detetive do Departamento de Homicídios da Filadélfia, especializada em casos arquivados',
      imagem: 'https://i.pinimg.com/564x/6d/16/1b/6d161b88fb8351e35d41bb8443513b00.jpg' ,
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Scotty Valens',
      cargo: 'Detetive do Departamento de Homicídios da Filadélfia',
      imagem: 'https://i.pinimg.com/474x/c4/9c/5a/c49c5a1f61852d19f39785c52f83362a.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'John Stillman',
      cargo: 'Tenente do Departamento de Homicídios da Filadélfia e supervisor da equipe de casos arquivados',
      imagem: 'https://is1-ssl.mzstatic.com/image/thumb/G6sOhBToahnMyhvq1GmQlg/1200x675mf.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Nick Vera',
      cargo: 'Detetive do Departamento de Homicídios da Filadélfia',
      imagem: 'https://static.screenweek.it/interpretation/original_low-79556.jpg?1456324732',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fox Mulder',
      cargo: 'Agente Especial do FBI',
      imagem: 'https://i.pinimg.com/564x/31/28/98/312898905dd1e9f249051cdc50bd3ff0.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Dana Scully',
      cargo: 'Agente Especial do FBI, médica e cientista',
      imagem: 'https://i.pinimg.com/474x/25/aa/da/25aadaedc86ae58e3c3ba103e70435f2.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Walter Skinner',
      cargo: 'Diretor Assistente do FBI',
      imagem: 'https://static.screenweek.it/interpretation/original_low-178208.jpg?1455128367',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'John Doggett',
      cargo: 'Agente Especial do FBI',
      imagem: 'https://i.pinimg.com/474x/de/a9/f3/dea9f305cec6dd69f7876ac7ee11182b.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dr. Cal Lightman',
      cargo: 'Fundador e diretor do Grupo Lightman',
      imagem: 'https://i.pinimg.com/564x/b1/b4/1a/b1b41a0da3aeeab42d733addf5958c03.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dr. Gillian Foster',
      cargo: 'Psicóloga e co-diretora do Grupo Lightman',
      imagem: 'https://i.pinimg.com/474x/29/fb/83/29fb8372c9fe07b9637aaa310d35c9dc.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Eli Loker',
      cargo: 'Analista principal no Grupo Lightman',
      imagem: 'https://i.pinimg.com/736x/40/7a/e8/407ae8561e2b835189c44858b247db8b.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ria Torres',
      cargo: ' Investigadora no Grupo Lightman',
      imagem: 'https://i.pinimg.com/564x/02/5a/ec/025aec7bd91950a8f7939c467df7d09a.jpg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}





export default App;
