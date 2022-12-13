import { initSeo } from "remix-seo";

export const { getSeo, getSeoMeta, getSeoLinks } = initSeo({
  // Pass any SEO defaults for your site here.
  // If individual routes do not provide their own meta and link tags,
  // the tags generated by the defaults will be used.
  title: "Conceição Advogados",
  titleTemplate: "%s | Conceição Advogados",
  description:
    "Somos um escritório de advocacia especializado em Direito do Trabalho, Direito Previdênciário, Direito Penal e Direito Civil.",
});