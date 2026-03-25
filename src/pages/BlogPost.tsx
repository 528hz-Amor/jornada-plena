import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    id: "sinais-conexao-consigo",
    category: "Autoconhecimento",
    title: "5 sinais de que você perdeu a conexão consigo mesma",
    excerpt:
      "Muitas mulheres vivem no automático sem perceber que estão distantes de quem realmente são. Descubra os sinais e como voltar para si.",
    date: "15 Mar 2026",
    content: `
      <h2>Introdução</h2>
      <p>Em um mundo acelerado, muitas mulheres se encontram vivendo no automático, desconectadas de sua essência mais profunda. Este artigo explora os sinais mais comuns dessa desconexão e oferece caminhos para reconectar-se consigo mesma.</p>

      <h2>1. Sentimento de vazio constante</h2>
      <p>Quando acordamos todas as manhãs com uma sensação de vazio, mesmo tendo "tudo" na vida, pode ser um sinal claro de que estamos vivendo uma vida que não é verdadeiramente nossa.</p>

      <h2>2. Dificuldade em tomar decisões</h2>
      <p>A indecisão crônica muitas vezes reflete uma desconexão com nossos valores e desejos mais profundos. Quando não sabemos o que queremos, é porque perdemos o contato com quem somos.</p>

      <h2>3. Busca constante por validação externa</h2>
      <p>Dependemos excessivamente da opinião dos outros para nos sentirmos bem. Isso acontece quando esquecemos que nossa própria validação é a mais importante.</p>

      <h2>4. Fadiga emocional crônica</h2>
      <p>Sentir-se exausta mesmo após descansar bem indica que estamos gastando energia em coisas que não nos nutrem verdadeiramente.</p>

      <h2>5. Perda de interesse por atividades que antes amávamos</h2>
      <p>Quando hobbies e paixões que antes nos davam alegria se tornam obrigações ou perdem o brilho, é hora de parar e refletir sobre nossa conexão interior.</p>

      <h2>Como reconectar-se</h2>
      <p>A reconexão começa com pequenos passos: meditação diária, journaling, passeios na natureza e tempo de qualidade consigo mesma. Lembre-se: você merece viver uma vida alinhada com sua essência.</p>
    `,
  },
  {
    id: "sagrado-feminino-vida-moderna",
    category: "Espiritualidade",
    title: "O poder do sagrado feminino na vida moderna",
    excerpt:
      "Como resgatar a sabedoria ancestral feminina e integrá-la ao seu dia a dia, encontrando equilíbrio entre o moderno e o sagrado.",
    date: "08 Mar 2026",
    content: `
      <h2>Redescobrindo o Sagrado Feminino</h2>
      <p>O sagrado feminino representa a energia criativa, intuitiva e conectiva que existe em todas as mulheres. Em uma sociedade predominantemente masculina, muitas vezes essa energia fica adormecida.</p>

      <h2>A sabedoria ancestral</h2>
      <p>Nossas ancestrais carregavam conhecimentos profundos sobre ciclos lunares, medicina natural e conexão espiritual. É hora de resgatar essa sabedoria e integrá-la ao nosso dia a dia moderno.</p>

      <h2>Equilibrando o moderno e o sagrado</h2>
      <p>Não se trata de rejeitar a modernidade, mas de encontrar um equilíbrio saudável entre produtividade e presença, tecnologia e intuição, fazer e ser.</p>

      <h2>Práticas para integrar o sagrado feminino</h2>
      <ul>
        <li>Meditação lunar</li>
        <li>Rituais de autocuidado</li>
        <li>Conexão com a natureza</li>
        <li>Expressão criativa</li>
        <li>Círculos de mulheres</li>
      </ul>
    `,
  },
  {
    id: "rituais-matinais-energia",
    category: "Autocuidado",
    title: "Rituais matinais que transformam sua energia",
    excerpt:
      "Pequenas práticas diárias podem mudar completamente a forma como você se sente. Conheça rituais simples e poderosos para começar bem o dia.",
    date: "01 Mar 2026",
    content: `
      <h2>A importância dos rituais matinais</h2>
      <p>Como começamos o dia define como o vivemos. Rituais matinais conscientes podem transformar completamente nossa energia e produtividade.</p>

      <h2>Ritual da gratidão</h2>
      <p>Ao acordar, antes mesmo de levantar da cama, liste 3 coisas pelas quais você é grata. Isso define uma frequência positiva para o dia.</p>

      <h2>Hidratação consciente</h2>
      <p>Beba um copo de água morna com limão enquanto respira profundamente. Este ritual hidrata e energiza seu corpo.</p>

      <h2>Meditação de 5 minutos</h2>
      <p>Sente-se em silêncio por 5 minutos, focando na respiração. Este momento de presença acalma a mente e centra suas intenções.</p>

      <h2>Movimento suave</h2>
      <p>Pratique alongamentos suaves ou yoga por 10 minutos. Isso acorda o corpo e libera tensões acumuladas.</p>

      <h2>Intenção do dia</h2>
      <p>Defina uma intenção clara para o dia. Escreva-a e visualize-a se manifestando.</p>
    `,
  },
  {
    id: "vulnerabilidade-como-forca",
    category: "Reflexão",
    title: "Vulnerabilidade como força: aprendendo a sentir",
    excerpt:
      "Ser vulnerável não é fraqueza. Descubra como abraçar suas emoções pode ser o caminho mais corajoso para uma vida plena.",
    date: "22 Fev 2026",
    content: `
      <h2>Redefinindo vulnerabilidade</h2>
      <p>A vulnerabilidade muitas vezes é vista como fraqueza, mas na verdade é uma das maiores forças que podemos cultivar. Ser vulnerável significa coragem de sentir e expressar nossas emoções verdadeiras.</p>

      <h2>O medo da vulnerabilidade</h2>
      <p>Muitas vezes evitamos a vulnerabilidade por medo de rejeição, julgamento ou dor. Mas essa evitação nos mantém presos em uma armadura emocional que nos distancia de conexões verdadeiras.</p>

      <h2>A coragem de sentir</h2>
      <p>Ser vulnerável requer coragem. É escolher sentir a dor, o medo, a alegria e o amor completamente, sem filtros ou defesas.</p>

      <h2>Como cultivar a vulnerabilidade</h2>
      <ul>
        <li>Pratique a honestidade emocional consigo mesma</li>
        <li>Compartilhe seus sentimentos com pessoas confiáveis</li>
        <li>Aceite suas imperfeições</li>
        <li>Permita-se sentir sem julgamento</li>
        <li>Honre seus limites emocionais</li>
      </ul>

      <h2>Os benefícios da vulnerabilidade</h2>
      <p>A vulnerabilidade nos leva a conexões mais profundas, autoconhecimento verdadeiro e uma vida mais autêntica. Paradoxalmente, quanto mais vulneráveis somos, mais fortes nos tornamos.</p>
    `,
  },
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-4xl font-display font-light text-foreground mb-4">
            Post não encontrado
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Voltar ao início
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="py-24">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          <div className="mb-8">
            <span className="text-sm font-body uppercase tracking-wider text-primary font-medium mb-2 block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-light text-foreground mb-4">
              {post.title}
            </h1>
            <p className="text-muted-foreground">{post.date}</p>
          </div>

          <div
            className="prose prose-lg max-w-none font-body text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
