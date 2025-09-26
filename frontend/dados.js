const obras = {
    jessica: {
        titulo: "A Caixa de Jéssica",
        imagem: "img/a-caixa-de-jessica.png",
        categoria: "Conto Infantil",
        sinopse: "Jéssica é uma menina com um universo particular guardado em uma simples caixa. Para os outros, são apenas objetos sem valor; para ela, são tesouros que dão sentido ao seu mundo. Quando um amigo curioso se aproxima, a história aborda a coragem de compartilhar a própria essência e a singularidade de cada um.",
        temas: ["Imaginação", "Amizade", "Individualidade", "Criatividade"],
        ilustracao: "A técnica principal é a colagem, que integra objetos do cotidiano, recortes de papel e texturas diversas aos desenhos. Os traços dos personagens são finos e delicados, e a composição visual busca dar uma dimensão tátil e afetiva à narrativa."
    },
    casulos: {
        titulo: "Casulos",
        imagem: "img/casulos.jpg",
        categoria: "Conto sobre Coleções",
        sinopse: "Casimiro tem uma coleção incomum: ele guarda sentimentos dentro de caixas. A alegria, a saudade, o medo... cada emoção tem seu lugar. O livro é uma jornada sobre a forma como se organiza e se compreende o mundo interior, mostrando que todos são, de certa forma, colecionadores de emoções.",
        temas: ["Sentimentos", "Imaginação", "Coleções", "Autoconhecimento"],
        ilustracao: "A ilustração materializa os sentimentos por meio da colagem. O artista cria 'caixas' visuais com texturas, cores e formas que buscam traduzir emoções abstratas em imagens concretas, com um traço que mantém a delicadeza."
    },
    colecionadorChuvas: {
        titulo: "O Colecionador de Chuvas",
        imagem: "img/colecionador-chuvas.jpg",
        categoria: "Poesia e Natureza",
        sinopse: "Há quem colecione selos, mas o menino desta história coleciona chuvas. A que molha as plantas, a que acalma, a que traz cheiro de terra. Com grande sensibilidade, ele convida o leitor a perceber a poesia nos detalhes do cotidiano.",
        temas: ["Natureza", "Sensibilidade", "Percepção", "Poesia"],
        ilustracao: "A paleta de cores é dominada por tons de azul, cinza e sépia, criando uma atmosfera serena. As texturas aplicadas na colagem dão a impressão de umidade e movimento, como se cada página fosse uma janela em um dia chuvoso."
    },
    sofia: {
        titulo: "A Caligrafia de Dona Sofia",
        imagem: "img/dona-sofia.jpg",
        categoria: "Poesia e Cotidiano",
        sinopse: "Dona Sofia, uma professora aposentada apaixonada por poesia, decide que as palavras não devem ficar presas nos livros. Com sua caligrafia, ela espalha versos pela cidade, transformando a rotina dos moradores. Uma história que celebra o poder da literatura para colorir o mundo.",
        temas: ["Poesia", "Comunidade", "Generosidade", "A beleza das palavras"],
        ilustracao: "Nesta obra, a própria palavra se torna um elemento visual. O ilustrador integra versos caligráficos às cenas, com traços finos e elegantes que interagem com os personagens. As colagens com papéis texturizados criam um cenário que remete a um grande livro aberto."
    },
    entreNuvens: {
        titulo: "Entre Nuvens",
        imagem: "img/entre-nuvens.jpg",
        categoria: "Sonhos e Imaginação",
        sinopse: "O que aconteceria se pudéssemos tocar as nuvens? O menino desta história não apenas sonha com isso, mas leva o leitor a uma viagem etérea onde o céu e a terra se encontram. Uma narrativa sobre a leveza da infância e a força da imaginação.",
        temas: ["Sonhos", "Imaginação", "Infância", "Leveza"],
        ilustracao: "A leveza é o elemento central da ilustração. Com uma paleta suave, dominada por azuis celestes e brancos, o artista usa texturas de algodão, tecidos e papéis delicados para dar às nuvens uma aparência palpável. Os traços são soltos, transmitindo uma sensação de flutuação."
    },
    laFora: {
        titulo: "Lá Fora",
        imagem: "img/la-fora.png",
        categoria: "Conto sobre Percepção",
        sinopse: "O que existe 'lá fora' da janela? Para uma criança, o mundo é um palco de sons, cheiros e movimentos. Com texto de Andréa Taubman, este livro explora o universo de sensações e descobertas que nos cerca a cada momento.",
        temas: ["Curiosidade", "Natureza", "Som", "Exploração"],
        ilustracao: "As imagens funcionam como janelas. As colagens são energéticas, usando recortes de revistas e papéis coloridos para traduzir os sons e o movimento do mundo exterior de uma forma sinestésica."
    },
    lino: {
        titulo: "Lino",
        imagem: "img/lino.jpg",
        categoria: "Conto sobre Amizade",
        sinopse: "Lino era um porquinho de pano que morava na prateleira de uma loja, até que a menina Estrela o escolheu. O maior presente que ele recebeu dela, porém, foi a Lua. Uma história sobre o valor da amizade e os presentes simbólicos.",
        temas: ["Amizade", "Imaginação", "Presentes", "Sonhos"],
        ilustracao: "A atmosfera é noturna e aconchegante. A técnica de colagem utiliza tecidos macios, como o feltro, para dar a Lino uma aparência tátil. A paleta de azuis profundos e amarelos luminosos cria um contraste visual, com traços que transmitem ternura."
    },
    malvina: {
        titulo: "Malvina",
        imagem: "img/malvina.jpg",
        categoria: "Conto Inventivo",
        sinopse: "Malvina tem uma mente que não para, criando engenhocas para resolver os problemas do dia a dia. Sua maior invenção é uma máquina para 'despreocupar' sua mãe. Uma narrativa sobre criatividade e amor familiar.",
        temas: ["Criatividade", "Relação Mãe e Filha", "Invenções", "Solução de Problemas"],
        ilustracao: "A ilustração combina os traços finos dos personagens com colagens de objetos mecânicos, como parafusos e peças de relógio. A composição é dinâmica e detalhada, refletindo o processo criativo da protagonista."
    },
    manuEMila: {
        titulo: "Manu e Mila",
        imagem: "img/manu-mila.jpg",
        categoria: "Amizade e Perda",
        sinopse: "Manu e Mila eram inseparáveis, donas de uma amizade tecida com afeto. Um dia, Mila se vai. O livro aborda de forma sutil e poética o tema da perda e da saudade, mostrando como as memórias mantêm quem amamos por perto.",
        temas: ["Amizade", "Luto", "Saudade", "Memória"],
        ilustracao: "A emoção é transmitida pela materialidade. Usando colagens de tecidos, linhas e botões, o artista cria uma atmosfera nostálgica e tátil. A paleta de cores é contida, e os traços delicados dos personagens expressam uma sensação de ternura e melancolia."
    },
    margarida: {
        titulo: "Margarida",
        imagem: "img/margarida.jpg",
        categoria: "Conto de Fadas Moderno",
        sinopse: "Presa em um jardim, a flor Margarida sonha com a liberdade de conhecer o mundo. É uma fábula moderna sobre a busca pelos sonhos e a coragem de romper com o que nos prende para florescer em outros lugares.",
        temas: ["Sonhos", "Liberdade", "Coragem", "Jornada"],
        ilustracao: "A paleta de cores é vibrante e otimista. O ilustrador integra pétalas e folhas reais em suas colagens, criando uma ponte entre o mundo natural e o imaginário. Os traços são leves e fluidos, buscando representar o movimento."
    },
    mariaPeconha: {
        titulo: "Maria Peçonha",
        imagem: "img/maria-peconha.jpg",
        categoria: "Releitura de Conto de Fadas",
        sinopse: "Uma releitura de 'Branca de Neve' que apresenta a história sob a perspectiva da madrasta, explorando suas dores, sua solidão e os motivos por trás da sua obsessão pela beleza. A obra questiona os papéis de vilão e mocinha.",
        temas: ["Contos de Fadas", "Perspectiva", "Inveja", "Alteridade"],
        ilustracao: "A ilustração é densa e dramática. A paleta de cores escuras, com tons de roxo e preto, e as colagens com texturas ásperas constroem uma atmosfera psicológica. Os traços dos personagens são angulosos e expressivos, refletindo a complexidade de suas emoções."
    },
    marocaEDeolindo: {
        titulo: "Maroca e Deolindo",
        imagem: "img/maroca-deolindo.jpg",
        categoria: "Conto sobre o Cotidiano",
        sinopse: "A história do amor entre Maroca e Deolindo, que vivem em um mundo de rimas e brincadeiras. O livro celebra o afeto que floresce no dia a dia, construído com pequenos gestos de carinho e cumplicidade.",
        temas: ["Amor", "Cotidiano", "Rimas", "Brincadeira"],
        ilustracao: "As imagens são alegres e coloridas, com colagens de tecidos estampados (chita) que remetem à cultura popular. Os traços são caricatos e cheios de movimento, transmitindo a energia e o bom humor do casal."
    },
    melNaBoca: {
        titulo: "Mel na Boca",
        imagem: "img/mel-na-boca.jpg",
        categoria: "Conto Infantil",
        sinopse: "A hora da sopa pode ser um desafio, especialmente quando a avó insiste e o neto resiste. Com humor, o livro transforma essa situação em uma exploração sobre as relações de afeto, a negociação e a descoberta de novos sabores.",
        temas: ["Infância", "Família", "Alimentação", "Descoberta"],
        ilustracao: "Cores quentes e texturas são usadas para remeter ao ambiente da cozinha. O artista utiliza colagens com elementos que lembram toalhas de mesa e ingredientes. Os traços são divertidos e expressivos, capturando a dinâmica dos personagens."
    },
    obax: {
        titulo: "Obax",
        imagem: "img/obax.jpg",
        categoria: "Conto Africano",
        sinopse: "Na savana africana vive Obax, uma menina com uma imaginação muito fértil. Ela conta histórias fantásticas que os mais velhos duvidam, até que um dia decide provar que sua maior invenção — uma chuva de flores — é real.",
        temas: ["Imaginação", "Aventura", "Cultura Africana", "Persistência"],
        ilustracao: "A arte busca uma imersão na cultura africana. As colagens são ricas em tecidos com estampas étnicas e texturas que lembram a terra, com uma paleta de cores quentes e vibrantes. Os traços capturam a energia e a expressividade da protagonista."
    },
    obrigado: {
        titulo: "Obrigado",
        imagem: "img/obrigado.jpg",
        categoria: "Livro sobre Gratidão",
        sinopse: "Este livro percorre diversas situações e personagens, mostrando que a gratidão é um sentimento que conecta a todos. Uma obra que lembra como um simples 'obrigado' pode fortalecer os laços entre as pessoas.",
        temas: ["Gratidão", "Generosidade", "Conexão", "Sentimentos"],
        ilustracao: "A ilustração busca transmitir afeto. Com traços suaves e colagens delicadas, usando papéis de carta e tecidos leves, as cenas são construídas com ternura. A paleta de cores é suave, reforçando a sensação de gentileza."
    },
    peDeVento: {
        titulo: "Um Pé de Vento",
        imagem: "img/pe-de-vento.jpg",
        categoria: "Narrativa Visual",
        sinopse: "Para a menina Íris, uma árvore no quintal é sua melhor amiga, com quem compartilha segredos. Esta é uma história sobre a conexão com a natureza, a amizade silenciosa e a forma como o tempo passa.",
        temas: ["Natureza", "Amizade", "Tempo", "Contemplação"],
        ilustracao: "A natureza é integrada à obra. O ilustrador utiliza elementos orgânicos, como folhas secas e galhos, diretamente em suas colagens. Essa técnica cria uma conexão tátil e visual entre a arte e a história, com traços que evocam o movimento do vento."
    },
    sebastianaESeverina: {
        titulo: "Sebastiana e Severina",
        imagem: "img/sebastiana-severia.jpg",
        categoria: "Cultura Popular",
        sinopse: "Sebastiana do bordado e Severina da xilogravura representam duas faces da cultura do sertão nordestino. Através de suas artes, elas contam histórias, expressam sua força e revelam a beleza da simplicidade. Uma homenagem à mulher sertaneja.",
        temas: ["Cultura Nordestina", "Força Feminina", "Sertão", "Sabedoria Popular"],
        ilustracao: "A composição visual celebra o artesanato brasileiro. As colagens são repletas de tecidos de chita, rendas e texturas que imitam a xilogravura. Os traços são marcados e fortes, refletindo a identidade cultural das personagens."
    },
    seca: {
        titulo: "Seca",
        imagem: "img/seca.jpg",
        categoria: "Livro-Imagem",
        sinopse: "Sem palavras, este livro narra a jornada de uma família de retirantes que atravessa o sertão. É uma obra visual sobre resiliência, laços familiares e a esperança que persiste mesmo no cenário mais árido.",
        temas: ["Esperança", "Resiliência", "Laços Familiares", "Sertão"],
        ilustracao: "A paleta de cores terrosas — ocres, marrons e amarelos — busca transportar o leitor para o calor do sertão. A técnica de colagem utiliza papel lixado e materiais ásperos, que dão uma sensação tátil à aridez da paisagem."
    },
    tom: {
        titulo: "Tom",
        imagem: "img/tom.jpg",
        categoria: "Fábula Moderna",
        sinopse: "O irmão de Tom o observa, tentando decifrar seus mistérios. A história leva a uma jornada sobre o medo, a introspecção e a coragem necessária para compartilhar o mundo interior e proteger quem se ama.",
        temas: ["Coragem", "Medo", "Autoconfiança", "Amor"],
        ilustracao: "A dualidade da história é refletida na arte. O livro intercala páginas escuras, que representam o medo, com pontos de cores e luz, que simbolizam a coragem. Os traços são expressivos e buscam transmitir a carga emocional do personagem."
    },
    tomboloDoLombo: {
        titulo: "Tombolo do Lombo",
        imagem: "img/tombolo-lombo.jpg",
        categoria: "Conto Ritmado",
        sinopse: "Uma história cumulativa, cheia de ritmo e repetição, que brinca com os sons e as palavras, convidando o leitor a entrar na dança. A cada página, um novo personagem se junta à história.",
        temas: ["Ritmo", "Brincadeira", "Música", "Animais"],
        ilustracao: "A ilustração é muito dinâmica. Com uma paleta de cores vibrante e colagens enérgicas, os personagens parecem se movimentar nas páginas. Os traços são soltos e caricatos, transmitindo a alegria da narrativa."
    },
    vivaEuVivaTu: {
        titulo: "Viva eu, Viva tu, Viva o Rabo do Tatu",
        imagem: "img/viva-eu-viva-tu.jpg",
        categoria: "Folclore Brasileiro",
        sinopse: "Baseado em um trava-língua popular, este livro é uma celebração da cultura e da fauna brasileira, com muito humor e brincadeira. A cada virada de página, a história visual se desenrola.",
        temas: ["Folclore", "Cultura Brasileira", "Animais", "Humor"],
        ilustracao: "A técnica de colagem dá uma vida tátil aos animais do folclore. As texturas de tecidos e papéis estampados, combinadas com uma paleta de cores tropicais, criam um universo visual que remete à cultura brasileira."
    }
};