export type Locale = "pt" | "en";

/**
 * Idioma da interface do portfolio.
 *
 * As demos em public/labs continuam sempre em pt-BR — são landing pages para
 * comércio local brasileiro e o idioma faz parte do artefato. O que traduz
 * aqui é só o texto ao redor delas (galeria e seção da home).
 *
 * Quando o seletor de idioma do portfolio existir, ligue-o a este valor.
 */
export const ACTIVE_LOCALE: Locale = "en";

/** Um texto em cada idioma da interface. */
export type Text = Record<Locale, string>;

/** Escolhe a variante do idioma ativo. */
export function t(text: Text, locale: Locale = ACTIVE_LOCALE): string {
  return text[locale];
}

export type Lab = {
  /** Pasta em public/labs — define a URL da demo. */
  slug: string;
  /** Nome fictício do negócio. Não traduz: é nome próprio. */
  name: string;
  /** Segmento do comércio, usado como etiqueta. */
  segment: Text;
  /** O que este estudo explora, em uma frase. */
  blurb: Text;
  /** Ocupa a largura toda no topo da galeria. Use em apenas um. */
  featured?: boolean;
};

/** Caminho servido a partir de public/labs. */
export function labUrl(lab: Lab): string {
  return `/labs/${lab.slug}/index.html`;
}

const NUMERALS: Record<Locale, string[]> = {
  pt: ["zero", "uma", "duas", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze"],
  en: ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"],
};

/**
 * Troca `{n}` pela quantidade de demos, por extenso.
 * Evita que o texto envelheça toda vez que uma landing nova entra.
 */
export function withCount(text: Text, locale: Locale = ACTIVE_LOCALE): string {
  const raw = text[locale];
  const word = NUMERALS[locale][labs.length] ?? String(labs.length);
  const out = raw.replace(/\{n\}/g, word);
  // se o número abre a frase, ele precisa entrar maiúsculo
  return raw.startsWith("{n}") ? out.charAt(0).toUpperCase() + out.slice(1) : out;
}

export const labs: Lab[] = [
  {
    slug: "espaco-fofurinha",
    name: "Espaço Fofurinha",
    segment: { pt: "Pet shop", en: "Pet shop" },
    blurb: {
      pt: "Banho e tosa com agendamento sem formulário: doze atalhos de WhatsApp, um por serviço, cada um com a mensagem já escrita.",
      en: "Pet grooming with no booking form: twelve WhatsApp shortcuts, one per service, each with the message already written.",
    },
    featured: true,
  },
  {
    slug: "corte-nobre",
    name: "Corte Nobre",
    segment: { pt: "Açougue", en: "Butcher shop" },
    blurb: {
      pt: "Açougue de bairro em chave premium. O cutelo do topo é SVG desenhado à mão — nenhuma foto de banco de imagens na página.",
      en: "A neighborhood butcher played in a premium key. The cleaver up top is hand-drawn SVG — not a single stock photo on the page.",
    },
  },
  {
    slug: "combat-academy",
    name: "CT2 Two Brothers",
    segment: { pt: "Academia de luta", en: "Martial arts gym" },
    blurb: {
      pt: "Centro de treinamento de artes marciais: grade de modalidades, ficha dos mestres e a tabela de horários da semana.",
      en: "Martial arts training center: a grid of disciplines, profiles of the head coaches and the weekly class timetable.",
    },
  },
  {
    slug: "cafe-vivo",
    name: "Café Vivo",
    segment: { pt: "Cafeteria", en: "Coffee shop" },
    blurb: {
      pt: "Cafeteria autoral de leitura lenta. Assinaturas do barista, reserva por formulário e um modal de boas-vindas na entrada.",
      en: "A slow-reading specialty café. Barista subscriptions, a reservation form and a welcome modal on arrival.",
    },
  },
  {
    slug: "oficina-cavalheiro",
    name: "Oficina do Cavalheiro",
    segment: { pt: "Barbearia", en: "Barbershop" },
    blurb: {
      pt: "Barbearia clássica em caixa-alta. Dezesseis preços à vista na tabela de serviços e agendamento em modal.",
      en: "A classic barbershop set in all caps. Sixteen prices out in the open on the service table, booking in a modal.",
    },
  },
  {
    slug: "carolina-mendes",
    name: "Dra. Carolina Mendes",
    segment: { pt: "Odontologia", en: "Dental practice" },
    blurb: {
      pt: "Consultório odontológico em chave de marca pessoal: especialidades separadas por cuidado, depoimentos de pacientes e primeira consulta gratuita.",
      en: "A dental practice built around a personal brand: specialties split by type of care, patient testimonials and a free first appointment.",
    },
  },
  {
    slug: "rafael-andrade",
    name: "Dr. Rafael Andrade",
    segment: { pt: "Psicologia", en: "Psychology" },
    blurb: {
      pt: "Psicólogo, terapia cognitivo-comportamental. A página inteira é escrita em segunda pessoa, endereçando quem nunca foi à terapia — com dez atalhos de WhatsApp já preenchidos.",
      en: "A CBT psychologist. The whole page is written in second person, speaking to someone who has never been to therapy — with ten pre-filled WhatsApp shortcuts.",
    },
  },
  {
    slug: "santuario-studio",
    name: "Santuário",
    segment: { pt: "Pilates & Yoga", en: "Pilates & yoga studio" },
    blurb: {
      pt: "Studio de pilates e yoga com três modalidades, planos que acompanham o ritmo de prática e a primeira aula gratuita.",
      en: "A pilates and yoga studio: three practice tracks, plans priced to match how often you show up, and a free first class.",
    },
  },
];

/** Texto da galeria /labs. */
export const labsCopy = {
  back: { pt: "Portfolio", en: "Portfolio" },
  eyebrow: { pt: "Labs", en: "Labs" },
  titleLead: { pt: "Estudos de", en: "Storefront" },
  titleAccent: { pt: "vitrine", en: "studies" },
  lede: {
    pt: "{n} negócios que não existem, com a landing page que cada um teria. Estudos de direção de arte para comércio de bairro: tom de voz, ritmo de leitura e o caminho até o contato.",
    en: "{n} businesses that don't exist, each with the landing page it would have. Art direction studies for neighborhood commerce: tone of voice, reading rhythm, and the path to getting in touch.",
  },
  note: {
    pt: "Negócios fictícios. Nomes, preços, telefones e endereços são de demonstração — nenhum dado real.",
    en: "Fictional businesses. Names, prices, phone numbers and addresses are placeholders — no real data.",
  },
  open: { pt: "Abrir", en: "Open" },
  previewAlt: { pt: "Prévia da landing page", en: "Preview of the landing page" },
  foot: {
    pt: "As {n} são HTML e CSS escritos à mão, sem framework nem biblioteca de componentes. As prévias acima são as páginas de verdade rodando — passe o mouse para ver o resto de cada uma.",
    en: "All {n} are hand-written HTML and CSS — no framework, no component library. The previews above are the real pages running; hover to pan through each one. The pages themselves are in Portuguese, since that is who they were built for.",
  },
} satisfies Record<string, Text>;

/** Texto da seção Labs na home. */
export const labsHomeCopy = {
  title: { pt: "Labs", en: "Labs" },
  lede: {
    pt: "Landing pages para comércio local brasileiro — clientes fictícios, ofício real. HTML e CSS à mão, sem framework.",
    en: "Landing pages for Brazilian local businesses — fictional clients, real craft. Hand-written HTML and CSS, no framework.",
  },
  cta: {
    pt: "Ver a galeria com prévias ao vivo",
    en: "See the gallery with live previews",
  },
} satisfies Record<string, Text>;
