// --- ELEMENTOS DO HTML ---
const startContainer = document.getElementById('quiz-start');
const questionContainer = document.getElementById('quiz-question-area');
const resultsContainer = document.getElementById('quiz-results');

const questionTextEl = document.getElementById('question-text');
const answerButtonsEl = document.getElementById('answer-buttons');

const resultNameEl = document.getElementById('result-character-name');
const resultImageEl = document.getElementById('result-character-image');
const resultDescriptionEl = document.getElementById('result-character-description');

// --- VARIÁVEIS DO QUIZ ---
let currentQuestionIndex;
let scores;

// --- DADOS DO QUIZ (PERGUNTAS E PERSONAGENS) ---
const characters = {
    JESSICA: {
        name: 'Jéssica (de "A Caixa de Jéssica")',
        image: 'https://cdn.awsli.com.br/600x450/121/121713/produto/16641883/276e095697.jpg',
        description: 'Você é uma pessoa criativa, cheia de imaginação e que vê o mundo de uma forma única. Para você, uma simples caixa pode conter um universo inteiro de amizade e aventura!'
    },
    TOM: {
        name: 'Tom (de "Tom")',
        image: 'https://paulinas.vteximg.com.br/arquivos/ids/176008-1000-1000/9788535630654.jpg',
        description: 'Você é corajoso, curioso e não tem medo de enfrentar o desconhecido para proteger quem ama. Você entende que a verdadeira força vem de dentro e que todos temos um herói interior.'
    },
    SEBASTIAO: {
        name: 'Sebastião (de "Sebastião")',
        image: 'https://a-static.mlcdn.com.br/450x450/livro-sebastiao/magazineluiza/225330300/49d2112e4d07d6a59518a4d46c827361.jpg',
        description: 'Você é um sonhador com uma forte conexão com a natureza e a arte. Você encontra beleza nas coisas simples e tem o dom de transformar o mundo ao seu redor com sua sensibilidade e talento.'
    },
    OBAX: {
        name: 'Obax (de "Obax")',
        image: 'https://m.media-amazon.com/images/I/91038P6e27L._AC_UF1000,1000_QL80_.jpg',
        description: 'Você tem um espírito aventureiro e uma imaginação sem limites! Adora contar histórias e acredita que a magia pode ser encontrada em qualquer lugar, mesmo que os outros duvidem.'
    },
    MALVINA: {
        name: 'Malvina (de "Malvina")',
        image: 'https://quindim.com.br/wp-content/uploads/9788536821603-1-scaled.jpg',
        description: 'Você é uma pessoa inventiva e prática, sempre buscando soluções criativas para os problemas. Sua mente não para de criar engenhocas para tornar a vida mais fácil e divertida!'
    },
    SOFIA: {
        name: 'Dona Sofia (de "A Caligrafia de Dona Sofia")',
        image: 'https://m.media-amazon.com/images/I/815E76w+QzL._AC_UF1000,1000_QL80_.jpg',
        description: 'Você tem uma alma gentil e generosa, e acredita no poder das palavras para conectar pessoas. Para você, compartilhar um poema é como dar uma flor, um gesto que embeleza o mundo.'
    },
    MARA: {
        name: 'Mara (de "Orelhas de Mariposa")',
        image: 'https://www.saraiva.com.br/orelhas-de-mariposa/p',
        description: 'Você é uma pessoa resiliente e poética, capaz de transformar o que os outros veem como \'diferente\' em algo belo e único. Você sabe que a verdadeira beleza está em se aceitar como é.'
    }
};

const questions = [
    {
        question: 'Um amigo te dá uma caixa vazia. O que você faz?',
        answers: [
            { text: 'Imagino mil mundos dentro dela!', character: 'JESSICA' },
            { text: 'Uso como peça para uma nova invenção!', character: 'MALVINA' },
            { text: 'Decoro com flores e escrevo um poema nela.', character: 'SOFIA' },
            { text: 'Digo que é uma caixa mágica que veio da lua!', character: 'OBAX' }
        ]
    },
    {
        question: 'Qual é o seu lugar ideal para passar a tarde?',
        answers: [
            { text: 'Explorando um lugar novo e misterioso.', character: 'TOM' },
            { text: 'Na praia, ouvindo o mar e colecionando conchas.', character: 'SEBASTIAO' },
            { text: 'Em uma biblioteca, cercado de livros e histórias.', character: 'SOFIA' },
            { text: 'No meu quarto, desenhando e criando.', character: 'JESSICA' }
        ]
    },
    {
        question: 'Você encontra um desafio no seu caminho. Como você reage?',
        answers: [
            { text: 'Enfrento de cabeça erguida, com coragem.', character: 'TOM' },
            { text: 'Penso em uma solução criativa e inesperada.', character: 'JESSICA' },
            { text: 'Observo, sinto e busco inspiração na natureza.', character: 'SEBASTIAO' },
            { text: 'Vejo como uma grande aventura e conto para todos depois.', character: 'OBAX' }
        ]
    },
    {
        question: 'Se você pudesse ter um superpoder, qual seria?',
        answers: [
            { text: 'A capacidade de construir qualquer coisa.', character: 'MALVINA' },
            { text: 'O poder de fazer florescer poesia por onde passo.', character: 'SOFIA' },
            { text: 'Transformar minhas maiores inseguranças em algo belo.', character: 'MARA' },
            { text: 'Viajar para os lugares mais fantásticos da minha imaginação.', character: 'OBAX' }
        ]
    },
    {
        question: 'Alguém faz uma brincadeira sobre sua aparência. O que você faz?',
        answers: [
            { text: 'Crio uma resposta poética que os deixa sem palavras.', character: 'MARA' },
            { text: 'Defendo a mim mesmo e a quem eu amo com bravura.', character: 'TOM' },
            { text: 'Ignoro, pois sei que meu valor está no que sou por dentro.', character: 'JESSICA' },
            { text: 'Uso isso como inspiração para criar algo novo.', character: 'MALVINA' }
        ]
    }
];

// --- FUNÇÕES DO QUIZ ---

function startQuiz() {
    startContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    
    currentQuestionIndex = 0;
    // Inicia a pontuação para todos os personagens
    scores = { JESSICA: 0, TOM: 0, SEBASTIAO: 0, OBAX: 0, MALVINA: 0, SOFIA: 0, MARA: 0 };
    
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionTextEl.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        // Adiciona a classe 'btn' para estilização geral se necessário
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.character));
        answerButtonsEl.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function selectAnswer(character) {
    scores[character]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    // Lógica para encontrar o personagem com a maior pontuação
    let finalCharacter = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    const resultData = characters[finalCharacter];
    resultNameEl.innerText = resultData.name;
    resultImageEl.src = resultData.image;
    resultDescriptionEl.innerText = resultData.description;
}

function restartQuiz() {
    resultsContainer.classList.add('hidden');
    startContainer.classList.remove('hidden');
}