import chair from '../assets/img/chair-1.jpg';
import sofa from '../assets/img/sofa-1.jpg';
import table1 from '../assets/img/table-1.jpg';
import table2 from '../assets/img/table-2.jpg';
import italianChair from '../assets/img/italian-chair.jpg';
import italianPlantStand from '../assets/img/italian-plant-stand.jpg';
import napoleonChair from '../assets/img/napoleon-chair.jpg';
import frenchOakCounter from '../assets/img/french-oak-counter.jpg';
import confitPot from '../assets/img/cream-confit-pot.jpg';
import englishMirror from '../assets/img/english-mirror.jpg';
import mannequinHand from '../assets/img/mannequin-hand.jpg';
import canadianCoffePot from '../assets/img/canadian-coffe-pot.jpg';
import belgianBowl from '../assets/img/ceramic-belgian-bowls.jpg';
import sarcophagus from '../assets/img/sarcophagus.jpg';
import coupesGlasses from '../assets/img/coupe-glasses.jpg';
import printPillow from '../assets/img/black-print-pillow.jpg';
import amberLumbarPillow from '../assets/img/amber-floral-lumbar-pillow.jpg';
import checkeredBoneLamps from '../assets/img/checkered-bone-lamps.jpg';
import bronzeBankersLamp from '../assets/img/bronze-bankers-lamp.jpg';
import manWalkingArt from '../assets/img/man-walking-oil-on-canvas.jpg';
import villagersCharcoalSketch from '../assets/img/villagers-charcoal-sketch.jpg';
import ladyReading from '../assets/img/reading-danish-painting.jpg';

