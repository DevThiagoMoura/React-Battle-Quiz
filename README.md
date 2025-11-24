React Battle Quiz

Aplicativo educacional desenvolvido em React Native com o objetivo de ensinar iniciantes a entender os principais conceitos da tecnologia por meio de explicações teóricas e perguntas interativas em formato de quiz e batalha entre dois jogadores.

Visão Geral

O React Battle Quiz possui dois modos principais: o modo Aprender e o modo Batalha.

No modo Aprender, o usuário escolhe um tópico (Componentes, JSX, Hooks ou Estilos), lê uma explicação rápida e responde a perguntas relacionadas. Ao acertar pelo menos 7 questões, o tópico é marcado como concluído.

No modo Batalha, dois jogadores se enfrentam alternando turnos. Existem duas formas de jogar:

React Geral: 20 perguntas sorteadas automaticamente, sendo 5 de cada um dos quatro tópicos.

Por Tópicos: o usuário escolhe entre 1 e 3 tópicos para batalhar.

O app registra o progresso dos tópicos concluídos para que o usuário acompanhe sua evolução.

Funcionalidades

Explicações teóricas sobre React Native.

Quiz com respostas corretas e incorretas.

Feedback visual e vibração em caso de erro.

Alternância de turnos entre os jogadores.

Sistema de progresso usando Context API.

Modo React Geral com perguntas sorteadas.

Modo de Batalha por tópicos.

Interface minimalista e responsiva.

Componentização de elementos reutilizáveis.

Estrutura de Pastas
react-battle-quiz/
App.js
package.json
babel.config.js
.gitignore

src/
  components/
    CodeBlock.jsx
    OptionButton.jsx

  context/
    ProgressContext.jsx

  data/
    questions.js

  screens/
    BattleQuizScreen.jsx
    BattleResultScreen.jsx
    BattleSetupScreen.jsx
    HomeScreen.jsx
    LearnIntroScreen.jsx
    LearnTopicsScreen.jsx
    QuizScreen.jsx
    ResultScreen.jsx

Instalação

Clone o repositório:

git clone https://github.com/SEU_USUARIO/React-Battle-Quiz.git
cd React-Battle-Quiz


Instale as dependências:

npm install


Instale o React Navigation:

npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack


Execute o app:

npm start


Abra no aplicativo Expo Go ou no navegador.

Tecnologias Utilizadas

React Native (Expo)

React Navigation

JavaScript ES6+

Context API

Hooks (useState, useEffect, useMemo, useContext)

Animated API

Vibration API

Como Funciona
Modo Aprender

O usuário seleciona um tópico, lê a explicação e responde um quiz. Ao obter 7 ou mais acertos, o tópico é marcado como concluído, e isso aparece no app sempre que retornar à lista de tópicos.

Modo Batalha

Dois jogadores alternam as respostas. O modo React Geral sorteia 20 perguntas no total, sendo 5 de cada tópico. O modo por tópicos permite escolher entre 1 e 3 tópicos, exibindo também quais já foram concluídos.

Objetivo do Projeto

O aplicativo foi projetado para fins educacionais, ideal para apresentações acadêmicas e demonstrações sobre tópicos como:

Componentização

Navegação

Hooks

APIs Nativas

Animações

Gerenciamento de estado com Context API

Boas práticas de organização

Autores

Thiago Moura 

Daniely Bernardino

