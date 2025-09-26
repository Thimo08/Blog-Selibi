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
    }
};

const questions = [
    {
        question: 'Um amigo te dá uma caixa vazia. O que você faz?',
        answers: [
            { text: 'Imagino mil mundos dentro dela!', character: 'JESSICA' },
            { text: 'Uso como um escudo para uma aventura!', character: 'TOM' },
            { text: 'Decoro com conchas e folhas.', character: 'SEBASTIAO' }
        ]
    },
    {
        question: 'Qual é o seu lugar ideal para passar a tarde?',
        answers: [
            { text: 'No meu quarto, desenhando e criando.', character: 'JESSICA' },
            { text: 'Explorando um lugar novo e misterioso.', character: 'TOM' },
            { text: 'Na praia, ouvindo o mar.', character: 'SEBASTIAO' }
        ]
    },
    {
        question: 'Você encontra um desafio no seu caminho. Como você reage?',
        answers: [
            { text: 'Penso em uma solução criativa e inesperada.', character: 'JESSICA' },
            { text: 'Enfrento de cabeça erguida, com coragem.', character: 'TOM' },
            { text: 'Observo, sinto e busco inspiração na natureza.', character: 'SEBASTIAO' }
        ]
    },
    {
        question: 'O que é mais importante para você?',
        answers: [
            { text: 'A amizade e a imaginação.', character: 'JESSICA' },
            { text: 'A coragem e a proteção.', character: 'TOM' },
            { text: 'A arte e a natureza.', character: 'SEBASTIAO' }
        ]
    }
];

// --- FUNÇÕES DO QUIZ ---

function startQuiz() {
    startContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    
    currentQuestionIndex = 0;
    scores = { JESSICA: 0, TOM: 0, SEBASTIAO: 0 };
    
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionTextEl.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
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

    let finalCharacter = 'JESSICA';
    if (scores.TOM > scores[finalCharacter]) {
        finalCharacter = 'TOM';
    }
    if (scores.SEBASTIAO > scores[finalCharacter]) {
        finalCharacter = 'SEBASTIAO';
    }

    const resultData = characters[finalCharacter];
    resultNameEl.innerText = resultData.name;
    resultImageEl.src = resultData.image;
    resultDescriptionEl.innerText = resultData.description;
}

function restartQuiz() {
    resultsContainer.classList.add('hidden');
    startContainer.classList.remove('hidden');
}