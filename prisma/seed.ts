import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPost().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();

function getPost() {
  return [
    {
      name: "Revisão da Vida Toda junto ao INSS ",
      autor: "Guilherme Batú",
      content: `O Supremo Tribunal Federal aprovou, na data de 25 de fevereiro, a Revisão da Vida Toda. Neste post, traremos algumas informações para tentar sanar as dúvidas mais frequentes a respeito deste direito.
      
      Até o últimodia 25 de fevereiro, a legislação vigente era no sentido de que as contribuições previdenciárias anteriores a julho de 1994 não eram computadas para fins de cálculo da Renda Mensal dos segurados.
      
      Com a aprovação da Revisão da Vida Toda, passam os segurados a ter o direito de que todo o seu período contributivo seja levado em consideração no momento do cálculo previdenciário.
      
      Dessa forma, tem direito à revisão os segurados que recebam ou tenham recebido benefícios previdenciários calculados com base na Lei 9.876/99 e que tenham contribuições previdenciárias anteriores a julho de 1994.
      
      Com efeito, essa é uma tese que busca oportunizar ao segurado optar pela forma de cálculo permanente se esta for mais favorável.
      
      Para verificar a viabilidade da tese no caso concreto, é indispensável a realização do cálculo de renda mensal inicial com base na média de todos os salários de contribuição.
      
      IMPORTANTE! Cuidado com o prazo decadencial!
      O prazo decadencial para ajuizar uma demanda propondo a Revisão da Vida Toda é de 10 anos a contar da data da concessão do benefício. Portanto, se você já é beneficiário do INSS há um bom tempo, preste atenção para não decair o direito de pleitear a revisão.`,
      img: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/317485090_949584426453658_6087474653916976743_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=bZLiXnQynAgAX9_reVo&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk4Mzg4MDMwNjcxODQ3Mjk2Mg%3D%3D.2-ccb7-5&oh=00_AfDtidMqhH8RvdJJ1lEuG8mqlEo-sA6OgPb5iSeeT3Em_g&oe=639125ED&_nc_sid=30a2ef",
      categories: "Direito Previdenciário"
    },
    {
      name: "Assédio Moral no Trabalho",
      autor: "Guilherme Batú",
      content: `IO assédio moral é a conduta repetitiva com o fim de provocar terror psicológico e desequilíbrio psíquico no empregado. O empregador que assedia o empregado busca desestabilizar o emocional, fazendo com que ele passe por constrangimentos, abalos psíquicos ou situações vexatórias.

      A conduta de assedio moral está descrita no art. 483 da CLT, que prevê que algumas maneiras de assédio moral são causas justificantes que autorizam o trabalhador a sair do emprego por meio de rescisão indireta do contrato.`,
      img: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/282056844_430520475565128_7901774638667909351_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Ag9yDH49IOoAX-lEnoV&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg0MjUzNTM2MzUzNzcyNTc4OQ%3D%3D.2-ccb7-5&oh=00_AfBdqgwsRdyMWL052dDqYvFQtjbcnbs4odeWSzKQrmdspA&oe=639128DE&_nc_sid=30a2ef"
    ,
    categories: "Direito do Trabalho"
    },
    {
      name: "Sociedade de Fato: Como reconhecer judicalmente?",
      autor: "Guilherme Batú",
      content: `As sociedades em comum ou de fato são aquelas que funcionam, exercitando atividades empresariais, sem, contudo, haver se constituído segundo os dispositivos legais, não arquivando os seus atos constitutivos, se houver, no registro de pessoas jurídicas.

      Para provar judicialmente a existência de uma sociedade de fato, a parte poderá utilizar de diversos mecanismos, tais como: confissão, documento, testemunha, presunção, perícia, etc.
      
      Quer saber mais sobre o assunto? Entre em contato conosco.`,
      img: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/292982323_574012447499682_1746909625138095052_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=LOjSjhuFMkwAX_C75vU&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4MDA0MTM1Nzc2MDEwNDc0Ng%3D%3D.2-ccb7-5&oh=00_AfBdjowaZMa-TQ4SfubzLkOkIh2e4PDwM2ibH85uJKWZKg&oe=6392A4DA&_nc_sid=30a2ef"
    ,
    categories: "Direito Empresarial"},
    {
      name: "O estacionamento é responśavel por qualquer dano ou prejuízo do veículo?",
      autor: "Guilherme Batú",
      content: `Segundo a súmula 130 do STJ a fornecedora do serviço, ou seja, o estacionamento tem a responsabilidade de cuidar dos objetos dentro do carro, durante o período em que ele estiver parado. A sugestão é o cliente guardar o ticket do estacionamento para usar como prova no caso de alguma situação de furto, roubo ou qualquer avaria.

      Portanto, a famosa expressão: “não nos responsabilizamos por itens deixados no interior do veículo” está equivocada.
      
      Gostou?! Então, curte, comente e compartilhe com os amigos.`,
      img: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/294383940_162834629651282_7352460296104728115_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MwqsuqZLp4EAX8BDBMm&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NjAzNjEzNDA5NjA3ODM0Nw%3D%3D.2-ccb7-5&oh=00_AfA-_A5CNyeB_mifhe0SwnX7tYLNeT3-55iUFovLI1Vsqw&oe=6392ACD3&_nc_sid=30a2ef"
    },
    {
      name: "Sabe como funcioan a extinção de Condomínio sobre Imóvel adquirido por Herança?",
      autor: "Guilherme Batú",
      content: `Quando um imóvel é adquirido por herança, por mais de uma pessoa, e há divergência quanto à administração do bem, necessário se faz mover uma ação de extinção de condomínio.

      Em síntese, a extinção do condomínio consiste em liquidar o bem de propriedade de duas ou mais pessoas, repassando as respectivas quotas partes em dinheiro.
      
      Para saber como ingressar com uma ação de extinção de condomínio ou para sanar quaisquer dúvidas a respeito deste assunto, entre em contato conosco.`,
      img: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/295773743_589103332679991_967577269072936559_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=mc2A8Yqrz2wAX_YS76x&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5MDQzNDU3NTMxNjQ1MTAzOA%3D%3D.2-ccb7-5&oh=00_AfDmEc93xZHESA7Lz59X-YVDmjatWHc89zoaULdbd9ZfTg&oe=63929141&_nc_sid=30a2ef"
    ,
    categories: "Direito de Familia e Sucessões"},
    {
      name: "Veículos com lâmpadas queimadas?",
      autor: "Guilherme Batú",
      content: `Mudança no Código de Trânsito Brasileiro que beneficia os condutores!
      .
      .
      “§ 9º-A. Quando não for possível sanar a irregularidade no local da infração, o veículo, desde que ofereça condições de segurança para circulação, será liberado e entregue a condutor regularmente habilitado, mediante recolhimento do Certificado de Licenciamento Anual, contra a apresentação de recibo, e prazo razoável, não superior a 15 (quinze) dias, será assinalado ao condutor para regularizar a situação, o qual será considerado notificado para essa finalidade na mesma ocasião.” (LEI Nº 14.229, DE 21 DE OUTUBRO DE 2021).
      .
      .
      Essa mudança abrange o que estabelece o artigo 230 do CTB, inclusive veículos com defeito no sistema de iluminação, de sinalização ou com lâmpadas queimadas.`,
      img: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/274377836_1332738977229151_5926954510915697674_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=hkki0NgtnKQAX-hluAD&tn=9PQ56LN9H4_iHnXv&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc3OTU0OTAwNjMzMjU5MzY5NQ%3D%3D.2-ccb7-5&oh=00_AfB6BCMxTnfv3cLrVKeByVnqPIyPd9ggUE8-wj8SePdmog&oe=63928AED&_nc_sid=30a2ef"
    ,
    categories: "Direito de Trânsito"},
    {
      name: "Mau comportamento nas redes sociais pode provocar demissão por justa causa?",  autor: "Guilherme Batú",
      content: `Manifestações que ofendam a honra do empregador ou da empresa são compreendidas pelo Tribunal Superior do Trabalho (TST) como atitudes com intenção danosa, provocando, assim, demissão por justa causa.
  
      Além disso, o mau comportamento nas redes sociais provoca demissão, também, em casos onde as atitudes não têm ligação direta com a empresa.
 
      Ações que podem gerar demissão por justa causa:
   
      • Manifestação de racismo;
      • aparecer em fotos de festas no período em que um atestado foi apresentado à empresa;
      • comportamento que ofenda a dignidade da pessoa;
      • procedimentos que vão de encontro às regras gerais e à conduta ética, como postar fotos de pacientes ou colegas realizando atividades de trabalho;
      • realizar uso indevido das redes sociais em horário de trabalho;
      • exibir conteúdos que sejam classificados como atentado ao pudor ou que desrespeitem a dignidade dos colegas;
      • entre outros.`,
      img: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/243117183_161316636176966_6573199602001167891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=A7VulTg4fw0AX_ljjC1&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjY3Mjk5MzUwNjQzMDE1ODU2OA%3D%3D.2-ccb7-5&oh=00_AfAwyao4zWoMB-5GulqZPSiKxjyn5oNzJOYp7qGk1OCQPQ&oe=639304B5&_nc_sid=30a2ef"
    ,
    categories: "Direito do Trabalho"},
  ];
}
