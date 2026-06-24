"use client";

import { useEffect } from "react";
import "./mabi.css";

export default function MabiPage() {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const handlers: Array<{ el: HTMLAnchorElement; fn: (e: Event) => void }> = [];
    anchors.forEach((anchor) => {
      const fn = (e: Event) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href")!);
        target?.scrollIntoView({ behavior: "smooth" });
      };
      anchor.addEventListener("click", fn);
      handlers.push({ el: anchor, fn });
    });

    const header = document.querySelector<HTMLElement>("header");
    const handleScroll = () => {
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add("bg-[#121414]/95");
        header.classList.remove("bg-[#121414]/90");
      } else {
        header.classList.add("bg-[#121414]/90");
        header.classList.remove("bg-[#121414]/95");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@400;500;700&family=JetBrains+Mono:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <div className="font-['Work_Sans'] text-[16px]/[1.6] overflow-x-hidden">
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 bg-[#121414]/90 backdrop-blur-md border-b border-[#5e3f3b] shadow-md">
          <nav className="flex justify-between items-center px-[24px] py-4 max-w-[1280px] mx-auto">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb4aa]">restaurant</span>
              <span className="font-[Anton] text-[36px]/[1.2] text-[#ffb4aa] tracking-tight md:font-[Anton] md:text-[48px]/[1.1]">
                MABI
              </span>
            </div>
            <a
              className="font-['JetBrains_Mono'] text-[12px]/[1.2] font-medium bg-[#e61919] text-[#fffbff] px-6 py-2 rounded-[0.75rem] font-bold hover:opacity-80 transition-opacity active:scale-95 duration-150 uppercase tracking-widest"
              href="https://wa.me/your-number"
            >
              PEDIR WHATSAPP
            </a>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section
            className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-[80px] px-[16px] md:px-[24px] bg-fixed bg-cover bg-center"
            id="hero"
            style={{ backgroundImage: "url('/madeira.jpg')" }}
          >
            <div className="absolute inset-0 wood-overlay"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <img
                alt="MABI Logo"
                className="w-48 md:w-64 mx-auto mb-10 drop-shadow-2xl"
                src="/mabi/logo.png"
              />
              <h1 className="font-[Anton] text-[36px]/[1.2] md:font-[Anton] md:text-[64px]/[1.1] md:tracking-[0.02em] text-[#e2e2e2] mb-6 uppercase">
                Cortes Premium que transformam seu <span className="text-[#e61919]">churrasco</span> em um evento
              </h1>
              <p className="font-['Work_Sans'] text-[18px]/[1.6] text-[#e8bcb6] mb-12 max-w-2xl mx-auto">
                A melhor seleção de carnes da região, com procedência garantida e frescor inigualável, entregue
                direto na sua casa.
              </p>
              <a
                className="inline-flex items-center gap-4 bg-[#fabd00] text-[#6a4e00] px-10 py-6 rounded-[0.25rem] font-[Anton] text-[32px]/[1.2] btn-inner-shadow hover:bg-[#fabd00] transition-all active:scale-95"
                href="#"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  add_shopping_cart
                </span>
                FAZER PEDIDO VIA WHATSAPP
              </a>
            </div>
          </section>

          {/* Diferenciais */}
          <section className="bg-[#0c0f0f] py-[80px] border-y border-[#5e3f3b]">
            <div className="max-w-[1280px] mx-auto px-[24px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Diferencial 1 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 flex items-center justify-center rounded-[0.75rem] bg-[#282a2b] border border-[#5e3f3b] mb-6 group-hover:border-[#ffb4aa] transition-colors">
                    <span className="material-symbols-outlined text-[#ffdf9e] text-4xl">workspace_premium</span>
                  </div>
                  <h3 className="font-[Anton] text-[32px]/[1.2] text-[#e2e2e2] mb-2 uppercase">Cortes Nobres</h3>
                  <p className="font-['Work_Sans'] text-[16px]/[1.6] text-[#e8bcb6]">
                    Seleção rigorosa de gado de primeira, garantindo maciez e marmoreio superior.
                  </p>
                </div>
                {/* Diferencial 2 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 flex items-center justify-center rounded-[0.75rem] bg-[#282a2b] border border-[#5e3f3b] mb-6 group-hover:border-[#ffb4aa] transition-colors">
                    <span className="material-symbols-outlined text-[#ffdf9e] text-4xl">clean_hands</span>
                  </div>
                  <h3 className="font-[Anton] text-[32px]/[1.2] text-[#e2e2e2] mb-2 uppercase">Higiene Rigorosa</h3>
                  <p className="font-['Work_Sans'] text-[16px]/[1.6] text-[#e8bcb6]">
                    Processos artesanais seguindo os mais altos padrões de segurança e limpeza.
                  </p>
                </div>
                {/* Diferencial 3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 flex items-center justify-center rounded-[0.75rem] bg-[#282a2b] border border-[#5e3f3b] mb-6 group-hover:border-[#ffb4aa] transition-colors">
                    <span className="material-symbols-outlined text-[#ffdf9e] text-4xl">local_shipping</span>
                  </div>
                  <h3 className="font-[Anton] text-[32px]/[1.2] text-[#e2e2e2] mb-2 uppercase">Entrega Rápida</h3>
                  <p className="font-['Work_Sans'] text-[16px]/[1.6] text-[#e8bcb6]">
                    Sua carne chega fresca e pronta para o fogo, com rapidez e embalagem a vácuo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Vitrine Food Porn */}
          <section className="py-[80px] bg-[#121414]">
            <div className="max-w-4xl mx-auto px-[16px] md:px-[24px]">
              <div className="text-center mb-16">
                <span className="font-['JetBrains_Mono'] text-[12px]/[1.2] font-medium text-[#ffb4aa] uppercase tracking-widest border-b border-[#ffb4aa]/30 pb-2">
                  Nossa Seleção Mabi
                </span>
                <h2 className="font-[Anton] text-[64px]/[1.1] tracking-[0.02em] mt-4 uppercase">
                  Cortes do Especialista
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-12">
                {/* Card 1: Picanha */}
                <div className="premium-card flex flex-col md:flex-row overflow-hidden rounded-[0.5rem] group">
                  <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                    <img
                      alt="Picanha Premium"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="/mabi/picanha.jpg"
                    />
                  </div>
                  <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-[10px] border border-[#ffdf9e] text-[#ffdf9e] rounded-[0.125rem] uppercase font-bold tracking-tighter">
                        O Carro Chefe
                      </span>
                      <span
                        className="material-symbols-outlined text-[#fabd00] text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    </div>
                    <h3 className="font-[Anton] text-[48px]/[1.1] text-[#e2e2e2] mb-4 uppercase">Picanha Premium</h3>
                    <p className="font-['Work_Sans'] text-[16px]/[1.6] text-[#e8bcb6] mb-8">
                      Capa de gordura uniforme, sabor intenso e maciez incomparável. O corte obrigatório para
                      qualquer churrasqueiro exigente.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-['JetBrains_Mono'] text-[32px]/[1.2] text-[#ffdf9e]">R$ --,--</span>
                      <button className="bg-[#e61919] text-[#fffbff] px-6 py-3 rounded-[0.125rem] font-bold uppercase tracking-wider hover:bg-[#930006] transition-colors">
                        PEDIR ESTE CORTE
                      </button>
                    </div>
                  </div>
                </div>
                {/* Card 2: Costela */}
                <div className="premium-card flex flex-col md:flex-row-reverse overflow-hidden rounded-[0.5rem] group">
                  <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                    <img
                      alt="Costela 12h"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="/mabi/costela.jpg"
                    />
                  </div>
                  <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-[10px] border border-[#ffdf9e] text-[#ffdf9e] rounded-[0.125rem] uppercase font-bold tracking-tighter">
                        Slow Food
                      </span>
                    </div>
                    <h3 className="font-[Anton] text-[48px]/[1.1] text-[#e2e2e2] mb-4 uppercase">Costela 12h</h3>
                    <p className="font-['Work_Sans'] text-[16px]/[1.6] text-[#e8bcb6] mb-8">
                      Cozimento lento, carne que desmancha no garfo. Sabor defumado e textura amanteigada para
                      momentos especiais.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-['JetBrains_Mono'] text-[32px]/[1.2] text-[#ffdf9e]">R$ --,--</span>
                      <button className="bg-[#e61919] text-[#fffbff] px-6 py-3 rounded-[0.125rem] font-bold uppercase tracking-wider hover:bg-[#930006] transition-colors">
                        PEDIR ESTE CORTE
                      </button>
                    </div>
                  </div>
                </div>
                {/* Card 3: Burger */}
                <div className="premium-card flex flex-col md:flex-row overflow-hidden rounded-[0.5rem] group">
                  <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                    <img
                      alt="Blend Artesanal"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src="/mabi/burger.jpg"
                    />
                  </div>
                  <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-[10px] border border-[#ffdf9e] text-[#ffdf9e] rounded-[0.125rem] uppercase font-bold tracking-tighter">
                        Burger Night
                      </span>
                    </div>
                    <h3 className="font-[Anton] text-[48px]/[1.1] text-[#e2e2e2] mb-4 uppercase">Blend Artesanal</h3>
                    <p className="font-['Work_Sans'] text-[16px]/[1.6] text-[#e8bcb6] mb-8">
                      O segredo está no blend. Carnes frescas moídas diariamente com a proporção perfeita de gordura
                      para o burger perfeito.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-['JetBrains_Mono'] text-[32px]/[1.2] text-[#ffdf9e]">R$ --,--</span>
                      <button className="bg-[#e61919] text-[#fffbff] px-6 py-3 rounded-[0.125rem] font-bold uppercase tracking-wider hover:bg-[#930006] transition-colors">
                        PEDIR ESTE CORTE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Localização & Horário */}
          <section className="relative py-[80px] overflow-hidden">
            <div
              className="absolute inset-0 z-0 opacity-20 grayscale pointer-events-none"
              style={{
                backgroundImage: "url('/mabi/location-bg.jpg')",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="max-w-[1280px] mx-auto px-[24px] relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="font-[Anton] text-[64px]/[1.1] tracking-[0.02em] text-[#e2e2e2] uppercase mb-8">
                    ONDE NOS ENCONTRAR
                  </h2>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-[#e61919] p-3 rounded-[0.75rem] shrink-0">
                        <span className="material-symbols-outlined text-[#fffbff]">location_on</span>
                      </div>
                      <div>
                        <h4 className="font-[Anton] text-[32px]/[1.2] text-[#ffdf9e] uppercase mb-2">
                          Nosso Endereço
                        </h4>
                        <p className="font-['Work_Sans'] text-[18px]/[1.6] text-[#e2e2e2]">
                          Rua das Carnes, 123 - Centro
                          <br />
                          Açougue Mabi Premium
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="bg-[#e61919] p-3 rounded-[0.75rem] shrink-0">
                        <span className="material-symbols-outlined text-[#fffbff]">schedule</span>
                      </div>
                      <div>
                        <h4 className="font-[Anton] text-[32px]/[1.2] text-[#ffdf9e] uppercase mb-2">
                          Horário de Funcionamento
                        </h4>
                        <ul className="font-['Work_Sans'] text-[18px]/[1.6] text-[#e2e2e2] space-y-1">
                          <li>
                            Segunda a Sábado: <span className="font-bold">08h às 20h</span>
                          </li>
                          <li>
                            Domingo: <span className="font-bold text-[#ffb4aa]">08h às 14h</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Fake Map Area */}
                <div className="h-[400px] bg-[#282a2b] rounded-[0.5rem] border border-[#5e3f3b] flex items-center justify-center relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-46.6333,-23.5505,15,0/800x400?access_token=none')] bg-cover bg-center filter grayscale contrast-125 opacity-50 group-hover:scale-110 transition-transform duration-[2s]"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#e61919] rounded-[0.75rem] flex items-center justify-center shadow-lg animate-bounce">
                      <span className="material-symbols-outlined text-[#fffbff] text-4xl">location_on</span>
                    </div>
                    <span className="mt-4 bg-[#121414] px-4 py-2 rounded-[0.125rem] border border-[#5e3f3b] font-['JetBrains_Mono'] text-[12px]/[1.2] font-medium text-[#e2e2e2] uppercase font-bold">
                      Ver no Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-[#e61919] py-16">
            <div className="max-w-[1280px] mx-auto px-[24px] text-center">
              <h3 className="font-[Anton] text-[48px]/[1.1] text-[#fffbff] uppercase mb-8">
                NÃO DEIXE PARA DEPOIS. GARANTA A MELHOR CARNE AGORA!
              </h3>
              <a
                className="inline-flex items-center gap-4 bg-[#121414] text-[#e2e2e2] px-12 py-5 rounded-[0.25rem] font-[Anton] text-[32px]/[1.2] hover:bg-[#38393a] transition-all shadow-xl active:scale-95"
                href="#"
              >
                <span className="material-symbols-outlined">message</span>
                CHAMAR NO WHATSAPP
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full pt-[80px] pb-[24px] bg-[#0c0f0f] border-t border-[#5e3f3b]">
          <div className="flex flex-col items-center text-center space-y-4 px-[16px] md:px-[24px] max-w-[1280px] mx-auto">
            <div className="font-[Anton] text-[32px]/[1.2] text-[#ffb4aa] uppercase">MABI</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full py-8 text-[#e8bcb6] font-['Work_Sans'] border-y border-[#5e3f3b]/20 mb-8">
              <span className="cursor-pointer hover:text-[#fabd00] transition-colors">Rua das Carnes, 123 - Centro</span>
              <span className="cursor-pointer hover:text-[#fabd00] transition-colors">Seg-Sáb: 08h às 20h</span>
              <span className="cursor-pointer hover:text-[#fabd00] transition-colors">Dom: 08h às 14h</span>
              <span className="cursor-pointer hover:text-[#fabd00] transition-colors">Política de Privacidade</span>
            </div>
            <p className="font-['Work_Sans'] text-[16px]/[1.6] text-[#e8bcb6] opacity-60">
              © 2024 Açougue Mabi - Artesanal &amp; Premium. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                className="w-10 h-10 flex items-center justify-center rounded-[0.75rem] bg-[#1e2020] border border-[#5e3f3b] hover:border-[#ffb4aa] transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
              <a
                className="w-10 h-10 flex items-center justify-center rounded-[0.75rem] bg-[#1e2020] border border-[#5e3f3b] hover:border-[#ffb4aa] transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
