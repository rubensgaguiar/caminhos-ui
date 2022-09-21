import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import SimpleDialog from "../components/simpleDialog";
import ImgMediaCard from "../components/imgMediaCard";
import { Grid } from "@mui/material";

import { Caminho } from "../common/types";


const caminhos: Caminho[] = [
  {
    title: "Lógica de Programação",
    short_description: "Comece a pensar como um programador.",
    description: [
      "Nós separamos um material de lógica de programação que traz desde uma leve introdução a computação até um curso muito completo e intuitivo sobre lógica de programação.",
      "Aqui você também vai encontrar um resumo sobre o teste de mesa que vai te ajudar a testar melhor seus programas e também uma leve introdução sobre funções, para você ir se familiarizando com o assunto.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "rh65Lh5V7S0",
    caminho: [
      {
        title: 'Introdução à computação',
        link: 'https://www.youtube.com/watch?v=rh65Lh5V7S0'
      },
      {
        title: 'Curso de Lógica de Programação',
        link: 'https://www.youtube.com/watch?v=iF2MdbrTiBM'
      },
      {
        title: 'Teste de mesa',
        link: 'https://devschannel.com/logica-de-programacao/teste-de-mesa'
      },
      {
        title: 'Funções',
        link: 'https://www.youtube.com/watch?v=MyMM6xCviBk'
      },
    ],
    img: "/logica.jpg",
    extras_description: "",
    extras: []
  },
  {
    title: "Python",
    short_description: "Aprenda a Linguagem de Programação Python e crie seus primeiros softwares.",
    description: [
      "Nesse caminho eu trouxe o curso do professor Guanabara! Esse curso é bom demais, muito completo, com muitos exercícios. No curso ele faz algumas recomendações que eu queria repetir aqui: faça esse curso com seriedade, quando for assistir as aulas, evite distrações e, se possível, faça anotações ao longo do curso, esse tipo de coisa auxilia bastante no aprendizado.",
      "Um ponto importante é que no curso, o professor utiliza um programa de computador chamado Pycharm, mas você não consiga instalar programas em seu computador no momento, existem outras formas de programar em Python, por exemplo, na plataforma replit.com, o link está na descrição, nessa plataforma basta você criar sua conta e começar a programar.",
      "Além disso, no curso possuem muitos exercícios e eles são muito bons, é recomendável que você faça todos eles, pois existe conteúdo que é dado somente nas aulas de exercício. É um curso muito completo e muito interessante, com certeza após assistir ele você vai ter uma boa noção de python.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Curso em Vídeo - Mundo 1',
        link: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dlKP6QQCekuIPky1CiwmdI6'
      },
      {
        title: 'Curso em Vídeo - Mundo 2',
        link: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dk_nZHmxxf_J0WRAqy5Czye'
      },
      {
        title: 'Curso em Vídeo - Mundo 3',
        link: 'https://www.youtube.com/playlist?list=PLHz_AreHm4dksnH2jVTIVNviIMBVYyFnH'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: [
      {
        title: "Se preferir, você pode usar essa plataforma online para programar",
        link: 'https://replit.com'
      }
    ]
  },
  {
    title: "Estrutura de Dados",
    short_description: "Aprenda a organizar e processar dados, uma das habilidades mais úteis da programação.",
    description: [
      "Nesse caminho você vai conhecer as principais estruturas de dados e vai ter uma pequena introdução a algoritmos, pois existem muitos algoritmos relacionados a essas estruturas.",
      "Esse caminho é essencial para você que quer começar a programar, então recomendo estudar ele com bastante afinco para que você absorva bem os conteúdos, esses conteúdos vão seguir você durante toda a sua carreira como programador.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Curso de Estrutura de Dados',
        link: 'https://www.youtube.com/playlist?list=PL5TJqBvpXQv5Bb71AE5Cd_kB5rNsfU4Cp'
      },

    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: []
  },
  {
    title: "Algoritmos",
    short_description: "Aprenda algoritmos constantemente cobrados em entrevistas de emprego.",
    description: [
      "Aviso: faça o caminho de Estrutura de Dados antes de começar esse.",
      "Para estudar algoritmos eu venho com um site muito utilizado por pessoas que querem aplicar para grandes empresas como google ou microsoft. Esse é o site leetcode, nesse site você pode aprender sobre algoritmos, estruturas de dados e diversos outros assuntos, lá existem tutoriais que ensinam muito sobre esses assuntos e diversos exercícios que você pode resolver dentro da plataforma.",
      "O leetcode é em inglês, mas você pode usar o google tradutor para entender melhor os problemas caso não tenha domínio sobre em inglês, já que todo o conteúdo lá é apresentado em texto.",
      "Para começar a aprender é só entrar no site leetcode.com e criar sua conta. Depois de criar sua conta, nós vamos fazer primeiro uma revisão de estruturas de dados com algoritmos e depois vamos focar em algoritmos mais específicos, como algoritmos de ordenação e até recursão. Então, basta seguir a ordem dos links abaixo e fazer somente os conteúdos gratuitos de cada link, caso você tenha alguma dúvida em algum problema é só colocar o enunciado do problema no google porque alguém provavelmente terá feito a solução.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Arrays 101',
        link: 'https://leetcode.com/explore/learn/card/fun-with-arrays/'
      },
      {
        title: 'Linked List',
        link: 'https://leetcode.com/explore/learn/card/linked-list/'
      },
      {
        title: 'Binary Tree',
        link: 'https://leetcode.com/explore/learn/card/data-structure-tree/'
      },
      {
        title: 'Recursion I',
        link: 'https://leetcode.com/explore/learn/card/recursion-i/'
      },
      {
        title: 'Recursion II',
        link: 'https://leetcode.com/explore/learn/card/recursion-ii/'
      },
      {
        title: 'Binary Search Tree',
        link: 'https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/'
      },
      {
        title: 'Hash Table',
        link: 'https://leetcode.com/explore/learn/card/hash-table/'
      },
      {
        title: 'Array and String',
        link: 'https://leetcode.com/explore/learn/card/array-and-string/'
      },
      {
        title: 'Queue & Stack',
        link: 'https://leetcode.com/explore/learn/card/queue-stack/'
      },
      {
        title: 'Decision Tree',
        link: 'https://leetcode.com/explore/learn/card/decision-tree/'
      },
      {
        title: 'Sorting',
        link: 'https://leetcode.com/explore/learn/card/sorting/'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: [
      {
        title: 'Se você sabe inglês, recomendo assistir esse curso completo sobre algoritmos.',
        link: 'https://www.youtube.com/watch?v=8hly31xKli0'
      },
    ]
  },
  {
    title: "Trabalhando com Terminal",
    short_description: "Conheça o terminal, uma das ferramentas mais poderosas do desenvolvedor.",
    description: [
      "Nesse caminho separei primeiramente uma introdução a respeito do que é o terminal e o que é linux, esses assuntos são importantes para todos que estão começando a trabalhar com ele.",
      "Depois, temos um conteúdo somente para usuários de windows a respeito do WSL, e esse é um aviso bem importante, se você usa windows, instale o WSL. O WSL te possibilita ter um terminal do Linux dentro do Windows e isso vai te ajudar muito na sua jornada na programação.",
      "Após isso, também temos uma série de conteúdos a respeito de como funciona um terminal e no final você vai aprender como tornar seu terminal mais produtivo.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'O que é terminal?',
        link: 'https://www.youtube.com/watch?v=BKRi5K4Ouuo'
      },
      {
        title: 'O que é linux?',
        link: 'https://www.youtube.com/watch?v=K05CssAbQgo'
      },
      {
        title: 'Se você usa windows, instale o WSL',
        link: 'https://www.youtube.com/watch?v=hd6lxt5iVsg'
      },
      {
        title: 'Movimentando-se pelo sistema de arquivos',
        link: 'https://www.youtube.com/watch?v=uNcSM7-45fY'
      },
      {
        title: 'Aprendendo a ler o manual e passando argumentos para os comandos',
        link: 'https://www.youtube.com/watch?v=a6FwSg0hVnM&list=PLbV6TI03ZWYXXwbP2TNTbviUaFh6YqqVt&index=4'
      },
      {
        title: 'Instalando softwares (APT, DPKG e SNAP)',
        link: 'https://www.youtube.com/watch?v=pV8Yeg9S44I&list=PLbV6TI03ZWYXXwbP2TNTbviUaFh6YqqVt&index=5'
      },
      {
        title: 'Editando arquivos no terminal (VIM e NANO)',
        link: 'https://www.youtube.com/watch?v=Oqui8e0OJ2w&list=PLbV6TI03ZWYXXwbP2TNTbviUaFh6YqqVt&index=6'
      },
      {
        title: 'Usuários, grupos e permissões',
        link: 'https://www.youtube.com/watch?v=fs49n76pWv8&list=PLbV6TI03ZWYXXwbP2TNTbviUaFh6YqqVt&index=7'
      },
      {
        title: 'Redirecionamento de entrada e saída',
        link: 'https://www.youtube.com/watch?v=Ofg2WlrSLfs&list=PLbV6TI03ZWYXXwbP2TNTbviUaFh6YqqVt&index=8'
      },
      {
        title: 'Preparando um terminal mais produtivo',
        link: 'https://www.youtube.com/watch?v=D2cjJgSmf0E'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: []
  },
  {
    title: "GIT",
    short_description: "Gerencie seus projetos com essa tecnologia presente em praticamente todas as empresas de software.",
    description: [
      "Nesse caminho eu trouxe uma introdução extremamente prática e intuitiva a respeito do git. Depois, você vai aprender alguns comandos um pouco mais avançados que serão muito úteis no dia a dia. Por fim, deixei um guia prático para você consultar sempre que esquecer os comandos.",
      "Por fim, só queria relembrar a importância do git. Essa tecnologia é usada em praticamente todas as empresas de tecnologia, então é importante que você torne ela parte do seu dia a dia, isso com certeza vai ser algo muito importante para sua carreira!",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Introdução prática',
        link: 'https://www.youtube.com/watch?v=_hZf1teRFNg'
      },
      {
        title: 'Conceitos mais avançados de Git (a partir dos 19 minutos)',
        link: 'https://youtu.be/kB5e-gTAl_s?t=1172'
      },
      {
        title: 'Guia prático para você não esquecer os comandos',
        link: 'https://rogerdudler.github.io/git-guide/index.pt_BR.html'
      },
    ],
    img: "/python.jpeg",
    extras_description: "Caso queira saber mais sobre GIT:",
    extras: [
      {
        title: 'O que é Git',
        link: 'https://www.atlassian.com/br/git/tutorials/what-is-git'
      },
      {
        title: 'Por que usar git na empresa?',
        link: 'https://www.atlassian.com/br/git/tutorials/why-git'
      },
      {
        title: 'Como criar um repositório',
        link: 'https://www.atlassian.com/br/git/tutorials/setting-up-a-repository'
      },
      {
        title: 'Como salvar alterações',
        link: 'https://www.atlassian.com/br/git/tutorials/saving-changes'
      },
      {
        title: 'Como inspecionar um repositório',
        link: 'https://www.atlassian.com/br/git/tutorials/inspecting-a-repository'
      },
      {
        title: 'Desfazendo alterações',
        link: 'https://www.atlassian.com/br/git/tutorials/undoing-changes'
      },
      {
        title: 'Como reescrever o histórico',
        link: 'https://www.atlassian.com/br/git/tutorials/rewriting-history'
      },
      {
        title: 'Tutoriais avançados (em inglês, use o tradutor se precisar)',
        link: 'https://www.atlassian.com/br/git/tutorials/advanced-overview'
      },
    ]
  },
  {
    title: "Código Limpo",
    short_description: "Comece a escrever códigos limpos e se destaque no mundo da computação.",
    description: [
      "Esse sem dúvidas é um conteúdo que vai mudar sua vida na programação. Um código limpo é o que permite a construção de um código de fácil entendimento que vai permitir que pessoas trabalhem com facilidade no futuro com esse código.",
      "Fazendo uma analogia com restaurantes, trabalhar em um código sujo é como trabalhar em um restaurante sujo, é difícil, incomoda e a comida costuma dar uma dor de barriga kk. Com o código é a mesma coisa, trabalhar em um código sujo é difícil, demora, incomoda e o produto final costuma sempre dar muito problema!",
      "Enfim, nesse caminho deixei um material que vai permitir você escrever códigos muito melhores, algo que sem dúvidas é valorizado no mercado. A linguagem de programação aqui não faz diferença, o importante é entender os conceitos!",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Clean Code - Guia e Exemplos',
        link: 'https://balta.io/artigos/clean-code'
      },
    ],
    img: "/python.jpeg",
    extras_description: "Caso faça sentido para você, existe também o livro Clean Code que me ajudou bastante e é uma leitura bastante recomendada no mundo da programação:",
    extras: [
      {
        title: 'Clean Code',
        link: 'https://amzn.to/3xfvkkG'
      },
    ]
  },
  {
    title: "Entrevistas de Emprego",
    short_description: "Chegou a hora de decifrar a mente dos entrevistadores de vagas de tecnologia.",
    description: [
      "Esse é um caminho muito importante, nele você vai ter uma noção geral de como conseguir um emprego como programador, depois você vai assistir alguns vídeos sobre como construir um currículo, portfólio e Linkedin. Por fim, você vai ver como encontrar vagas de programação e como se preparar para entrevistar.",
      "Também coloquei um material muito legal no final para abrir sua mente como programador e que com certeza vai te ajudar com a busca por seu primeiro emprego na programação.",
      "Eu também queria lembrar que a busca por um emprego na programação é um processo, todas as pessoas que conheci aplicaram para MUITAS vagas para conseguir seu primeiro emprego na programação. Eu, por exemplo, facilmente apliquei para 50 vagas antes de conseguir meu primeiro emprego. Então, se dedique em construir um bom linkedin, um bom portfólio, aplique para MUITAS vagas e ao mesmo tempo continue estudando e melhorando seu portfólio.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Uma noção geral sobre como conseguir um emprego como programador - Pt 1',
        link: 'https://www.youtube.com/watch?v=6IUivbVNDy0'
      },
      {
        title: 'Uma noção geral sobre como conseguir um emprego como programador - Pt 2',
        link: 'https://www.youtube.com/watch?v=kjIgcgqqh38'
      },
      {
        title: 'Como criar um bom currículo',
        link: 'https://www.youtube.com/watch?v=Qt1Ht59Xqgs'
      },
      {
        title: 'Como documentar projetos no github - Pt 1',
        link: 'https://www.youtube.com/watch?v=jIa8R69pKh8'
      },
      {
        title: 'Como documentar projetos no github - Pt 2',
        link: 'https://www.youtube.com/watch?v=gRxqAkWDlmA'
      },
      {
        title: 'Como criar um bom Linkedin - Pt 1',
        link: 'https://www.youtube.com/watch?v=t_P7BIu-bRY'
      },
      {
        title: 'Como criar um bom Linkedin - Pt 2',
        link: 'https://www.youtube.com/watch?v=h06KIgcPUnU'
      },
      {
        title: 'Como encontrar vagas de programação',
        link: 'https://www.youtube.com/watch?v=JDRR29SlGtc'
      },
      {
        title: 'Como se preparar para a entrevista',
        link: 'https://www.youtube.com/watch?v=P2y1n_NyJy0'
      },
      {
        title: 'Seja um programador melhor!',
        link: 'https://www.youtube.com/watch?v=vGQSG_YnTOw'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: []
  },
  {
    title: "Como a Internet Funciona",
    short_description: "Descubra como a internet funciona por debaixo dos cabos.",
    description: [
      "Nesse caminho você vai aprender um pouco mais sobre o funcionamento da internet e isso aqui é muito importante. Aqui você vai entender como que acontece a mágica de escrever um código e ele aparecer para outras pessoas por meio de uma tela.",
      "Esses conhecimentos vão ser necessários para que você consiga construir códigos levando em conta como a internet funciona, criando sistemas de melhor qualidade a partir desses conceitos e elevando seu entendimento sobre o contexto onde seu código se insere.",
      "Outro ponto muito importante é entender o que significa front-end, back-end e full stack, que são três grandes áreas dentro da programação que você pode especializar!",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Como a internet chega na minha casa?',
        link: 'https://www.youtube.com/watch?v=F74GKCLXUWM&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=6'
      },
      {
        title: 'Como a internet funciona?',
        link: 'https://www.youtube.com/watch?v=nlO5hySqJFA&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=7'
      },
      {
        title: 'O que é domínio e hospedagem?',
        link: 'https://www.youtube.com/watch?v=RFHSt1PCy0k&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=8'
      },
      {
        title: 'A diferença entre HTML, CSS e Javascript',
        link: 'https://www.youtube.com/watch?v=B4FU3NFRTDw&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=9'
      },
      {
        title: 'O que significa Front-end, Back-end e Full stack',
        link: 'https://www.youtube.com/watch?v=iSqf2iPqJNM&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=10'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: []
  },
  {
    title: "Banco de Dados",
    short_description: "Aprenda sobre os principais bancos de dados e como eles funcionam.",
    description: [
      "Nesse caminho você vai aprender um conteúdo extremamente importante no mundo da programação: como funcionam os bancos de dados. Você vai conhecer os principais tipos de bancos de dados e você vai ter uma noção prática de cada um deles.",
      "Esse conteúdo é muito importante, pois praticamente todo projeto de programação precisa armazenar dados e, na maioria das empresas, isso ocorre em larga escala, assim, os bancos de dados fazem parte da vida do programador.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Bancos de Dados Relacionais e Não-Relacionais',
        link: 'https://www.youtube.com/playlist?list=PLxI8Can9yAHeZcEzZElhxwsQTf9MaG6sS'
      },
      {
        title: 'O que é SQL e NoSQL?',
        link: 'https://www.youtube.com/watch?v=aure5d3B88g'
      },
      {
        title: 'Curso prático SQL',
        link: 'https://www.youtube.com/watch?v=G7bMwefn8RQ'
      },
      {
        title: 'Curso prático MongoDB',
        link: 'https://www.youtube.com/watch?v=x9tC0eK0GtA'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: []
  },
  {
    title: "API",
    short_description: "Conheça e construa interfaces de comunicação entre aplicações na internet.",
    description: [
      "​As APIs estão em todo lugar, todo sistema que está na internet costuma disponibilizar APIs para que outros sistemas também se conectem a eles. É importante aqui conhecer o que são as APIs, como usar elas e como criar uma delas.",
      "Aprendendo esse assunto você vai conseguir se conectar a sistemas que estão na internet de outras empresas e usar isso ao seu favor. Você também vai conseguir criar formas de outras pessoas se conectarem ao seus sistemas e usar isso da melhor forma possível. E é bom ressaltar que isso é extremamente comum no mercado de trabalho.",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'O que é API?',
        link: 'https://www.youtube.com/watch?v=ghTrp1x_1As'
      },
      {
        title: 'O que é JSON?',
        link: 'https://www.youtube.com/watch?v=BWPUSXzSWA8'
      },
      {
        title: 'APIs em Python',
        link: 'https://www.youtube.com/watch?v=eel1OVIdfUw'
      },
      {
        title: 'Criar API em Python',
        link: 'https://www.youtube.com/watch?v=WWVEymSt1iI'
      },
      {
        title: 'Criando API com Banco de Dados e Autenticação - Pt 1',
        link: 'https://www.youtube.com/watch?v=WzaKIRJBGXo'
      },
      {
        title: 'Criando API com Banco de Dados e Autenticação - Pt 2',
        link: 'https://www.youtube.com/watch?v=ieGA91ExOH0'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: [
      {
        title: 'Formas modernas de criar API',
        link: 'https://www.youtube.com/watch?v=f7JWDLFhR_c'
      },
    ]
  },
  {
    title: "Desenvolvimento Web",
    short_description: "Aprenda como desenvolver um sistema de forma profissional.",
    description: [
      "Desenvolvimento Web é uma arte, aqui diversos temas estão conectados, neste momento você vai usar git, APIs, banco de dados, estruturas de dados, código limpo, etc. A lista aqui é indefinida.",
      "Você aqui é literalmente um construtor de um espaço completamente novo na internet e é importante que você aprenda a fazer isso muito bem para ser reconhecido no mercado. E só é possível fazer isso muito bem através da prática, construindo muitos sistemas web.",
      "Nesse caminho você terá uma visão extremamente ampla e detalhada da criação de um sistema. Use o que você construirá nesse caminho no seu portfólio, sem dúvidas você será visto de forma diferente pelas empresas. E lembre-se: continue praticando!",
      "Aproveite o caminho!​"
    ],
    youtubeId: "",
    caminho: [
      {
        title: 'Curso de Desenvolvimento Web em Python',
        link: 'https://evolutio.io/curso/djavue'
      },
    ],
    img: "/python.jpeg",
    extras_description: "",
    extras: []
  },
];

const Caminhos: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(caminhos[0]);

  const handleClickOpen = (index: number) => {
    setSelectedValue(caminhos[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Caminhos</h1>

        <p className={styles.description}>Aprenda programação!</p>

        <Grid container spacing={4}>
          {caminhos.map((caminho, index) => (
            <ImgMediaCard
              key={index}
              img={caminho.img}
              title={caminho.title}
              short_description={caminho.short_description}
              onClick={() => handleClickOpen(index)}
            />
          ))}
        </Grid>

        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </main>
    </div>
  );
};

export default Caminhos;
