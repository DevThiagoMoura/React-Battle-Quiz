// src/data/questions.js

export const topics = [
  { id: 'components', title: 'Componentes' },
  { id: 'jsx', title: 'JSX' },
  { id: 'hooks', title: 'Hooks (useState / useEffect)' },
  { id: 'styles', title: 'Estilos' },
];

export const questions = {
  // ------------- COMPONENTES (10 PERGUNTAS) -------------
  components: [
    {
      id: 'comp1',
      concept: 'Componentes',
      theory:
        'Componentes são funções (ou classes) que retornam JSX e representam partes reutilizáveis da interface do app.',
      question: 'O que é um componente em React Native?',
      options: [
        'Um arquivo CSS separado',
        'Uma função que retorna JSX',
        'Um banco de dados interno do app',
        'Um tipo especial de API nativa',
      ],
      correctIndex: 1,
      codeExample: `function MeuBotao() {
  return (
    <Button title="Clique aqui" />
  );
}`,
    },
    {
      id: 'comp2',
      concept: 'Componentes',
      theory:
        'Componentes podem receber props, que são dados passados de um componente pai para um componente filho.',
      question: 'Para que servem as props em um componente?',
      options: [
        'Deixar o app mais rápido',
        'Passar dados de um componente pai para um filho',
        'Atualizar a versão do React Native',
        'Conectar com APIs externas',
      ],
      correctIndex: 1,
      codeExample: `function Saudacao(props) {
  return (
    <Text>Olá, {props.nome}!</Text>
  );
}

// Uso
<Saudacao nome="Thiago" />`,
    },
    {
      id: 'comp3',
      concept: 'Componentes',
      theory:
        'Por convenção, componentes em React e React Native começam com letra maiúscula, para diferenciá-los de tags nativas.',
      question:
        'Qual das opções segue a convenção correta de nome para um componente?',
      options: ['meuBotao', 'meubotao', 'MeuBotao', 'meu-botao'],
      correctIndex: 2,
      codeExample: `function MeuBotao() {
  return <Button title="Botão" />;
}`,
    },
    {
      id: 'comp4',
      concept: 'Componentes',
      theory:
        'Podemos reutilizar o mesmo componente várias vezes na tela, mudando apenas as props que ele recebe.',
      question:
        'O que acontece quando reutilizamos o mesmo componente em vários lugares da tela?',
      options: [
        'O app quebra',
        'O componente é reaproveitado com dados diferentes via props',
        'O React clona o código fonte',
        'Nada, não é possível reutilizar componentes',
      ],
      correctIndex: 1,
      codeExample: `<ProdutoCard nome="Mouse" preco={99.9} />
<ProdutoCard nome="Teclado" preco={199.9} />`,
    },
    {
      id: 'comp5',
      concept: 'Componentes',
      theory:
        'Podemos criar componentes de apresentação (focados em layout) e componentes de lógica (que controlam estado e regras).',
      question:
        'Um componente que só recebe props e renderiza UI, sem estado interno, costuma ser chamado de:',
      options: [
        'Componente de banco de dados',
        'Componente de classe',
        'Componente de apresentação (ou “dumb component”)',
        'Componente nativo',
      ],
      correctIndex: 2,
      codeExample: `function Titulo({ texto }) {
  return <Text style={{ fontSize: 24 }}>{texto}</Text>;
}`,
    },
    {
      id: 'comp6',
      concept: 'Componentes',
      theory:
        'Podemos separar a lógica de exibição em componentes menores, deixando a tela principal mais simples de entender.',
      question:
        'Qual é a principal vantagem de quebrar a tela em componentes menores?',
      options: [
        'Aumentar o tamanho do bundle',
        'Dificultar a leitura do código',
        'Facilitar a manutenção e a reutilização',
        'Impedir o uso de hooks',
      ],
      correctIndex: 2,
      codeExample: `function PerfilUsuario() {
  return (
    <View>
      <Avatar />
      <NomeUsuario />
      <BotaoSair />
    </View>
  );
}`,
    },
    {
      id: 'comp7',
      concept: 'Componentes',
      theory:
        'Podemos passar funções como props para que o componente filho avise o componente pai sobre alguma ação.',
      question:
        'O que acontece quando passamos uma função como prop para um componente?',
      options: [
        'O componente filho consegue chamar essa função',
        'O React Native bloqueia a renderização',
        'A função vira um componente',
        'Nada, funções não podem ser props',
      ],
      correctIndex: 0,
      codeExample: `function BotaoLike({ onLike }) {
  return <Button title="Curtir" onPress={onLike} />;
}`,
    },
    {
      id: 'comp8',
      concept: 'Componentes',
      theory:
        'Props são somente leitura. Para mudar dados, usamos estado (useState) dentro do componente.',
      question: 'Por que não devemos alterar diretamente uma prop dentro do componente?',
      options: [
        'Porque o React não permite declarar props',
        'Porque props são somente leitura e vêm do componente pai',
        'Porque props precisam ser números',
        'Porque props só podem ser alteradas no banco de dados',
      ],
      correctIndex: 1,
      codeExample: `function Exemplo({ valor }) {
  // errado: valor = 10;
  return <Text>{valor}</Text>;
}`,
    },
    {
      id: 'comp9',
      concept: 'Componentes',
      theory:
        'Componentes podem ser organizados em pastas como /screens e /components para separar telas de partes reutilizáveis.',
      question:
        'Por que é comum separar arquivos em pastas como screens/ e components/?',
      options: [
        'Por exigência do Expo',
        'Para dificultar o import',
        'Para organizar melhor telas e componentes reutilizáveis',
        'Para evitar o uso de hooks',
      ],
      correctIndex: 2,
      codeExample: `// Tela em src/screens/HomeScreen.jsx
// Componente reutilizável em src/components/CodeBlock.jsx`,
    },
    {
      id: 'comp10',
      concept: 'Componentes',
      theory:
        'Um componente deve, idealmente, ter uma responsabilidade clara. Isso ajuda a manter o código mais fácil de testar e evoluir.',
      question:
        'O que significa dizer que um componente deve ter “uma responsabilidade clara”?',
      options: [
        'Que ele deve ter muitos estilos diferentes',
        'Que ele deve cuidar de várias partes do app ao mesmo tempo',
        'Que ele deve focar em uma função específica (ex: mostrar um card)',
        'Que ele não pode receber props',
      ],
      correctIndex: 2,
      codeExample: `function CardProduto({ nome, preco }) {
  return (
    <View>
      <Text>{nome}</Text>
      <Text>R$ {preco}</Text>
    </View>
  );
}`,
    },
  ],

  // ------------- JSX (10 PERGUNTAS) -------------
  jsx: [
    {
      id: 'jsx1',
      concept: 'JSX',
      theory:
        'JSX é uma sintaxe que parece HTML, mas é JavaScript. É o que usamos para descrever a interface em React Native.',
      question: 'O que é JSX em React Native?',
      options: [
        'Uma linguagem de banco de dados',
        'Uma biblioteca de estilos',
        'Uma sintaxe que permite escrever UI usando JavaScript',
        'Um componente nativo do Android',
      ],
      correctIndex: 2,
      codeExample: `function Tela() {
  return (
    <View>
      <Text>Olá, JSX!</Text>
    </View>
  );
}`,
    },
    {
      id: 'jsx2',
      concept: 'JSX',
      theory:
        'Dentro do JSX podemos interpolar valores JavaScript usando chaves {}.',
      question:
        'Como exibimos o valor de uma variável count dentro de um Text usando JSX?',
      options: [
        '<Text>count</Text>',
        '<Text>{{count}}</Text>',
        '<Text>{count}</Text>',
        '<Text>count()</Text>',
      ],
      correctIndex: 2,
      codeExample: `const count = 5;
<Text>Valor: {count}</Text>`,
    },
    {
      id: 'jsx3',
      concept: 'JSX',
      theory:
        'No JSX, cada elemento precisa ter uma tag de fechamento, mesmo componentes como View e Text.',
      question: 'Qual das opções abaixo é um JSX válido?',
      options: [
        '<Text>Olá',
        '<Text>Olá</Text>',
        '<Text />Olá</Text>',
        '<Text>Olá</Text><View>',
      ],
      correctIndex: 1,
      codeExample: `<View>
  <Text>Olá</Text>
</View>`,
    },
    {
      id: 'jsx4',
      concept: 'JSX',
      theory:
        'Quando precisamos retornar múltiplos elementos, eles devem estar dentro de um único contêiner, como View ou Fragment.',
      question:
        'O que acontece se tentarmos retornar dois componentes irmãos sem um contêiner?',
      options: [
        'O React Native junta automaticamente em uma View',
        'O código não compila, é preciso um contêiner',
        'O app fecha sozinho',
        'Nada, isso é permitido',
      ],
      correctIndex: 1,
      codeExample: `// Errado:
// return (
//   <Text>Um</Text>
//   <Text>Dois</Text>
// );

// Certo:
return (
  <View>
    <Text>Um</Text>
    <Text>Dois</Text>
  </View>
);`,
    },
    {
      id: 'jsx5',
      concept: 'JSX',
      theory:
        'Podemos usar condicionais dentro do JSX usando operadores como && e ternário (cond ? A : B).',
      question:
        'Qual é uma forma comum de renderizar algo condicionalmente no JSX?',
      options: [
        'if (cond) dentro do return',
        'Usar while dentro do JSX',
        'Usar cond && <Text>...</Text>',
        'Não é possível condicional no JSX',
      ],
      correctIndex: 2,
      codeExample: `const logado = true;
return (
  <View>
    {logado && <Text>Bem-vindo!</Text>}
  </View>
);`,
    },
    {
      id: 'jsx6',
      concept: 'JSX',
      theory:
        'Listas em JSX geralmente são renderizadas com map, retornando um elemento para cada item do array.',
      question:
        'Qual é o método de array mais usado para renderizar listas em JSX?',
      options: ['forEach', 'map', 'filter', 'reduce'],
      correctIndex: 1,
      codeExample: `const nomes = ['Ana', 'Bruno'];
return (
  <View>
    {nomes.map((n) => (
      <Text key={n}>{n}</Text>
    ))}
  </View>
);`,
    },
    {
      id: 'jsx7',
      concept: 'JSX',
      theory:
        'Ao renderizar listas, é importante passar uma prop key única para cada item, ajudando o React a identificar mudanças.',
      question: 'Por que a prop key é importante ao renderizar listas em JSX?',
      options: [
        'Para estilizar o componente',
        'Para habilitar o useState',
        'Para o React identificar cada item de forma única',
        'Para acessar APIs nativas',
      ],
      correctIndex: 2,
      codeExample: `items.map((item) => (
  <Text key={item.id}>{item.nome}</Text>
));`,
    },
    {
      id: 'jsx8',
      concept: 'JSX',
      theory:
        'Em JSX, atributos como class mudam de nome. Por exemplo, usamos style em vez de class.',
      question:
        'Qual atributo usamos para aplicar estilos inline em um componente?',
      options: ['class', 'css', 'style', 'styles'],
      correctIndex: 2,
      codeExample: `<Text style={{ color: 'red' }}>Em vermelho</Text>`,
    },
    {
      id: 'jsx9',
      concept: 'JSX',
      theory:
        'JSX é convertido em chamadas JavaScript (como React.createElement), por isso ele sempre precisa estar dentro de um contexto JavaScript válido.',
      question:
        'Por que dizemos que JSX não é HTML, mesmo parecendo HTML?',
      options: [
        'Porque roda no navegador',
        'Porque é apenas um atalho para chamadas JavaScript',
        'Porque não aceita estilos',
        'Porque é compilado em CSS',
      ],
      correctIndex: 1,
      codeExample: `// JSX:
<View><Text>Olá</Text></View>

// Depois da compilação é convertido para chamadas de função em JS`,
    },
    {
      id: 'jsx10',
      concept: 'JSX',
      theory:
        'Podemos extrair trechos de JSX em componentes separados para manter o código mais organizado.',
      question:
        'Qual é a vantagem de extrair um trecho de JSX grande para um componente próprio?',
      options: [
        'Deixar o JSX quebrado',
        'Impedir reuso',
        'Reutilizar esse trecho em outras partes e organizar melhor o código',
        'Impedir o uso de props',
      ],
      correctIndex: 2,
      codeExample: `function CardUsuario({ nome }) {
  return (
    <View>
      <Text>{nome}</Text>
    </View>
  );
}`,
    },
  ],

  // ------------- HOOKS (10 PERGUNTAS) -------------
  hooks: [
    {
      id: 'hook1',
      concept: 'Hooks',
      theory:
        'useState é um Hook que permite adicionar estado em componentes de função.',
      question: 'O que o useState permite fazer?',
      options: [
        'Criar novas telas',
        'Adicionar estado em componentes de função',
        'Estilizar componentes com CSS',
        'Conectar com banco de dados',
      ],
      correctIndex: 1,
      codeExample: `const [contador, setContador] = useState(0);`,
    },
    {
      id: 'hook2',
      concept: 'Hooks',
      theory:
        'O useEffect permite executar efeitos colaterais quando o componente renderiza ou quando valores específicos mudam.',
      question:
        'Qual é um uso comum do useEffect em React Native?',
      options: [
        'Declarar estilos globais',
        'Executar código após a renderização, como buscar dados ou configurar listeners',
        'Criar componentes de classe',
        'Alterar o package.json',
      ],
      correctIndex: 1,
      codeExample: `useEffect(() => {
  console.log('Componente montou ou valor mudou');
}, []);`,
    },
    {
      id: 'hook3',
      concept: 'Hooks',
      theory:
        'No useState, o array retornado segue a convenção [valor, setValor]. O segundo item é uma função que atualiza o estado.',
      question:
        'No código const [nome, setNome] = useState("Ana"), o que é setNome?',
      options: [
        'Uma variável com o valor do estado',
        'Uma função que atualiza o valor de nome',
        'Uma constante imutável',
        'Uma API nativa',
      ],
      correctIndex: 1,
      codeExample: `const [nome, setNome] = useState('Ana');`,
    },
    {
      id: 'hook4',
      concept: 'Hooks',
      theory:
        'O array de dependências do useEffect define quando o efeito será executado novamente.',
      question:
        'O que significa passar um array vazio [] como segundo argumento do useEffect?',
      options: [
        'O efeito nunca roda',
        'O efeito roda a cada clique',
        'O efeito roda apenas uma vez, quando o componente monta',
        'O efeito roda a cada atualização de qualquer estado',
      ],
      correctIndex: 2,
      codeExample: `useEffect(() => {
  console.log('Só na primeira montagem');
}, []);`,
    },
    {
      id: 'hook5',
      concept: 'Hooks',
      theory:
        'Podemos ter vários useState no mesmo componente, cada um controlando um pedaço diferente do estado.',
      question:
        'É permitido ter mais de um useState no mesmo componente?',
      options: [
        'Não, só um por componente',
        'Sim, podemos ter vários, cada um para um dado diferente',
        'Sim, mas só se forem números',
        'Só em componentes de classe',
      ],
      correctIndex: 1,
      codeExample: `const [nome, setNome] = useState('');
const [idade, setIdade] = useState(0);`,
    },
    {
      id: 'hook6',
      concept: 'Hooks',
      theory:
        'Quando um estado muda, o componente é re-renderizado, atualizando a interface para refletir o novo valor.',
      question:
        'O que acontece quando chamamos a função de set de um useState (por exemplo, setContador)?',
      options: [
        'Nada, é necessário reiniciar o app',
        'O valor muda mas a interface não',
        'O React atualiza o estado e re-renderiza o componente',
        'O hook é removido',
      ],
      correctIndex: 2,
      codeExample: `setContador(contador + 1);`,
    },
    {
      id: 'hook7',
      concept: 'Hooks',
      theory:
        'É importante respeitar as regras dos hooks: só chamar hooks no topo do componente e nunca dentro de condicionais ou loops.',
      question:
        'Por que não devemos chamar useState dentro de um if?',
      options: [
        'Porque o JavaScript não permite if',
        'Porque o React precisa que a ordem dos hooks seja sempre a mesma em cada renderização',
        'Porque useState só pode ser usado em classes',
        'Porque if é assíncrono',
      ],
      correctIndex: 1,
      codeExample: `// ERRADO:
// if (condicao) {
//   const [x, setX] = useState(0);
// }`,
    },
    {
      id: 'hook8',
      concept: 'Hooks',
      theory:
        'Podemos usar useEffect para sincronizar o estado com APIs nativas, como Vibration, ou com APIs externas.',
      question:
        'Qual das opções é um bom exemplo de uso do useEffect?',
      options: [
        'Mudar a cor de um botão dentro do return',
        'Configurar um listener de evento e limpar na desmontagem',
        'Criar novos arquivos no projeto',
        'Alterar o package-lock manualmente',
      ],
      correctIndex: 1,
      codeExample: `useEffect(() => {
  const sub = Keyboard.addListener('keyboardDidShow', () => {
    console.log('Teclado abriu');
  });

  return () => {
    sub.remove();
  };
}, []);`,
    },
    {
      id: 'hook9',
      concept: 'Hooks',
      theory:
        'O useRef pode guardar valores mutáveis que não disparam re-render e também refs para elementos visuais.',
      question:
        'Qual é uma característica importante do useRef em relação ao useState?',
      options: [
        'useRef dispara re-render sempre',
        'useRef não persiste entre renderizações',
        'useRef mantém o valor entre renderizações sem disparar re-render',
        'useRef só pode ser usado em classes',
      ],
      correctIndex: 2,
      codeExample: `const inputRef = useRef(null);`,
    },
    {
      id: 'hook10',
      concept: 'Hooks',
      theory:
        'Combinar useState, useEffect e useRef permite criar componentes interativos, animados e conectados a APIs.',
      question:
        'O que acontece quando combinamos useState + useEffect em um componente?',
      options: [
        'Bloqueamos o ciclo de vida do React',
        'Podemos reagir a mudanças de estado executando efeitos colaterais',
        'Removemos a necessidade de componentes',
        'Impedimos o uso de JSX',
      ],
      correctIndex: 1,
      codeExample: `const [ativo, setAtivo] = useState(false);

useEffect(() => {
  if (ativo) {
    console.log('Timer ligado');
  }
}, [ativo]);`,
    },
  ],

  // ------------- ESTILOS (10 PERGUNTAS) -------------
  styles: [
    {
      id: 'style1',
      concept: 'Estilos',
      theory:
        'Em React Native usamos objetos JavaScript para definir estilos, muitas vezes com StyleSheet.create.',
      question: 'Como geralmente definimos estilos em React Native?',
      options: [
        'Usando arquivos .css externos',
        'Usando objetos JavaScript e StyleSheet.create',
        'Usando tags <style> dentro do JSX',
        'Não é possível estilizar componentes',
      ],
      correctIndex: 1,
      codeExample: `const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    color: '#fff',
  },
});`,
    },
    {
      id: 'style2',
      concept: 'Estilos',
      theory:
        'A prop style recebe um objeto com propriedades parecidas com CSS, mas em camelCase (backgroundColor, fontSize...).',
      question:
        'Qual é a forma correta de definir a cor de fundo em um estilo?',
      options: [
        "background-color: 'red'",
        "bgColor: 'red'",
        "backgroundColor: 'red'",
        "background_color: 'red'",
      ],
      correctIndex: 2,
      codeExample: `<View style={{ backgroundColor: 'red' }} />`,
    },
    {
      id: 'style3',
      concept: 'Estilos',
      theory:
        'Podemos combinar múltiplos estilos passando um array para a prop style.',
      question:
        'Como aplicamos dois estilos no mesmo componente em React Native?',
      options: [
        'style={estilo1 + estilo2}',
        'style="estilo1 estilo2"',
        'style={[estilo1, estilo2]}',
        'style={{estilo1, estilo2}}',
      ],
      correctIndex: 2,
      codeExample: `<Text style={[styles.base, styles.destaque]}>Olá</Text>`,
    },
    {
      id: 'style4',
      concept: 'Estilos',
      theory:
        'Flexbox é o sistema de layout padrão do React Native, usado para alinhar e distribuir elementos na tela.',
      question:
        'Qual propriedade usamos para definir a direção principal do layout em Flexbox?',
      options: ['justifyContent', 'alignItems', 'flexDirection', 'flexWrap'],
      correctIndex: 2,
      codeExample: `const styles = StyleSheet.create({
  linha: {
    flexDirection: 'row',
  },
});`,
    },
    {
      id: 'style5',
      concept: 'Estilos',
      theory:
        'justifyContent alinha os itens no eixo principal; alignItems alinha no eixo secundário.',
      question:
        'Em um container com flexDirection: "row", o justifyContent alinha os itens em qual eixo?',
      options: [
        'Vertical (coluna)',
        'Horizontal (linha)',
        'Diagonal',
        'Nenhum, só estiliza texto',
      ],
      correctIndex: 1,
      codeExample: `const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});`,
    },
    {
      id: 'style6',
      concept: 'Estilos',
      theory:
        'O estilo pode ser dinamicamente alterado com base em estado, usando condicionais dentro do style.',
      question:
        'Como podemos alterar a cor de um botão quando ele está ativo, usando estado?',
      options: [
        'Mudando o package.json',
        'Usando if fora do componente',
        'Usando uma expressão ternária dentro do style',
        'Não é possível alterar estilos dinamicamente',
      ],
      correctIndex: 2,
      codeExample: `const ativo = true;
<View style={{ backgroundColor: ativo ? 'green' : 'gray' }} />`,
    },
    {
      id: 'style7',
      concept: 'Estilos',
      theory:
        'StyleSheet.create ajuda a validar e otimizar estilos, evitando recriar objetos a cada renderização.',
      question:
        'Qual é uma vantagem de usar StyleSheet.create em vez de objetos literais soltos?',
      options: [
        'Impedir o uso de Flexbox',
        'Forçar o uso de classes',
        'Organizar estilos e permitir validação/otimização pelo React Native',
        'Evitar que o app rode em Android',
      ],
      correctIndex: 2,
      codeExample: `const styles = StyleSheet.create({
  container: { flex: 1 },
});`,
    },
    {
      id: 'style8',
      concept: 'Estilos',
      theory:
        'Podemos centralizar completamente um conteúdo usando justifyContent e alignItems com "center".',
      question:
        'Qual combinação centraliza totalmente um conteúdo em um container flex?',
      options: [
        'justifyContent: "center" apenas',
        'alignItems: "center" apenas',
        'justifyContent: "center" e alignItems: "center"',
        'flexDirection: "center"',
      ],
      correctIndex: 2,
      codeExample: `const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});`,
    },
    {
      id: 'style9',
      concept: 'Estilos',
      theory:
        'É comum definir uma paleta de cores e reaproveitar os mesmos estilos ao longo do app.',
      question:
        'Por que é uma boa prática reaproveitar estilos em vez de criar tudo inline?',
      options: [
        'Para aumentar o tamanho do código',
        'Para dificultar a leitura',
        'Para manter consistência visual e facilitar manutenção',
        'Para impedir o uso de hooks',
      ],
      correctIndex: 2,
      codeExample: `const colors = {
  primary: '#1976d2',
  background: '#121212',
};`,
    },
    {
      id: 'style10',
      concept: 'Estilos',
      theory:
        'Estilos bem organizados ajudam a separar responsabilidades: o componente cuida da lógica, o StyleSheet cuida do visual.',
      question:
        'O que acontece quando misturamos muita lógica e estilo no mesmo arquivo sem organização?',
      options: [
        'O app deixa de compilar',
        'O código fica mais difícil de manter e entender',
        'O React Native remove os estilos automaticamente',
        'O useState para de funcionar',
      ],
      correctIndex: 1,
      codeExample: `// Boa prática: manter um bloco de estilos no final do arquivo
const styles = StyleSheet.create({
  // ...
});`,
    },
  ],
};
