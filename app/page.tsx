import { Check, ArrowRight, X } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans selection:bg-accent selection:text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full py-4 px-6 lg:px-8 flex justify-center items-center z-50">
        <span className="font-display text-2xl font-bold tracking-tighter uppercase text-black">SOLO</span>
      </header>

      {/* 1. Hero */}
      <section className="relative pt-24 pb-32 px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center text-center border-b-2 border-stone-200">
        <div className="space-y-8 flex flex-col items-center">
          <div className="font-mono text-xs font-bold tracking-widest uppercase text-accent flex flex-wrap items-center justify-center gap-4">
            <span className="px-2 py-1 bg-accent text-white">OP.01</span>
            <span>{"// TARGET: CRIADORES & EXPERTS"}</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.05] text-black uppercase">
            O modelo de negócio solo que começa pelos seus limites inegociáveis.
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl font-medium mx-auto">
            SOLO é o sistema tático que uso para operar um negócio faturando em reais e em dólar com simplicidade — sem equipe grande, sem funis complicados e sem operação inchada.
          </p>
          
          <div className="pt-4 pb-4 w-full flex justify-center">
            <Link 
              href="#offer" 
              className="inline-block border-2 border-accent bg-accent text-white px-8 py-4 text-sm md:text-base font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-none"
            >
              [ INICIAR PROTOCOLO ]
            </Link>
          </div>

          <div className="pt-8 border-t-2 border-dashed border-stone-200 w-full max-w-2xl">
            <p className="font-mono text-sm text-stone-800 leading-relaxed uppercase">
              <span className="text-accent">{">"}</span> Não começa por nicho.<br />
              <span className="text-accent">{">"}</span> Não começa por funil.<br />
              <span className="text-accent">{">"}</span> Não começa por tática.<br />
              <span className="text-accent">{">"}</span> Você começa pela vida que quer bancar.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Identificação Brutal */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.02</span>
            RECONHECIMENTO DE CAMPO
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
            Você sabe que tem repertório pra vender mais. O problema é que seu negócio ainda depende demais da sua energia.
          </h2>
          
          <div className="text-xl text-stone-700 leading-relaxed space-y-8 text-left font-medium">
            <p className="font-bold text-black">
              Você pensa demais antes de postar.<br />
              Refina demais antes de vender.<br />
              Adia demais antes de decidir.
            </p>
            <p>Sabe que não é iniciante. Mas também sabe que ainda não virou o jogo.</p>
            <p>No fundo, a frustração não é só faturar menos do que poderia.</p>
            <p>É olhar pro que você já sabe, pro que já viveu, pro que já tem nas mãos — e sentir que mesmo assim ainda opera de forma confusa, inconsistente e pesada demais.</p>
            <p className="font-mono text-sm uppercase tracking-widest text-accent border-b-2 border-stone-200 pb-2 inline-block">E o pior:</p>
            <p className="font-bold text-black">
              Ver gente pior crescendo mais rápido enquanto você continua tentando organizar uma máquina que parece sempre depender de mais clareza, mais estrutura, mais energia e mais tempo.
            </p>
          </div>

          <div className="pt-12 border-t-2 border-stone-200 text-left">
            <p className="text-2xl font-display font-bold text-black leading-snug uppercase tracking-tight">
              Quase nunca é falta de capacidade.<br />
              Na maioria das vezes, é só um negócio mal desenhado pra vida que você quer viver.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Quebra da Lógica Antiga */}
      <section className="py-32 px-6 lg:px-8 bg-white text-stone-900 border-b-2 border-stone-200">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-8">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 bg-accent text-white mr-4">SEC.03</span>
              FALHA ESTRUTURAL DETECTADA
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-tight uppercase text-black">
              A maioria constrói um negócio qualquer… e depois tenta enfiar a própria vida dentro dele.
            </h2>
            <div className="text-xl text-stone-600 leading-relaxed space-y-6">
              <p>É assim que nascem negócios que até vendem, mas cobram caro demais em energia, atenção e paz mental.</p>
              <p className="text-stone-500 font-mono text-sm uppercase leading-loose">
                <span className="text-accent">{">"}</span> Você começa por tática.<br />
                <span className="text-accent">{">"}</span> Depois vai pra conteúdo.<br />
                <span className="text-accent">{">"}</span> Depois inventa oferta.<br />
                <span className="text-accent">{">"}</span> Depois tenta corrigir posicionamento.<br />
                <span className="text-accent">{">"}</span> Depois pensa em equipe.<br />
                <span className="text-accent">{">"}</span> Depois busca IA.<br />
                <span className="text-accent">{">"}</span> Depois percebe que criou uma operação que exige mais de você do que deveria.
              </p>
              <p className="font-bold text-black">No fim, não é um negócio.<br />É uma estrutura improvisada tentando parecer estratégia.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 pt-12 border-t-2 border-stone-200">
            <div className="space-y-8 p-8 border-2 border-stone-200 bg-stone-50">
              <h3 className="text-xl font-display font-bold text-stone-500 uppercase tracking-widest line-through">{"/// MODO ANTIGO"}</h3>
              <ul className="space-y-6">
                {[
                  "Escolhe nicho antes de entender a vida",
                  "Cria conteúdo antes de saber o que vende",
                  "Monta oferta antes de definir tese",
                  "Complica a operação cedo demais",
                  "Cresce por fora e trava por dentro"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-500 text-sm font-mono uppercase">
                    <span className="text-stone-400">[-]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 p-8 border-2 border-accent bg-white shadow-[8px_8px_0px_0px_rgba(227,10,23,0.1)]">
              <h3 className="text-xl font-display font-bold text-accent uppercase tracking-widest">{"/// MODO SOLO"}</h3>
              <ul className="space-y-6">
                {[
                  "Começa pela vida que quer financiar",
                  "Define limites inegociáveis",
                  "Transforma habilidades em receita",
                  "Organiza as 4 camadas na ordem certa",
                  "Cresce com simplicidade operacional"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-900 text-sm font-mono uppercase font-bold">
                    <span className="text-accent">[+]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-16 text-center">
            <p className="text-3xl font-display font-bold tracking-tighter uppercase text-black">SOLO nasceu pra inverter essa lógica.</p>
          </div>
        </div>
      </section>

      {/* 4. Mecanismo Único */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.04</span>
              ARQUITETURA DO SISTEMA
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              Você começa pela vida — e constrói o negócio a partir dela.
            </h2>
          </div>

          <div className="text-xl text-stone-700 leading-relaxed space-y-6 max-w-3xl mx-auto font-medium">
            <p>Antes de decidir posicionamento, conteúdo, oferta ou operação, o SOLO força você a responder o que a maioria pula:</p>
            <ul className="space-y-2 font-mono text-sm font-bold text-stone-900 pl-6 border-l-4 border-accent uppercase">
              <li><span className="text-accent">{">"}</span> Quanto sua vida precisa custar?</li>
              <li><span className="text-accent">{">"}</span> O que você não aceita sacrificar?</li>
              <li><span className="text-accent">{">"}</span> Qual resultado você precisa gerar?</li>
              <li><span className="text-accent">{">"}</span> Quais habilidades já podem virar receita agora?</li>
              <li><span className="text-accent">{">"}</span> Que tipo de negócio você quer sustentar?</li>
            </ul>
            <p>Essa mudança parece simples. Mas muda tudo.</p>
            <p>Porque em vez de copiar a estrutura de alguém da internet e tentar sobreviver dentro dela, você cria um modelo coerente com sua ambição, sua realidade e sua capacidade atual de execução.</p>
          </div>

          <div className="pt-16">
            <h3 className="text-2xl font-display font-bold text-center mb-12 uppercase tracking-tight text-black">No SOLO, você organiza 4 camadas na ordem certa:</h3>
            <div className="grid sm:grid-cols-2 gap-0 border-2 border-stone-200">
              {[
                { phase: "01", title: "Tese", body: "A ideia central que faz o mercado entender por que seu jeito de ver o problema é diferente e mais valioso." },
                { phase: "02", title: "Promessa", body: "O resultado específico que faz sentido pro seu público e que você consegue sustentar sem parecer mais um vendedor de fantasia." },
                { phase: "03", title: "Método", body: "A lógica por trás do que você ensina, vende e entrega — de um jeito que o mercado entende e você consegue repetir." },
                { phase: "04", title: "Produtos", body: "A organização prática das ofertas que transformam sua expertise em receita sem criar um negócio confuso até pra você explicar." }
              ].map((item, i) => (
                <div key={i} className={`bg-white p-8 border-stone-200 ${i < 2 ? 'border-b-2' : ''} ${i % 2 === 0 ? 'sm:border-r-2' : ''}`}>
                  <div className="font-mono text-xs font-bold text-accent mb-4">FASE // {item.phase}</div>
                  <h4 className="text-xl font-display font-bold text-black mb-4 uppercase">{item.title}</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 text-center max-w-2xl mx-auto">
            <p className="text-2xl font-display font-bold text-black leading-snug uppercase tracking-tight">
              Sem essa base, conteúdo vira barulho.<br />
              Oferta vira tentativa.<br />
              IA vira brinquedo.<br />
              E operação vira bagunça cara.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Prova de Aplicabilidade */}
      <section className="py-32 px-6 lg:px-8 bg-white border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.05</span>
              PRÉ-REQUISITOS
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              O SOLO não é pra quem já organizou tudo. É pra quem opera de forma solta, pesada ou confusa.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-stone-500 uppercase tracking-widest">{"/// NÃO EXIGIDO"}</h3>
              <ul className="space-y-4">
                {[
                  "Audiência grande",
                  "Produto perfeitamente validado",
                  "Operação redonda",
                  "Funil montado",
                  "Equipe contratada",
                  "Rotina de máquina"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-500 text-sm font-mono uppercase line-through">
                    <X className="w-4 h-4 text-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-accent uppercase tracking-widest">{"/// OBRIGATÓRIO"}</h3>
              <ul className="space-y-4">
                {[
                  "Conhecimento real",
                  "Disposição pra organizar o que sabe",
                  "Vontade de construir um negócio mais simples"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-900 text-sm font-mono uppercase font-bold">
                    <span className="text-accent mt-0.5">[+]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-stone-50 p-8 lg:p-12 border-2 border-stone-200 text-center space-y-6 relative">
            {/* Tactical corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent -translate-x-0.5 -translate-y-0.5" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent translate-x-0.5 translate-y-0.5" />
            
            <p className="text-xl text-stone-700 leading-relaxed font-medium">
              Se hoje você pensa <span className="italic">&quot;isso parece bom, mas não sei se funciona no meu caso&quot;</span>, ótimo.<br />
              Porque essa é exatamente a objeção de quem já percebeu que não quer virar refém de mais uma metodologia bonita.
            </p>
            <p className="text-2xl font-display font-bold text-black uppercase tracking-tight">
              O SOLO foi desenhado pra te ajudar a construir tração antes do cenário ideal existir.
            </p>
          </div>
        </div>
      </section>

      {/* 6. O que você recebe */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.06</span>
              INVENTÁRIO DO SISTEMA
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              Tudo que você precisa para desenhar um negócio de uma pessoa só que vende e cabe na sua vida.
            </h2>
          </div>

          <div className="space-y-0 border-2 border-stone-200">
            {[
              {
                id: "01",
                title: "Blueprint Solo de 1 Página",
                body: "O documento que força você a definir quanto precisa gerar, que vida quer bancar, quais limites são inegociáveis e quais habilidades já podem virar receita. Uma página. Sem mapa mental. Sem brainstorm eterno. Sem fingir clareza.",
                benefit: "Você para de tomar decisão no escuro e começa a construir a partir do que realmente quer sustentar."
              },
              {
                id: "02",
                title: "A Pirâmide do Negócio Solo",
                body: "Os 4 níveis que determinam se o mercado te leva a sério ou te joga no bolo dos esquecíveis: tese, promessa, método e produtos. Você entende o que está faltando, o que está torto e o que precisa ser organizado primeiro.",
                benefit: "Em vez de tentar crescer na força, você passa a ter uma estrutura que o mercado consegue entender."
              },
              {
                id: "03",
                title: "Engenharia de Atenção",
                body: "Como abrir posts e stories de um jeito que faz a pessoa parar nos primeiros segundos — sem depender de trend, frase reciclada ou teatrinho de internet.",
                benefit: "Seu conteúdo para de parecer “mais um perfil tentando ensinar alguma coisa” e começa a prender atenção com intenção."
              },
              {
                id: "04",
                title: "Conteúdo que Gera Confiança — Parte 1 e 2",
                body: "Como transformar atenção em percepção de valor real. O caminho entre “acompanho esse cara” e “eu confiaria dinheiro nele”.",
                benefit: "Você aprende a criar conteúdo que prepara compra em vez de só alimentar ego com alcance."
              },
              {
                id: "05",
                title: "Stories como Motor de Venda",
                body: "Como usar stories pra aquecer compra todos os dias sem parecer insistente, repetitivo ou um vendedor desesperado por resposta.",
                benefit: "Você transforma stories em um canal de influência e venda silenciosa — não num depósito de bastidor aleatório."
              },
              {
                id: "06",
                title: "Ofertas de R$100 a R$50.000",
                body: "Como montar uma escada de ofertas simples, clara e coerente — sem criar nove produtos, quatorze promessas e uma operação que nem você entende mais.",
                benefit: "Você passa a vender com lógica, progressão e clareza de valor."
              },
              {
                id: "07",
                title: "Alavancagem com IA",
                body: "Como usar IA para pensar melhor, decidir mais rápido, produzir com mais consistência e executar sem depender de equipe. Sem misticismo. Sem “prompt mágico”. Sem automatizar porcaria.",
                benefit: "Você usa IA como alavanca de operador inteligente, não como muleta de procrastinador tecnológico."
              },
              {
                id: "B1",
                title: "[Bônus] Arquiteto Solo GPT",
                body: "Um agente customizado para te ajudar a estruturar posicionamento, método e ofertas dentro da lógica do SOLO.",
                benefit: "Você acelera raciocínio, clareza e execução com um suporte que conversa com o modelo da própria oferta.",
                isBonus: true
              },
              {
                id: "B2",
                title: "[Bônus] Exemplo de Posicionamento Completo",
                body: "Um exemplo pronto, visual e aplicado de tese, promessa, método e produtos organizados do jeito certo.",
                benefit: "Você não precisa imaginar como isso deveria parecer. Você vê montado e modela em cima.",
                isBonus: true
              }
            ].map((module, i, arr) => (
              <div key={i} className={`p-8 ${i !== arr.length - 1 ? 'border-b-2 border-stone-200' : ''} ${module.isBonus ? 'bg-stone-100' : 'bg-white'}`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight">{module.title}</h3>
                  <span className={`font-mono text-xs font-bold px-2 py-1 ${module.isBonus ? 'bg-accent text-white' : 'border border-stone-300 text-stone-500'}`}>
                    {"MOD."}{module.id}
                  </span>
                </div>
                <p className="text-lg text-stone-700 leading-relaxed mb-6 font-medium">{module.body}</p>
                <div className="bg-stone-50 p-4 text-stone-900 font-mono text-sm uppercase flex items-start gap-3 border-l-4 border-accent font-bold">
                  <span className="mt-0.5 text-accent">{">"}</span>
                  <p>{module.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Transformação */}
      <section className="py-32 px-6 lg:px-8 bg-white text-stone-900 border-b-2 border-stone-200">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 bg-accent text-white mr-4">SEC.07</span>
              IMPACTO OPERACIONAL
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-tight uppercase text-black">
              De um negócio dependente da sua energia… para um negócio desenhado com lógica e poder de repetição.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-stone-200">
            <div className="bg-stone-50 p-8 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-stone-200">
              <h3 className="text-xl font-display font-bold text-stone-500 uppercase tracking-widest mb-8">STATUS: ANTES</h3>
              <ul className="space-y-6">
                {[
                  "Conteúdo sem direção clara",
                  "Oferta sem encaixe total",
                  "Posicionamento confuso",
                  "Operação que cresce na improvisação",
                  "Dependência do próprio humor e energia",
                  "Sensação constante de estar atrasado"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-500 text-sm font-mono uppercase">
                    <span className="text-stone-400">[-]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(227,10,23,0.1)] border-2 border-accent relative z-10 -ml-0.5 -mt-0.5 md:mt-0">
              <h3 className="text-xl font-display font-bold text-accent uppercase tracking-widest mb-8">STATUS: DEPOIS</h3>
              <ul className="space-y-6">
                {[
                  "Modelo de negócio coerente com sua vida",
                  "Mensagem mais clara pro mercado",
                  "Conteúdo com função de venda",
                  "Ofertas organizadas com lógica",
                  "Uso de IA como alavanca real",
                  "Crescimento com menos atrito operacional"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-900 text-sm font-mono uppercase font-bold">
                    <span className="text-accent">[+]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 text-center">
            <p className="text-3xl font-display font-bold tracking-tighter uppercase text-black">
              Você não vira uma máquina.<br />
              Você vira alguém com um negócio que finalmente faz sentido.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Para quem é / não é */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.08</span>
              FILTRO DE ACESSO
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              O SOLO é poderoso no público certo — e inútil no público errado
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-stone-200">
            <div className="space-y-8 p-8 lg:p-12 bg-white border-b-2 md:border-b-0 md:border-r-2 border-stone-200">
              <h3 className="text-xl font-display font-bold text-accent uppercase tracking-widest">{"/// AUTORIZADO SE:"}</h3>
              <ul className="space-y-6">
                {[
                  "Você é criador, expert ou prestador de serviço",
                  "Já tem conhecimento real, mas monetiza abaixo do que poderia",
                  "Quer vender mais sem virar gestor de equipe cedo demais",
                  "Quer usar conteúdo e IA com lógica de negócio",
                  "Quer simplicidade sem mediocridade",
                  "Quer crescer sem construir uma vida que não aguenta"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-900 text-sm font-mono uppercase font-bold">
                    <span className="text-accent">[+]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 p-8 lg:p-12 bg-stone-100">
              <h3 className="text-xl font-display font-bold text-stone-500 uppercase tracking-widest">{"/// NEGADO SE:"}</h3>
              <ul className="space-y-6">
                {[
                  "Você quer fórmula mágica",
                  "Quer terceirizar pensamento",
                  "Quer uma operação inflada pra parecer maior do que é",
                  "Acha que complexidade é sinal de sofisticação",
                  "Procura entretenimento, não execução",
                  "Quer continuar copiando modinha do mercado"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-stone-500 text-sm font-mono uppercase">
                    <X className="w-4 h-4 mt-0.5 text-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Objeções */}
      <section className="py-32 px-6 lg:px-8 bg-white border-b-2 border-stone-200">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-8 text-center">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.09</span>
              RESOLUÇÃO DE CONFLITOS
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              As dúvidas que passam na sua cabeça agora provavelmente são essas
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                q: "“Mas isso funciona se eu ainda não tenho uma audiência grande?”",
                a: "Sim. Porque o SOLO não depende de fama. Ele depende de clareza, estrutura e capacidade de transformar conhecimento em uma proposta que o mercado entende.\n\nAudiência ajuda.\nMas audiência em cima de mensagem confusa só acelera confusão."
              },
              {
                q: "“E se minha oferta ainda não estiver validada?”",
                a: "Melhor ainda resolver isso antes de sair escalando coisa torta.\n\nO SOLO te ajuda justamente a organizar tese, promessa, método e produtos com lógica — em vez de tentar empurrar uma oferta mal pensada com mais conteúdo."
              },
              {
                q: "“Eu sou bom no que faço, mas sou desorganizado. Ainda serve?”",
                a: "Esse é o perfil clássico de quem mais se beneficia daqui.\n\nO SOLO não foi criado para pessoas perfeitamente arrumadas.\nFoi criado para gente capaz, mas travada em excesso de ideia, excesso de possibilidade e pouca estrutura real."
              },
              {
                q: "“Isso é mais uma metodologia bonita que só parece boa no papel?”",
                a: "Não. Porque o ponto de partida do SOLO não é estética de negócio. É vida real.\n\nVocê começa pelos números que precisa gerar, pelos limites que não aceita sacrificar e pelas habilidades que já tem.\nIsso obriga o negócio a nascer com mais realidade do que fantasia."
              },
              {
                q: "“Vou precisar de equipe, funil ou lançamento pra fazer funcionar?”",
                a: "Não. A proposta aqui é exatamente o contrário:\n\norganizar um negócio que pode crescer com inteligência operacional, usando conteúdo, ofertas e IA — sem inflar sua estrutura antes da hora."
              }
            ].map((faq, i) => (
              <div key={i} className="space-y-4 border-l-4 border-accent pl-6">
                <h3 className="text-xl font-display font-bold text-black uppercase tracking-tight">
                  <span className="font-mono text-accent mr-2">Q:</span>
                  {faq.q}
                </h3>
                <div className="text-lg text-stone-700 leading-relaxed whitespace-pre-line font-medium">
                  <span className="font-mono text-black font-bold mr-2">A:</span>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Oferta Final */}
      <section id="offer" className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.10</span>
              PROTOCOLO DE ENTRADA
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              Entre no SOLO hoje
            </h2>
            <p className="text-xl text-stone-700 leading-relaxed font-medium">
              Acesso imediato ao método completo para construir um negócio de uma pessoa só que financia sua vida, organiza sua mensagem, fortalece suas ofertas e reduz dependência de operação pesada.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white border-4 border-accent p-8 lg:p-12 relative">
            {/* Tactical corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-accent -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-accent translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-accent -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-accent translate-x-1 translate-y-1" />

            <h3 className="text-xl font-display font-bold text-black uppercase tracking-widest mb-6 border-b-2 border-stone-200 pb-4">
              {"/// PACOTE DE ACESSO"}
            </h3>
            <ul className="space-y-4 mb-12">
              {[
                "Blueprint Solo de 1 Página",
                "A Pirâmide do Negócio Solo",
                "Engenharia de Atenção",
                "Conteúdo que Gera Confiança Parte 1 e 2",
                "Stories como Motor de Venda",
                "Ofertas de R$100 a R$50.000",
                "Alavancagem com IA",
                "[Bônus] Arquiteto Solo GPT",
                "[Bônus] Exemplo de Posicionamento Completo"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-800 font-mono text-sm uppercase font-bold">
                  <span className="text-accent">[+]</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="text-center space-y-2 mb-8 border-y-2 border-stone-200 py-8 my-8 bg-stone-50">
              <p className="font-mono text-stone-500 line-through text-xl">R$697</p>
              <p className="text-6xl font-display font-bold tracking-tighter text-black">R$497</p>
              <p className="font-mono text-stone-700 font-bold text-sm uppercase">ou 12x de R$49,42</p>
            </div>

            <Link 
              href="https://chk.eduzz.com/8WPNONOY0P" 
              className="block w-full border-2 border-accent bg-accent text-white text-center py-5 text-lg font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors duration-300 mb-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              [ CONFIRMAR ACESSO ]
            </Link>
            <p className="font-mono text-xs text-center text-stone-500 font-bold uppercase tracking-widest">
              {"PAGAMENTO ÚNICO // ACESSO IMEDIATO"}
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-4 pt-8">
            <h4 className="text-2xl font-display font-bold text-black uppercase tracking-tight">O maior risco aqui não é entrar</h4>
            <p className="text-lg text-stone-700 leading-relaxed font-medium">
              É continuar tentando crescer com um negócio que exige mais energia do que deveria, comunica pior do que poderia e vende menos do que já tem condição de vender.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Fechamento Emocional */}
      <section className="py-32 px-6 lg:px-8 bg-white text-stone-900 text-center border-b-2 border-stone-200">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="px-2 py-1 bg-accent text-white mr-4">SEC.11</span>
            VERDADE SIMPLES
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-tight uppercase text-black">
            Você não precisa de um negócio maior. Você precisa de um negócio mais coerente.
          </h2>
          
          <div className="text-xl text-stone-600 leading-relaxed space-y-8 font-medium">
            <p className="font-bold text-stone-500 font-mono text-sm uppercase leading-loose">
              <span className="text-accent">{">"}</span> Mais gente.<br />
              <span className="text-accent">{">"}</span> Mais ferramenta.<br />
              <span className="text-accent">{">"}</span> Mais etapa.<br />
              <span className="text-accent">{">"}</span> Mais funil.<br />
              <span className="text-accent">{">"}</span> Mais reunião.<br />
              <span className="text-accent">{">"}</span> Mais estrutura.
            </p>
            <p>Nada disso corrige um modelo mal pensado.</p>
            <p>O que corrige é construir um negócio que nasce da vida que você quer bancar, da forma como você quer operar e do tipo de crescimento que você consegue sustentar sem se perder dentro dele.</p>
            <p>É isso que o SOLO entrega.</p>
            <p className="font-bold text-stone-500 font-mono text-sm uppercase leading-loose">
              <span className="text-stone-400">[-]</span> Não uma fantasia de escala.<br />
              <span className="text-stone-400">[-]</span> Não uma performance bonita.<br />
              <span className="text-stone-400">[-]</span> Não uma operação pra impressionar internet.
            </p>
            <p className="text-2xl font-display font-bold text-black uppercase tracking-tight">
              Um modelo de negócio solo, claro e lucrativo, que não desaba na primeira semana ruim.
            </p>
          </div>

          <div className="pt-8 flex flex-col items-center gap-4">
            <Link 
              href="#offer" 
              className="inline-block border-2 border-accent bg-accent text-white px-12 py-5 text-lg font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors duration-300"
            >
              [ ENTRAR NO SOLO ]
            </Link>
            <p className="font-mono text-xs text-stone-500 font-bold uppercase tracking-widest">
              {"ACESSO IMEDIATO // R$497"}
            </p>
          </div>
        </div>
      </section>

      {/* 12. Rodapé de Convicção */}
      <footer className="py-24 px-6 lg:px-8 bg-black text-center border-t-4 border-stone-900">
        <div className="max-w-3xl mx-auto space-y-4 font-mono uppercase tracking-widest">
          <p className="text-lg lg:text-xl font-bold text-stone-400">Negócio solo não é negócio pequeno.</p>
          <p className="text-lg lg:text-xl font-bold text-stone-300">É negócio inteligente.</p>
          <p className="text-lg lg:text-xl font-bold text-white">Desde que seja construído da forma certa.</p>
          
          <div className="pt-16 mt-16 border-t border-stone-900 text-stone-600 text-xs space-y-4">
            <p>{"END OF TRANSMISSION // SOLO PROTOCOL"}</p>
            <p>&copy; {new Date().getFullYear()} Lagares Ventures Ltda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
