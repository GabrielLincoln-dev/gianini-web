import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Gianini Web" },
      { name: "description", content: "Política de Privacidade da Gianini Web em conformidade com a LGPD." },
      { property: "og:title", content: "Política de Privacidade — Gianini Web" },
      { property: "og:description", content: "Como tratamos seus dados pessoais conforme a Lei Geral de Proteção de Dados." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-6 prose-invert">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="size-4" /> Voltar ao início
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-muted-foreground">Última atualização: 23 de junho de 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Controlador dos dados</h2>
              <p>
                A <strong>Gianini Web</strong>, com endereço na Rua Jacarandás, 645 — Arujá/SP,
                é a controladora dos dados pessoais coletados por meio deste site, nos termos da
                Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Dados que coletamos</h2>
              <p>Quando você preenche nosso formulário de contato, coletamos:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Nome completo</li>
                <li>Nome da empresa</li>
                <li>Endereço de e-mail</li>
                <li>Número de WhatsApp</li>
                <li>Descrição da necessidade ou projeto informada por você</li>
              </ul>
              <p className="mt-3">
                Não utilizamos cookies de rastreamento, pixels de marketing ou ferramentas de
                analytics que coletem dados pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Finalidade do tratamento</h2>
              <p>
                Os dados são utilizados exclusivamente para entrar em contato com você, entender
                sua demanda e apresentar uma proposta comercial. Não comercializamos, alugamos ou
                compartilhamos seus dados com terceiros para fins de marketing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Base legal</h2>
              <p>
                O tratamento dos seus dados ocorre com base no <strong>consentimento</strong>
                expresso (art. 7º, I da LGPD), manifestado ao marcar a caixa de aceite no
                formulário, e em <strong>procedimentos preliminares relacionados a contrato</strong>
                (art. 7º, V da LGPD).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Como os dados são enviados</h2>
              <p>
                Ao enviar o formulário, suas informações são transmitidas diretamente para nosso
                número de WhatsApp por meio do aplicativo WhatsApp (operado pela Meta Platforms,
                Inc.). Recomendamos a leitura da política de privacidade do WhatsApp para
                informações sobre o tratamento durante a transmissão.
              </p>
              <p className="mt-3">
                Nenhum dado é armazenado em servidor próprio ou banco de dados deste site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Retenção</h2>
              <p>
                Mantemos as conversas e dados pelo tempo necessário ao atendimento da sua
                solicitação e cumprimento de obrigações legais. Você pode solicitar a exclusão
                a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Seus direitos (art. 18 da LGPD)</h2>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade;</li>
                <li>Eliminação dos dados tratados com base no consentimento;</li>
                <li>Revogação do consentimento;</li>
                <li>Informação sobre compartilhamento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contato — Encarregado (DPO)</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas, entre em contato pelo
                WhatsApp <strong>+55 11 96563-6396</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Alterações</h2>
              <p>
                Esta política pode ser atualizada a qualquer momento. Recomendamos revisão
                periódica desta página.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
