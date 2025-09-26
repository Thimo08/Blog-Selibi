const obras = {
    // OBRAS JÁ EXISTENTES
    seca: {
        titulo: "Seca",
        imagem: "https://m.media-amazon.com/images/I/81B43N7S5SL._AC_UF1000,1000_QL80_.jpg",
        categoria: "Livro-Imagem",
        sinopse: "Em uma narrativa visual sem palavras, 'Seca' retrata a jornada de uma família que enfrenta a aridez do sertão. É uma história poderosa sobre resiliência, esperança e a busca por um recomeço.",
        temas: ["Esperança e Resiliência", "Laços Familiares", "A passagem do tempo"],
        ilustracao: "André Neves utiliza uma paleta de cores terrosas e quentes para evocar o calor do cenário. As texturas, criadas com colagens, dão uma sensação tátil à leitura."
    },
    tom: {
        titulo: "Tom",
        imagem: "https://paulinas.vteximg.com.br/arquivos/ids/176008-1000-1000/9788535630654.jpg",
        categoria: "Fábula Moderna",
        sinopse: "Tom é um menino que, para defender quem ama, precisa encontrar a coragem dentro de si. Uma história sobre o medo, a bravura e a força que todos temos, mas às vezes não enxergamos.",
        temas: ["Coragem", "Medo", "Autoconfiança", "Amor"],
        ilustracao: "As ilustrações alternam entre o escuro, representando o medo, e pontos de luz e cor, que simbolizam a coragem crescente do personagem."
    },
    jessica: {
        titulo: "A Caixa de Jéssica",
        imagem: "https://cdn.awsli.com.br/600x450/121/121713/produto/16641883/276e095697.jpg",
        categoria: "Conto Infantil",
        sinopse: "Jéssica guarda em sua caixa coisas que ninguém entende, mas que para ela fazem todo o sentido. Um livro sobre imaginação, amizade e como o que temos por dentro é o mais importante.",
        temas: ["Imaginação", "Amizade", "Individualidade", "Criatividade"],
        ilustracao: "A técnica de colagem é usada de forma brilhante, misturando objetos do cotidiano às ilustrações para dar vida ao mundo imaginativo de Jéssica."
    },
    sebastiao: {
        titulo: "Sebastião",
        imagem: "https://a-static.mlcdn.com.br/450x450/livro-sebastiao/magazineluiza/225330300/49d2112e4d07d6a59518a4d46c827361.jpg",
        categoria: "Poesia Visual",
        sinopse: "Sebastião é um menino que vive perto do mar e tem uma relação especial com a natureza. A história explora a sensibilidade, a arte e a beleza encontrada nas coisas simples da vida.",
        temas: ["Natureza", "Arte", "Sensibilidade", "Sonhos"],
        ilustracao: "Os tons de azul e areia dominam a paleta. Elementos como conchas, areia e tecidos são incorporados diretamente na ilustração, conectando a arte à história."
    },
    ninho: {
        titulo: "Ninho de Cores",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/51+x-4TCM9L.jpg",
        categoria: "Livro de Conceitos",
        sinopse: "De forma poética, este livro explora o nascimento das cores. Cada página é uma descoberta visual que brinca com as misturas e as sensações que cada cor pode trazer.",
        temas: ["Cores", "Criação", "Descoberta", "Poesia"],
        ilustracao: "Uma explosão de cores e texturas. André Neves usa a colagem para mostrar como as cores se misturam e 'nascem' umas das outras de forma lúdica."
    },
    duelo: {
        titulo: "O Duelo",
        imagem: "https://www.travessa.com.br/imagem/a/9788574121516.jpg",
        categoria: "Conto sobre Diferenças",
        sinopse: "Um rei e um cavaleiro se preparam para um grande duelo, mas o motivo da disputa é surpreendente. Uma história sobre perspectivas, diferenças e como as coisas nem sempre são o que parecem.",
        temas: ["Perspectiva", "Diferenças", "Respeito", "Convivência"],
        ilustracao: "A composição visual é inteligente, muitas vezes mostrando os dois lados da história simultaneamente e usando a simetria para reforçar o tema do duelo."
    },
    obax: {
        titulo: "Obax",
        imagem: "https://m.media-amazon.com/images/I/91038P6e27L._AC_UF1000,1000_QL80_.jpg",
        categoria: "Conto Africano",
        sinopse: "Obax é uma menina que vive na savana africana e tem o dom de inventar histórias fantásticas. Um dia, ela conta ter visto uma chuva de flores, e parte em uma jornada para provar que a magia existe.",
        temas: ["Imaginação", "Aventura", "Cultura Africana", "Persistência"],
        ilustracao: "As ilustrações são vibrantes e ricas em texturas, com colagens que utilizam tecidos e padrões que remetem à arte e paisagem africana."
    },
    malvina: {
        titulo: "Malvina",
        imagem: "https://quindim.com.br/wp-content/uploads/9788536821603-1-scaled.jpg",
        categoria: "Conto Inventivo",
        sinopse: "Malvina é uma menina cheia de ideias, que adora criar engenhocas. Ela decide construir uma máquina de 'despreocupação' para sua mãe, mas algo inesperado acontece no meio do processo.",
        temas: ["Criatividade", "Relação Mãe e Filha", "Invenções", "Solução de Problemas"],
        ilustracao: "Os desenhos misturam traços delicados com colagens de objetos mecânicos e do cotidiano, criando um universo visual único e divertido para as invenções de Malvina."
    },
    sofia: {
        titulo: "A Caligrafia de Dona Sofia",
        imagem: "https://m.media-amazon.com/images/I/815E76w+QzL._AC_UF1000,1000_QL80_.jpg",
        categoria: "Poesia e Cotidiano",
        sinopse: "Dona Sofia, uma professora aposentada, espalha poemas pela cidade com sua bela caligrafia. A história celebra o poder da poesia em transformar o dia a dia e conectar pessoas.",
        temas: ["Poesia", "Comunidade", "Generosidade", "A beleza das palavras"],
        ilustracao: "A ilustração é uma ode à caligrafia. Versos e palavras são integrados artisticamente às imagens, transformando o próprio texto em parte da arte visual do livro."
    },

    // NOVAS OBRAS
    orelhasdemariposa: {
        titulo: "Orelhas de Mariposa",
        imagem: "https://www.saraiva.com.br/orelhas-de-mariposa/p",
        categoria: "Autoestima e Aceitação",
        sinopse: "Mara é uma menina que tem orelhas grandes e sofre com as brincadeiras dos colegas. Com a ajuda da mãe, ela aprende a transformar suas 'diferenças' em algo mágico e poético.",
        temas: ["Autoestima", "Bullying", "Diferenças", "Imaginação"],
        ilustracao: "André Neves cria ilustrações delicadas que focam na expressividade dos personagens, usando cores suaves para tratar de um tema sensível com leveza e poesia."
    },
    manu_e_mila: {
        titulo: "Manu e Mila",
        imagem: "https://m.media-amazon.com/images/I/71u9Q5h-bNL._AC_UF1000,1000_QL80_.jpg",
        categoria: "Amizade e Perda",
        sinopse: "Manu e Mila são grandes amigas, mas um dia Mila desaparece. O livro aborda de forma sutil e poética o tema da perda, da saudade e da memória afetiva.",
        temas: ["Amizade", "Luto", "Saudade", "Memória"],
        ilustracao: "As ilustrações usam uma paleta de cores restrita e texturas de tecidos para criar uma atmosfera nostálgica e emocionante, refletindo os sentimentos da protagonista."
    },
    umbigo: {
        titulo: "Umbigo",
        imagem: "https://m.media-amazon.com/images/I/51wB7-7u0lL.jpg",
        categoria: "Vínculo e Origem",
        sinopse: "De onde viemos? Para onde vamos? O livro explora a conexão primordial entre mãe e filho através do umbigo, transformando-o em um símbolo poético sobre laços e pertencimento.",
        temas: ["Nascimento", "Vínculo Materno", "Identidade", "Origem"],
        ilustracao: "Com colagens e texturas orgânicas, André Neves cria imagens que remetem ao útero e à formação da vida, com um visual onírico e muito sensível."
    },
    chapeuzinho_amarelo: {
        titulo: "Chapeuzinho Amarelo",
        imagem: "https://m.media-amazon.com/images/I/81NqO5E4w+L._AC_UF1000,1000_QL80_.jpg",
        categoria: "Clássico Reilustrado",
        sinopse: "Nesta versão do clássico de Chico Buarque, André Neves dá vida à menina que tinha medo de tudo, especialmente do lobo. Uma jornada sobre a superação dos medos.",
        temas: ["Medo", "Coragem", "Autoconhecimento", "Crescimento"],
        ilustracao: "Neves utiliza colagens com tecidos e papéis de diferentes texturas. O lobo é construído de forma fragmentada, representando a desconstrução do próprio medo."
    },
    entre_nuvens: {
        titulo: "Entre Nuvens",
        imagem: "https://m.media-amazon.com/images/I/71F2Zt5YjVL._AC_UF1000,1000_QL80_.jpg",
        categoria: "Sonhos e Imaginação",
        sinopse: "Um menino sonha que pode tocar as nuvens e trazê-las para perto. O livro é uma viagem lúdica sobre a imaginação infantil e a capacidade de transformar o mundo com os sonhos.",
        temas: ["Sonhos", "Imaginação", "Infância", "Leveza"],
        ilustracao: "Predominam os tons de azul e branco, com texturas que dão às nuvens uma aparência fofa e palpável, quase como algodão."
    },
    menino_chuva: {
        titulo: "Menino Chuva na Rua do Sol",
        imagem: "https://paulinas.vteximg.com.br/arquivos/ids/175949-1000-1000/9788535620245.jpg",
        categoria: "Conto Poético",
        sinopse: "Em um lugar onde o sol nunca descansa, um menino feito de chuva aparece, trazendo novas cores e sensações. Uma metáfora sobre a importância da diversidade e do equilíbrio.",
        temas: ["Diferenças", "Equilíbrio", "Natureza", "Renovação"],
        ilustracao: "O contraste entre o amarelo vibrante da 'Rua do Sol' e os tons de azul do 'Menino Chuva' é o ponto central da narrativa visual, criando um impacto visual forte."
    },
    vento: {
        titulo: "Um Pé de Vento",
        imagem: "https://m.media-amazon.com/images/I/51j1-Bq4wXL.jpg",
        categoria: "Narrativa Visual",
        sinopse: "A história de Íris, uma menina com uma conexão profunda com a natureza, que vê uma árvore como sua grande amiga. Uma reflexão sobre amizade e a passagem do tempo.",
        temas: ["Natureza", "Amizade", "Tempo", "Contemplação"],
        ilustracao: "André Neves usa colagens com elementos naturais, como folhas e galhos secos, integrando a própria natureza na materialidade do livro."
    },
    a_vez_da_voz: {
        titulo: "A Vez da Voz",
        imagem: "https://m.media-amazon.com/images/I/81I7y-7bQ+L._AC_UF1000,1000_QL80_.jpg",
        categoria: "Poesia",
        sinopse: "Com poemas de Nicolas Behr, o livro é um convite para ouvir as vozes da natureza, das coisas e dos sentimentos. Cada página é uma surpresa poética e visual.",
        temas: ["Poesia", "Natureza", "Escuta", "Sensibilidade"],
        ilustracao: "As ilustrações de André Neves não apenas representam os poemas, mas dialogam com eles, usando texturas e cores para dar forma e sentimento às palavras."
    },
    nem_tudo_e_igual: {
        titulo: "Nem Tudo na Vida é Igual",
        imagem: "https://m.media-amazon.com/images/I/51rP0Y6RybL.jpg",
        categoria: "Diversidade",
        sinopse: "O livro brinca com as palavras e as imagens para mostrar como as diferenças tornam o mundo mais rico e interessante. Uma celebração da diversidade em suas múltiplas formas.",
        temas: ["Diversidade", "Diferenças", "Respeito", "Identidade"],
        ilustracao: "A composição visual é criativa, usando espelhamentos e contrastes para reforçar a ideia de que ser diferente é algo natural e belo."
    },
    a_outra_avo: {
        titulo: "A Outra Avó",
        imagem: "https://m.media-amazon.com/images/I/51gUv429GSL.jpg",
        categoria: "Memória Afetiva",
        sinopse: "Uma menina tem duas avós muito diferentes. O livro explora as memórias, os cheiros, os gostos e as sensações que cada avó desperta, celebrando os laços familiares.",
        temas: ["Família", "Memória", "Afeto", "Identidade"],
        ilustracao: "As texturas são o ponto forte, com uso de rendas, tecidos e papéis que remetem a objetos antigos e ao aconchego da casa da avó."
    },
    margarida: {
        titulo: "Margarida",
        imagem: "https://www.panapana.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/margarida_1_.jpg",
        categoria: "Conto de Fadas Moderno",
        sinopse: "Uma flor chamada Margarida sonha em conhecer o mundo além do seu jardim. Uma história sobre sonhos, liberdade e a coragem de seguir o próprio caminho.",
        temas: ["Sonhos", "Liberdade", "Coragem", "Jornada"],
        ilustracao: "As cores são vibrantes e alegres. André Neves usa pétalas e folhas de verdade em suas colagens, misturando o real e o imaginário."
    },
    lua_no_umbigo: {
        titulo: "A Lua no Umbigo",
        imagem: "https://m.media-amazon.com/images/I/81xV4-2+8ZL._AC_UF1000,1000_QL80_.jpg",
        categoria: "Poesia e Natureza",
        sinopse: "Com texto de Alice Ruiz, o livro é uma delicada exploração poética da relação entre o corpo e a natureza, mostrando como estamos todos conectados ao universo.",
        temas: ["Poesia", "Natureza", "Corpo", "Conexão"],
        ilustracao: "As ilustrações são etéreas e oníricas, com figuras humanas que se fundem a elementos da natureza, como a lua, as estrelas e a água."
    }
};