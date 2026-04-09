import { X } from "lucide-react";
import Link from "next/link";

export default function SoloV2Page() {
  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans selection:bg-accent selection:text-white">
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
            Chega de ganhar MENOS dinheiro do que profissionais PIORES que você.
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl font-medium mx-auto">
            Você trabalha mais. Entrega melhor. Sabe mais. Mas continua travado entre R$6k e R$12k… porque não sabe transformar o que faz em
            marketing que vende. Enquanto isso, gente mais fraca cresce mais rápido. O problema não é sua habilidade. É que você virou o
            “bonzinho” do mercado.
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
              <span className="text-accent">{">"}</span> Você não começa por nicho.
              <br />
              <span className="text-accent">{">"}</span> Nem por conteúdo.
              <br />
              <span className="text-accent">{">"}</span> Nem por tática.
              <br />
              <span className="text-accent">{">"}</span> Você começa pela sua vida.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Identificação */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.02</span>
            RECONHECIMENTO DE CAMPO
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
            O problema não é sua habilidade. É que você virou o “bonzinho” do mercado.
          </h2>

          <div className="text-xl text-stone-700 leading-relaxed space-y-8 text-left font-medium">
            <p className="font-bold text-black">
              O cara que:
              <br />
              aceita tudo
              <br />
              cobra mal
              <br />
              não se posiciona
              <br />e não sabe fazer marketing direito
            </p>
            <p className="font-mono text-sm uppercase tracking-widest text-accent border-b-2 border-stone-200 pb-2 inline-block">E aí acontece o pior:</p>
            <p className="font-bold text-black">
              Você depende de indicação, sorte ou esforço excessivo pra conseguir cliente. Nada é previsível. Nada escala. Tudo depende de você.
            </p>
            <p>Você não tem um negócio. Você tem um monte de coisa funcionando mais ou menos.</p>
            <p>
              E no fim do mês? Você até ganha um dinheiro. Mas nunca sabe se vai repetir. Nunca sabe de onde vem o próximo cliente. Nunca sabe
              se dá pra respirar.
            </p>
          </div>

          <div className="pt-12 border-t-2 border-stone-200 text-left">
            <p className="text-2xl font-display font-bold text-black leading-snug uppercase tracking-tight">
              E no fundo, sabe de uma coisa:
              <br />
              Você devia estar muito melhor do que isso.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Lógica */}
      <section className="py-32 px-6 lg:px-8 bg-white text-stone-900 border-b-2 border-stone-200">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-8">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 bg-accent text-white mr-4">SEC.03</span>
              FALHA ESTRUTURAL DETECTADA
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-tight uppercase text-black">
              Porque você tentou escalar um negócio que nunca foi organizado.
            </h2>
            <div className="text-xl text-stone-600 leading-relaxed space-y-6">
              <p>
                Agora presta atenção: O problema não é esforço. É estrutura. Você tentou crescer: postando mais, pensando mais, refinando mais,
                consumindo mais conteúdo. E nada encaixou.
              </p>
              <p className="text-stone-500 font-mono text-sm uppercase leading-loose">
                <span className="text-accent">{">"}</span> Escolhe um nicho
                <br />
                <span className="text-accent">{">"}</span> Começa a postar
                <br />
                <span className="text-accent">{">"}</span> Tenta vender
                <br />
                <span className="text-accent">{">"}</span> Nada funciona
                <br />
                <span className="text-accent">{">"}</span> Ajusta tudo
                <br />
                <span className="text-accent">{">"}</span> E continua perdido
              </p>
              <p className="font-bold text-black">
                Isso é construir errado desde o começo.
                <br />
                Você começa pela aparência… e ignora a base.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 pt-12 border-t-2 border-stone-200">
            <div className="space-y-8 p-8 border-2 border-stone-200 bg-stone-50">
              <h3 className="text-xl font-display font-bold text-stone-500 uppercase tracking-widest line-through">{"/// MODO ANTIGO"}</h3>
              <ul className="space-y-6">
                {[
                  "E é por isso que gente pior ganha mais",
                  "Não porque é melhor",
                  "Mas porque tem um modelo mais simples e claro",
                  "Enquanto você tem potencial…",
                  "mas vive numa bagunça",
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
                  "Agora vem a virada: existe um jeito de organizar isso",
                  "Sem equipe",
                  "Sem funil complexo",
                  "Sem depender de motivação",
                  "Um modelo simples que transforma o que você já sabe em receita previsível",
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
            <p className="text-3xl font-display font-bold tracking-tighter uppercase text-black">Eu chamo isso de SOLO.</p>
          </div>
        </div>
      </section>

      {/* 4. Arquitetura */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.04</span>
              ARQUITETURA DO SISTEMA
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              O SOLO é um sistema pra construir um negócio de uma pessoa só que funciona de verdade.
            </h2>
          </div>

          <div className="text-xl text-stone-700 leading-relaxed space-y-6 max-w-3xl mx-auto font-medium">
            <p>E ele começa diferente. Você não começa por nicho. Nem por conteúdo. Nem por tática. Você começa pela sua vida.</p>
            <ul className="space-y-2 font-mono text-sm font-bold text-stone-900 pl-6 border-l-4 border-accent uppercase">
              <li>
                <span className="text-accent">{">"}</span> quanto precisa ganhar
              </li>
              <li>
                <span className="text-accent">{">"}</span> o que não aceita sacrificar
              </li>
              <li>
                <span className="text-accent">{">"}</span> como quer operar
              </li>
            </ul>
            <p>E constrói o negócio a partir disso.</p>
          </div>

          <div className="pt-16">
            <h3 className="text-2xl font-display font-bold text-center mb-12 uppercase tracking-tight text-black">No SOLO, você organiza 4 coisas:</h3>
            <div className="grid sm:grid-cols-2 gap-0 border-2 border-stone-200">
              {[
                { phase: "01", title: "Tese", body: "conteúdo vira barulho" },
                { phase: "02", title: "Promessa", body: "oferta vira tentativa" },
                { phase: "03", title: "Método", body: "marketing vira frustração" },
                { phase: "04", title: "Produtos", body: "Com isso: tudo encaixa" },
              ].map((item, i) => (
                <div key={i} className={`bg-white p-8 border-stone-200 ${i < 2 ? "border-b-2" : ""} ${i % 2 === 0 ? "sm:border-r-2" : ""}`}>
                  <div className="font-mono text-xs font-bold text-accent mb-4">FASE // {item.phase}</div>
                  <h4 className="text-xl font-display font-bold text-black mb-4 uppercase">{item.title}</h4>
                  <p className="text-stone-600 font-medium leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 text-center max-w-2xl mx-auto">
            <p className="text-2xl font-display font-bold text-black leading-snug uppercase tracking-tight">
              Você para de aceitar qualquer cliente.
              <br />
              Para de improvisar.
              <br />
              Para de depender de energia.
              <br />
              E começa a operar com clareza.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Pré-requisitos */}
      <section className="py-32 px-6 lg:px-8 bg-white border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.05</span>
              PRÉ-REQUISITOS
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              Isso não é pra iniciante.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-stone-500 uppercase tracking-widest">{"/// NÃO EXIGIDO"}</h3>
              <ul className="space-y-4">
                {[
                  "aceita tudo",
                  "cobra mal",
                  "não se posiciona",
                  "e não sabe fazer marketing direito",
                  "depender só de indicação, sorte ou esforço excessivo",
                  "viver no improviso sem organização",
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
                {["já sabe fazer algo bem", "mas ainda não organizou isso em dinheiro de verdade", "e está cansado de viver no improviso"].map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-4 text-stone-900 text-sm font-mono uppercase font-bold">
                      <span className="text-accent mt-0.5">[+]</span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="bg-stone-50 p-8 lg:p-12 border-2 border-stone-200 text-center space-y-6 relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent -translate-x-0.5 -translate-y-0.5" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent translate-x-0.5 translate-y-0.5" />

            <p className="text-xl text-stone-700 leading-relaxed font-medium">
              Se você já tentou crescer e nada encaixou… o problema não era você. Era o modelo. E é isso que o SOLO resolve.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Inventário */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.06</span>
              INVENTÁRIO DO SISTEMA
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              /// PACOTE DE ACESSO
            </h2>
          </div>

          <div className="space-y-0 border-2 border-stone-200">
            {[
              { id: "01", title: "Blueprint Solo de 1 Página" },
              { id: "02", title: "A Pirâmide do Negócio Solo" },
              { id: "03", title: "Engenharia de Atenção" },
              { id: "04", title: "Conteúdo que Gera Confiança Parte 1 e 2" },
              { id: "05", title: "Stories como Motor de Venda" },
              { id: "06", title: "Ofertas de R$100 a R$50.000" },
              { id: "07", title: "Alavancagem com IA" },
              { id: "B1", title: "[Bônus] Arquiteto Solo GPT", isBonus: true },
              { id: "B2", title: "[Bônus] Exemplo de Posicionamento Completo", isBonus: true },
            ].map((module, i, arr) => (
              <div
                key={i}
                className={`p-8 ${i !== arr.length - 1 ? "border-b-2 border-stone-200" : ""} ${module.isBonus ? "bg-stone-100" : "bg-white"}`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-display font-bold text-black uppercase tracking-tight">{module.title}</h3>
                  <span className={`font-mono text-xs font-bold px-2 py-1 ${module.isBonus ? "bg-accent text-white" : "border border-stone-300 text-stone-500"}`}>
                    {"MOD."}
                    {module.id}
                  </span>
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
              O problema não é esforço. É estrutura.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-stone-200">
            <div className="bg-stone-50 p-8 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-stone-200">
              <h3 className="text-xl font-display font-bold text-stone-500 uppercase tracking-widest mb-8">STATUS: ANTES</h3>
              <ul className="space-y-6">
                {[
                  "Nada é previsível",
                  "Nada escala",
                  "Tudo depende de você",
                  "Você tem um monte de coisa funcionando mais ou menos",
                  "Nunca sabe se dá pra respirar",
                  "Consumindo mais conteúdo e nada encaixa",
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
                  "Um modelo simples que transforma o que você já sabe em receita previsível",
                  "Organiza Tese, Promessa, Método e Produtos",
                  "Com isso: tudo encaixa",
                  "Você para de aceitar qualquer cliente",
                  "Para de improvisar e de depender de energia",
                  "E começa a operar com clareza",
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
              E é isso que o SOLO resolve.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Filtro */}
      <section className="py-32 px-6 lg:px-8 bg-stone-50 border-b-2 border-stone-200">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.08</span>
              FILTRO DE ACESSO
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              É pra quem já sabe fazer algo bem — e está cansado de viver no improviso
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-stone-200">
            <div className="space-y-8 p-8 lg:p-12 bg-white border-b-2 md:border-b-0 md:border-r-2 border-stone-200">
              <h3 className="text-xl font-display font-bold text-accent uppercase tracking-widest">{"/// AUTORIZADO SE:"}</h3>
              <ul className="space-y-6">
                {[
                  "já sabe fazer algo bem",
                  "mas ainda não organizou isso em dinheiro de verdade",
                  "e está cansado de viver no improviso",
                  "Se você já tentou crescer e nada encaixou…",
                  "o problema não era você",
                  "Era o modelo",
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
                  "aceita tudo",
                  "cobra mal",
                  "não se posiciona",
                  "e não sabe fazer marketing direito",
                  "depende de indicação, sorte ou esforço excessivo pra conseguir cliente",
                  "Nada é previsível, nada escala, tudo depende de você",
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

      {/* 9. Objeciones */}
      <section className="py-32 px-6 lg:px-8 bg-white border-b-2 border-stone-200">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="space-y-8 text-center">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
              <span className="px-2 py-1 border border-stone-300 mr-4 text-accent">SEC.09</span>
              RESOLUÇÃO DE CONFLITOS
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter text-black leading-tight uppercase">
              Se você já tentou crescer e nada encaixou…
            </h2>
          </div>

          <div className="space-y-12">
            <div className="space-y-4 border-l-4 border-accent pl-6">
              <h3 className="text-xl font-display font-bold text-black uppercase tracking-tight">
                <span className="font-mono text-accent mr-2">Q:</span>
                Se você já tentou crescer e nada encaixou…
              </h3>
              <div className="text-lg text-stone-700 leading-relaxed whitespace-pre-line font-medium">
                <span className="font-mono text-black font-bold mr-2">A:</span>
                {"o problema não era você.\n\nEra o modelo.\n\nE é isso que o SOLO resolve."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Oferta */}
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
              Acesso imediato ao método completo para construir um negócio de uma pessoa só que financia sua vida, organiza sua mensagem,
              fortalece suas ofertas e reduz dependência de operação pesada.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white border-4 border-accent p-8 lg:p-12 relative">
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
                "[Bônus] Exemplo de Posicionamento Completo",
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
              É continuar tentando crescer com um negócio que exige mais energia do que deveria, comunica pior do que poderia e vende menos do
              que já tem condição de vender.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Fechamento */}
      <section className="py-32 px-6 lg:px-8 bg-white text-stone-900 text-center border-b-2 border-stone-200">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="font-mono text-xs font-bold tracking-widest uppercase text-stone-500">
            <span className="px-2 py-1 bg-accent text-white mr-4">SEC.11</span>
            VERDADE SIMPLES
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-tight uppercase text-black">
            Você não precisa trabalhar mais.
          </h2>

          <div className="text-xl text-stone-600 leading-relaxed space-y-8 font-medium">
            <p className="text-2xl font-display font-bold text-black uppercase tracking-tight">Precisa parar de operar errado.</p>
            <p className="text-2xl font-display font-bold text-black uppercase tracking-tight">FIM.</p>
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