export const products = [
  {
    id: 'the-bromley-sofa',
    image: sofa,
    alt: 'sofá branco',
    title: 'The Bromley Sofa',
    price: 8750,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      "O centro do nosso produto personalizado, o Sofá Bromley é uma fusão de épocas e estilos. Seus braços angulares são projetados para relaxar. Inspirado pelo design italiano do meio do século e coberto com capas no estilo inglês, é tanto elegante quanto imponente.",
    dimensions: [
      'Comprimento Total: 72"',
      'Profundidade: 37.5"',
      'Altura: 30"',
      'Altura do Braço: 25.5"',
      'Altura do Assento: 19"',
    ],
  },
  {
    id: 'pavillion-chair',
    image: chair,
    alt: 'cadeira marrom',
    title: 'Pavillion Chair',
    price: 6000,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      'Um pilar do nosso New Vintage, essas cadeiras altas com encosto são a adição perfeita para qualquer espaço arejado e sofisticado. O estofamento feito à mão dá à parte interna do encosto uma natureza esculpida e suporte lombar.',
    dimensions: [
      'Largura: 26.5 in',
      'Profundidade: 25.5 in',
      'Altura: 42 in',
      'Altura do Assento: 15 in',
      'Inclinação: 7 in',
    ],
  },
  {
    id: 'english-brass-mirror',
    image: englishMirror,
    alt: 'Espelho inglês',
    title: 'English Brass Mirror',
    price: 895,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Espelho de vaidade inglês do século 19 com pé de latão antropomórfico e alça superior. Espelho em excelente condição, sem lascas ou marcas. Bordas de latão patinadas pelo tempo.',
    dimensions: ['Largura: 15.5 in', 'Profundidade: 07 in', 'Altura: 25.375 in'],
  },
  {
    id: 'napoleon-chair',
    image: napoleonChair,
    alt: 'cadeira simples estilo vintage',
    title: 'Napoleon Chair',
    price: 3700,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      "Originária da época de Napoleão III, esta cadeira de braços chamativa tem pernas ornamentadas com rodízios. Foi reestofada em veludo 100% algodão e o interior foi reformulado para maior conforto. O desgaste é consistente com a idade.",
    dimensions: [
      'Largura: 32.5 in',
      'Profundidade: 28 in',
      'Altura: 34 in',
      'Altura do Assento: 15.5 in',
      'Altura do Braço: 22 in',
    ],
  },
  {
    id: 'ghent-side-table',
    image: table1,
    alt: 'mesa quadrada marrom',
    title: 'Ghent Side Table',
    price: 3650,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      'Elegante e sofisticada, nossa pequena mesa lateral Ghent em carvalho branco sólido é uma obra-prima modular. Com armazenamento empilhado, featuring gavetas embutidas com fechamento suave e hardware de pressão, esta mesa lateral minimalista é adequada para uso como mesa de cabeceira ou mesa lateral.',
    dimensions: ['Largura: 22 in', 'Profundidade: 20 in', 'Altura: 22 in'],
  },
  {
    id: 'nbl-coffee-table',
    image: table2,
    alt: 'mesa retangular marrom baixa',
    title: 'NBL Coffee Table',
    price: 4600,
    toOrder: true,
    vintage: 'New Vintage',
    type: 'Furniture',
    description:
      'Pernas torneadas sob medida feitas em carvalho e tingidas em um tom marrom médio, esta mesa de café é um design elevado e único.',
    dimensions: ['Largura Total: 36"', 'Comprimento Total: 55"', 'Altura: 15"'],
  },
  {
    id: 'italian-club-chairs',
    image: italianChair,
    alt: 'par de cadeiras italianas',
    title: 'Italian Club Chairs - Pair',
    price: 12000,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      "Projetadas no estilo de Gio Ponti, estas cadeiras italianas são recém-revestidas com tecidos florais e de veludo. Elas apresentam pernas de madeira afiladas. Datam da década de 1940. O tecido floral do fundo é original e reestofado meticulosamente. O desgaste é consistente com a idade e o uso.",
    dimensions: [
      'Largura: 29.93 in',
      'Profundidade: 29.53 in',
      'Altura: 30.32 in',
      'Altura do Assento: 14.57 in',
      'Altura do Braço: 23.25 in',
    ],
  },
  {
    id: 'italian-plant-stand',
    image: italianPlantStand,
    alt: 'Estande italiano',
    title: 'Italian Plant Stand',
    price: 1950,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      'Estande italiano para plantas com pés antropomórficos, topo de madeira octagonal tingida e laterais de avental intricadamente esculpidas. Este pedestal dramático é um lugar para flores e esculturas.',
    dimensions: ['Largura: 23.25 in', 'Profundidade: 15.25 in', 'Altura: 48 in'],
  },
  {
    id: 'french-oak-counter',
    image: frenchOakCounter,
    alt: 'Balcão de carvalho francês',
    title: 'French Oak Counter',
    price: 9200,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Furniture',
    description:
      'Balcão ornamentado de carvalho originário da França. Ferragens originais e detalhes finamente esculpidos. Decida qual lado exibir dependendo do seu humor. O desgaste é consistente com a idade.',
    dimensions: ['Largura: 97 in', 'Profundidade: 24.65 in', 'Altura: 35 in'],
  },
  {
    id: 'confit-pots',
    image: confitPot,
    alt: 'Pote simples de decoração',
    title: 'Confit Pots',
    price: 179,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Potes de confit franceses, um item essencial na cozinha, serve tanto como recipiente utilitário quanto vaso decorativo. Estes potes vidrados variam em tamanho, forma e coloração com base no desgaste e uso anterior. Bem preservados, estes recipientes são um belo pano de fundo para qualquer espaço de estar, jantar ou cozinha.',
    dimensions: [
      'Variável',
      'Cuidados: Evite usar para armazenamento de água a longo prazo. Não destinado ao uso na cozinha.',
    ],
  },
  {
    id: 'articulated-mannequin-hand',
    image: mannequinHand,
    alt: 'Mão de manequim',
    title: 'Articulated Mannequin Hand',
    price: 325,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      "Representação artística e altamente detalhada da mão de um manequim. A peça é feita em madeira, com articulações funcionais e extremamente ornamentadas. É uma excelente adição para uma biblioteca ou mesa de escritório como peça de conversa.",
    dimensions: ['Largura: 7 in', 'Profundidade: 10 in', 'Altura: 22 in'],
  },
  {
    id: 'canadian-coffee-pot',
    image: canadianCoffePot,
    alt: 'Bule de café canadense',
    title: 'Canadian Coffee Pot',
    price: 195,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Bule de café canadense do início do século XX com uma alça de ferro fundido. A peça em cerâmica apresenta uma bela pintura floral e embeleza qualquer mesa de café ou coleção.',
    dimensions: ['Largura: 6.5 in', 'Profundidade: 6 in', 'Altura: 9.5 in'],
  },
  {
    id: 'belgian-bowls',
    image: belgianBowl,
    alt: 'Tigela cerâmica belga',
    title: 'Ceramic Belgian Bowls',
    price: 150,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Conjunto de tigelas de cerâmica belga de vários tamanhos. Estas peças são ideais para decoração ou uso funcional e apresentam uma estética natural e rica em textura.',
    dimensions: ['Variável'],
  },
  {
    id: 'sarcophagus',
    image: sarcophagus,
    alt: 'Sarcófago egípcio',
    title: 'Egyptian Sarcophagus',
    price: 18000,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Sarcófago egípcio antigo decorado com detalhes intrincados, adequado para exibição em uma coleção ou museu. A peça é altamente detalhada e mostra desgaste consistente com a idade.',
    dimensions: ['Largura: 40 in', 'Profundidade: 20 in', 'Altura: 22 in'],
  },
  {
    id: 'coupe-glasses',
    image: coupesGlasses,
    alt: 'Copo de champanhe',
    title: 'Coupe Glasses',
    price: 135,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Conjunto de taças de champanhe, também conhecidas como copos coupe. A peça em vidro é perfeita para eventos especiais ou como uma peça decorativa de alta qualidade.',
    dimensions: ['Variável'],
  },
  {
    id: 'print-pillow',
    image: printPillow,
    alt: 'travesseiro com impressão em preto',
    title: 'Black Print Pillow',
    price: 65,
    toOrder: false,
    vintage: 'New Vintage',
    type: 'Decor',
    description:
      'Travesseiro com impressão em preto em tecido 100% algodão. O design moderno combina com qualquer decoração de interiores contemporânea.',
    dimensions: ['Largura: 18 in', 'Profundidade: 18 in', 'Altura: 3 in'],
  },
  {
    id: 'amber-lumbar-pillow',
    image: amberLumbarPillow,
    alt: 'travesseiro lumbar floral âmbar',
    title: 'Amber Floral Lumbar Pillow',
    price: 100,
    toOrder: false,
    vintage: 'New Vintage',
    type: 'Decor',
    description:
      'Travesseiro lumbar floral âmbar, feito em veludo macio e confortável. É uma peça perfeita para adicionar um toque de cor e conforto ao seu espaço.',
    dimensions: ['Largura: 24 in', 'Profundidade: 12 in', 'Altura: 5 in'],
  },
  {
    id: 'checkered-bone-lamps',
    image: checkeredBoneLamps,
    alt: 'Lâmpadas de osso xadrez',
    title: 'Checkered Bone Lamps',
    price: 450,
    toOrder: false,
    vintage: 'New Vintage',
    type: 'Decor',
    description:
      'Lâmpadas de osso com padrão xadrez, oferecendo uma iluminação única e decorativa. A base é feita de osso trabalhado e pintado, com um design clássico e elegante.',
    dimensions: ['Largura: 12 in', 'Profundidade: 12 in', 'Altura: 22 in'],
  },
  {
    id: 'bronze-bankers-lamp',
    image: bronzeBankersLamp,
    alt: 'Lâmpada de banqueiro em bronze',
    title: 'Bronze Bankers Lamp',
    price: 340,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Decor',
    description:
      'Lâmpada de banqueiro em bronze, ideal para uma mesa de escritório ou biblioteca. O design é elegante e apresenta detalhes ornamentais que conferem um toque de sofisticação.',
    dimensions: ['Largura: 11 in', 'Profundidade: 11 in', 'Altura: 15 in'],
  },
  {
    id: 'man-walking-art',
    image: manWalkingArt,
    alt: 'Arte de um homem caminhando',
    title: 'Man Walking - Oil on Canvas',
    price: 4800,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Art',
    description:
      'Pintura a óleo em tela de um homem caminhando, estilo impressionista. A peça é rica em detalhes e oferece uma visão única da cena.',
    dimensions: ['Largura: 36 in', 'Altura: 48 in'],
  },
  {
    id: 'villagers-charcoal-sketch',
    image: villagersCharcoalSketch,
    alt: 'Esboço de carvão',
    title: 'Villagers Charcoal Sketch',
    price: 600,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Art',
    description:
      'Esboço em carvão representando uma cena de vilarejo. O trabalho artístico é detalhado e expressivo, mostrando a habilidade do artista.',
    dimensions: ['Largura: 24 in', 'Altura: 30 in'],
  },
  {
    id: 'reading-danish-painting',
    image: ladyReading,
    alt: 'Pintura dinamarquesa',
    title: 'Lady Reading - Danish Painting',
    price: 7200,
    toOrder: false,
    vintage: 'True Vintage',
    type: 'Art',
    description:
      'Pintura dinamarquesa do século 19 de uma mulher lendo. A peça é rica em cores e detalhes, capturando a elegância e a tranquilidade da cena.',
    dimensions: ['Largura: 28 in', 'Altura: 36 in'],
  },
];
