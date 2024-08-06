import theDesignerImg from '../assets/img/the-designer.jpg';
import theCraftsmanImg from '../assets/img/the-craftsman.jpg';
import theMakerImg from '../assets/img/the-maker.jpg';
import theStewardImg from '../assets/img/the-steward.jpg';
import thePatronImg from '../assets/img/the-patron.jpg';
import bromley from '../assets/img/home-2.jpg';

import discColletion from '../assets/img/disc-collection.jpg';
import pavillionCollection from '../assets/img/pavillion-collection.jpg';
import bromleyCollection from '../assets/img/bromley-collection.jpg';

export const showProductsLimit = 4;
export const BromleyImg = bromley;

export const vintageCategory = [
  {
    id: 'categ1',
    type: 'Novo Vintage',
  },
  {
    id: 'categ2',
    type: 'Verdadeiro Vintage',
  },
  {
    id: 'categ3',
    type: 'Novo & Verdadeiro Vintage',
  },
];

export const categories = [
  {
    id: 'c1',
    category: 'Loja Completa',
  },
  {
    id: 'c2',
    category: 'Móveis',
  },
  {
    id: 'c3',
    category: 'Decoração',
  },
  {
    id: 'c4',
    category: 'Jantar & Entretenimento',
  },
  {
    id: 'c5',
    category: 'Artigos Têxteis',
  },
  {
    id: 'c6',
    category: 'Iluminação',
  },
  {
    id: 'c7',
    category: 'Arte',
  },
];

export const shopLinks = [
  'Móveis',
  'Decoração',
  'Jantar & Entretenimento',
  'Artigos Têxteis',
  'Iluminação',
  'Arte',
];

export const CompanyLinks = [
  'Nossa História',
  'Design de Interiores',
  'Fique Conosco',
  'Blog A Bit Moore',
];

export const AboutLinks = [
  {
    section: 'Sobre',
    id: '#about',
  },
  {
    section: 'A nova Nostalgia',
    id: '#new-nostalgia',
  },
  {
    section: 'Processo',
    id: '#process',
  },
  {
    section: 'Contato',
    id: '#contact',
  },
  {
    section: 'Serviços de Design de Interiores',
    id: '#design-services',
  },
];

export const processList = [
  {
    id: 1,
    image: theDesignerImg,
    title: 'O Designer',
    alt: 'Desenho técnico de um sofá',
    description:
      'Nosso processo começa nas mãos do designer, onde gerações de experiência são desenvolvidas a partir de um esboço manual e transformadas pela nossa equipe de engenharia. As complexidades são determinadas com os melhores internos em mente, para garantir a longevidade de cada peça.',
  },
  {
    id: 2,
    image: theCraftsmanImg,
    title: 'O Artesão',
    alt: 'Partes de uma mobília no chão',
    description:
      "Em seguida, passa para o artesão para trazer a arte à vida em forma e estrutura. Horas são gastas esculpindo, lixando, montando e costurando com o toque da mão humana, e depois é meticulosamente inspecionado para controle de qualidade em cada detalhe.",
  },
  {
    id: 3,
    image: theMakerImg,
    title: 'O Fabricante',
    alt: 'Tecido branco',
    description:
      'Um protótipo final é então passado para as mãos do fabricante para ser produzido, até o menor detalhe. Barras, cordas, manchas e carimbos aplicados e assinados em cada etapa.',
  },
  {
    id: 4,
    image: theStewardImg,
    title: 'O Administrador',
    alt: 'Sofá branco detalhado',
    description:
      "Após cada toque final ser aperfeiçoado e a qualidade assegurada, é embalado e preparado com cuidado.",
  },
  {
    id: 5,
    image: thePatronImg,
    title: 'O Patrão',
    alt: 'Uma chave de prata em uma mesa',
    description:
      'Uma vez colocado cuidadosamente em sua casa, você se torna seu guardião. Criado com amor e envelhecido por uma vida bem vivida.',
  },
];

export const collections = [
  {
    title: 'A Coleção Bromley',
    image: bromleyCollection,
    alt: 'sofá branco elegante com duas almofadas',
    link: '/shop/the-bromley-sofa',
    description:
      'Um sofá feito para leituras de domingo e sonecas ao lado da lareira.',
  },
  {
    title: 'A Coleção Disc',
    image: discColletion,
    alt: 'mesa da coleção Disc em volta de folhas',
    link: '/shop',
    description:
      'Uma coleção de artigos elegantes e feitos à mão que caminha entre o design minimalista e maximalista.',
  },
  {
    title: 'A Coleção Pavillion',
    image: pavillionCollection,
    alt: 'cadeira da coleção Pavillion em um ambiente rural',
    link: '/shop/pavillion-chair',
    description: 'Linhas suaves e presença imponente.',
  },
];
