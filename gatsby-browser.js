/* eslint-disable no-undef */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//Este codigo corre en NodeJS

//Utilizamos una pieza de codigo de la API de Gatsby
//Todo lo que yo coloque en este (archivo gatsby-config) element va a encerrar a los elementos o paginas que se generen en mi proyecto

const React = require("react") //Permite usar JSX
const Layout = require("./src/components/layout").default //Traeme el componente por defecto
const { GlobalStyles } = require("./src/styles")

//Todos los export estan en la documentacion de Gatsby
//||element|| son cada una de todas mis paginas
exports.wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </>
)
