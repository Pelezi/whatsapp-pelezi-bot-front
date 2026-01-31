import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Pelezi Bot',
  description: 'Política de privacidade do bot de WhatsApp Pelezi Bot',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 sm:px-8">
            <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
            <p className="mt-2 text-blue-100">Pelezi Bot - WhatsApp Bot</p>
          </div>

          <div className="px-6 py-8 sm:px-8 space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong>Última atualização:</strong> 31 de janeiro de 2026
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                1. Introdução
              </h2>
              <p className="leading-relaxed">
                Bem-vindo ao Pelezi Bot. Esta Política de Privacidade descreve como coletamos, 
                usamos, armazenamos e protegemos suas informações pessoais quando você utiliza 
                nosso bot de WhatsApp. Ao utilizar nosso serviço, você concorda com as práticas 
                descritas nesta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                2. Informações que Coletamos
              </h2>
              <p className="leading-relaxed mb-3">
                Coletamos as seguintes informações quando você interage com nosso bot:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Informações de Identificação:</strong> Número de telefone do WhatsApp, 
                  nome de perfil e informações fornecidas durante as conversas.
                </li>
                <li>
                  <strong>Mensagens:</strong> Conteúdo das mensagens enviadas e recebidas através 
                  do bot, incluindo texto, imagens e outros arquivos.
                </li>
                <li>
                  <strong>Dados de Uso:</strong> Informações sobre como você interage com o bot, 
                  incluindo horários de uso, frequência de mensagens e comandos utilizados.
                </li>
                <li>
                  <strong>Dados de Projeto:</strong> Informações relacionadas aos projetos que você 
                  consulta ou com os quais interage através do bot.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                3. Como Usamos Suas Informações
              </h2>
              <p className="leading-relaxed mb-3">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e operar nosso serviço de bot do WhatsApp</li>
                <li>Processar e responder suas mensagens e solicitações</li>
                <li>Direcionar você para os projetos apropriados</li>
                <li>Melhorar e personalizar sua experiência com o bot</li>
                <li>Enviar notificações e atualizações relacionadas aos projetos</li>
                <li>Analisar o uso do serviço para melhorias e desenvolvimento</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Detectar, prevenir e resolver problemas técnicos e de segurança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                4. Armazenamento e Segurança dos Dados
              </h2>
              <p className="leading-relaxed mb-3">
                Levamos a segurança de suas informações a sério:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Seus dados são armazenados em servidores seguros com criptografia
                </li>
                <li>
                  Implementamos medidas técnicas e organizacionais para proteger suas informações
                </li>
                <li>
                  O acesso aos dados é restrito apenas a pessoal autorizado
                </li>
                <li>
                  Mantemos backups regulares para prevenir perda de dados
                </li>
                <li>
                  Utilizamos protocolos de segurança padrão da indústria (HTTPS, criptografia de dados)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                5. Compartilhamento de Informações
              </h2>
              <p className="leading-relaxed mb-3">
                Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas nas 
                seguintes circunstâncias:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Com seu consentimento:</strong> Quando você autorizar explicitamente
                </li>
                <li>
                  <strong>Prestadores de serviço:</strong> Com empresas que nos ajudam a operar o serviço 
                  (hospedagem, análise, suporte), sob acordos de confidencialidade
                </li>
                <li>
                  <strong>Meta/WhatsApp:</strong> Conforme necessário para a operação do serviço através 
                  da plataforma WhatsApp Business API
                </li>
                <li>
                  <strong>Requisitos legais:</strong> Quando exigido por lei ou para proteger nossos direitos
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                6. Retenção de Dados
              </h2>
              <p className="leading-relaxed">
                Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e 
                cumprir obrigações legais. Mensagens e dados de conversação são retidos por um 
                período de até 12 meses, ou conforme exigido por lei. Você pode solicitar a 
                exclusão de seus dados a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                7. Seus Direitos
              </h2>
              <p className="leading-relaxed mb-3">
                Você tem os seguintes direitos em relação aos seus dados:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Acesso:</strong> Solicitar uma cópia dos dados que temos sobre você
                </li>
                <li>
                  <strong>Correção:</strong> Solicitar a correção de informações imprecisas
                </li>
                <li>
                  <strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais
                </li>
                <li>
                  <strong>Portabilidade:</strong> Solicitar uma cópia de seus dados em formato estruturado
                </li>
                <li>
                  <strong>Objeção:</strong> Opor-se ao processamento de seus dados para determinados fins
                </li>
                <li>
                  <strong>Retirada de consentimento:</strong> Retirar seu consentimento a qualquer momento
                </li>
              </ul>
              <p className="leading-relaxed mt-3">
                Para exercer qualquer um desses direitos, entre em contato conosco através das 
                informações fornecidas na seção de contato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="leading-relaxed">
                Nosso serviço de bot do WhatsApp não utiliza cookies diretamente. No entanto, 
                nosso website de gerenciamento pode utilizar cookies e tecnologias similares para 
                melhorar a experiência do usuário e analisar o uso do site. Você pode controlar 
                o uso de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                9. Privacidade de Menores
              </h2>
              <p className="leading-relaxed">
                Nosso serviço não é destinado a menores de 18 anos. Não coletamos conscientemente 
                informações de menores. Se descobrirmos que coletamos dados de um menor sem 
                consentimento parental, tomaremos medidas para excluir essas informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                10. Conformidade com LGPD
              </h2>
              <p className="leading-relaxed">
                Estamos comprometidos em cumprir a Lei Geral de Proteção de Dados (LGPD) brasileira. 
                Processamos seus dados pessoais de forma legal, transparente e segura, respeitando 
                todos os princípios estabelecidos pela legislação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                11. Transferência Internacional de Dados
              </h2>
              <p className="leading-relaxed">
                Seus dados podem ser transferidos e armazenados em servidores localizados fora do 
                Brasil. Garantimos que qualquer transferência internacional de dados seja realizada 
                com as salvaguardas adequadas e em conformidade com as leis aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                12. Alterações nesta Política
              </h2>
              <p className="leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você 
                sobre quaisquer alterações significativas através do bot ou por outros meios. 
                A data da última atualização será sempre indicada no topo desta página. Recomendamos 
                que você revise esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                13. Contato
              </h2>
              <p className="leading-relaxed mb-3">
                Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de 
                Privacidade ou ao tratamento de seus dados pessoais, entre em contato conosco:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:abcsandro@hotmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    abcsandro@hotmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Encarregado de Dados (DPO):</strong>{' '}
                  <a href="mailto:abcsandro@hotmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    abcsandro@hotmail.com
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong> Entre em contato através do próprio bot
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                14. Consentimento
              </h2>
              <p className="leading-relaxed">
                Ao utilizar nosso bot do WhatsApp, você confirma que leu, compreendeu e concorda 
                com esta Política de Privacidade e consente com a coleta, uso e compartilhamento 
                de suas informações conforme descrito neste documento.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                © 2026 Pelezi Bot. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
