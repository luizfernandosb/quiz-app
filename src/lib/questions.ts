interface QuestionsProps {
  question: string;
  options: Array<string>;
  answer: string;
}

export const allQuestions: QuestionsProps[] = [
  {
    question: "Qual linguagem é usada para desenvolvimento frontend na web?",
    options: ["Python", "JavaScript", "C", "Java"],
    answer: "JavaScript",
  },
  {
    question: "O que significa a sigla 'HTML'?",
    options: ["HyperText Markup Language", "HighText Markup Language", "HyperText Markdown Language", "None of the above"],
    answer: "HyperText Markup Language",
  },
  {
    question: "Qual é a principal função do CSS?",
    options: ["Estruturar conteúdo", "Estilizar páginas", "Adicionar interatividade", "Gerenciar banco de dados"],
    answer: "Estilizar páginas",
  },
  {
    question: "O que é um 'callback' em JavaScript?",
    options: [
      "Uma função que é chamada após o término de outra função",
      "Uma variável",
      "Uma estrutura de controle de fluxo",
      "Um tipo de loop"
    ],
    answer: "Uma função que é chamada após o término de outra função",
  },
  {
    question: "Qual a diferença entre 'var', 'let' e 'const' em JavaScript?",
    options: [
      "Atribuição de valor",
      "Escopo e mutabilidade",
      "Tipo de dado",
      "Declaração de funções"
    ],
    answer: "Escopo e mutabilidade",
  },
  {
    question: "O que significa 'API' em tecnologia?",
    options: ["Application Programming Interface", "Application Process Interface", "Access Protocol Interface", "Application Protocol Interface"],
    answer: "Application Programming Interface",
  },
  {
    question: "Qual linguagem é utilizada no desenvolvimento de aplicativos Android?",
    options: ["Kotlin", "Swift", "Java", "Objective-C"],
    answer: "Kotlin",
  },
  {
    question: "O que é o DOM (Document Object Model)?",
    options: [
      "Modelo de dados da interface de usuário",
      "Modelo de gestão de banco de dados",
      "Modelo de páginas HTML",
      "Modelo de configuração de servidores"
    ],
    answer: "Modelo de dados da interface de usuário",
  },
  {
    question: "O que é um framework em programação?",
    options: [
      "Uma ferramenta para gerenciar banco de dados",
      "Uma biblioteca de funções reutilizáveis",
      "Um conjunto de regras para escrever código",
      "Uma estrutura para desenvolver sistemas operacionais"
    ],
    answer: "Uma biblioteca de funções reutilizáveis",
  },
  {
    question: "O que é o Git?",
    options: [
      "Um editor de código",
      "Um sistema de controle de versão",
      "Uma linguagem de programação",
      "Uma plataforma de hospedagem de código"
    ],
    answer: "Um sistema de controle de versão",
  },
  {
    question: "O que significa 'SQL'?",
    options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "Simple Query Loop"],
    answer: "Structured Query Language",
  },
  {
    question: "Qual é o propósito do método 'map()' em JavaScript?",
    options: [
      "Alterar os valores de um array",
      "Criar um novo array com base no original",
      "Remover elementos de um array",
      "Ordenar um array"
    ],
    answer: "Criar um novo array com base no original",
  },
  {
    question: "O que é o Node.js?",
    options: [
      "Um sistema de gerenciamento de pacotes",
      "Uma linguagem de programação",
      "Uma plataforma de execução JavaScript no servidor",
      "Uma ferramenta de compilação"
    ],
    answer: "Uma plataforma de execução JavaScript no servidor",
  },
  {
    question: "O que é o conceito de 'asynchronous programming' (programação assíncrona)?",
    options: [
      "Execução de tarefas sequenciais",
      "Execução de tarefas em paralelo, sem bloquear o fluxo",
      "Execução de tarefas apenas no final de um processo",
      "Execução de funções de maneira síncrona"
    ],
    answer: "Execução de tarefas em paralelo, sem bloquear o fluxo",
  },
  {
    question: "O que é o conceito de 'closure' em JavaScript?",
    options: [
      "Função dentro de uma função que tem acesso às variáveis da função externa",
      "Função que não pode ser modificada",
      "Função que retorna um valor",
      "Função que não pode ser invocada diretamente"
    ],
    answer: "Função dentro de uma função que tem acesso às variáveis da função externa",
  },
  {
    question: "Qual comando é utilizado para importar um módulo em JavaScript?",
    options: ["import", "require", "include", "using"],
    answer: "import",
  },
  {
    question: "Qual das alternativas abaixo é uma linguagem de programação orientada a objetos?",
    options: ["Java", "HTML", "CSS", "SQL"],
    answer: "Java",
  },
  {
    question: "O que significa o termo 'full-stack developer'?",
    options: [
      "Desenvolvedor que trabalha com código e design",
      "Desenvolvedor que trabalha tanto no frontend quanto no backend",
      "Desenvolvedor que só trabalha no backend",
      "Desenvolvedor especializado em mobile"
    ],
    answer: "Desenvolvedor que trabalha tanto no frontend quanto no backend",
  },
  {
    question: "Qual comando no terminal Git cria um novo repositório?",
    options: ["git init", "git start", "git create", "git new"],
    answer: "git init",
  },
  {
    question: "O que significa a sigla 'CSS'?",
    options: [
      "Cascading Style Sheets",
      "Common Style Sheets",
      "Cascading Script Sheets",
      "Common Script Sheets"
    ],
    answer: "Cascading Style Sheets",
  },
];
