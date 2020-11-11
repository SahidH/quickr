import 'react';
import { css, injectGlobal } from 'emotion';
injectGlobal`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  `;

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;436&display=swap');
    body {
      font-family: 'Jost', sans-serif;
      font-weight: 100;
    }
    h1 {
      font-weight: 436;
    }
  `;

const Home = () => (
  <div
    className={css`
      width: 100vw;
      height: 100vh;
      display: flex;
      position: relative;
      text-align: center;
      justify-content: center;
      align-content: center;
      font-size: calc(100vw / ${'mydoctor.no'.length});
    `}
  >
    <h1
      className={css`
        display: flex;
        width: auto;
        margin: auto;
      `}
    >
      quickr.menu
    </h1>
  </div>
);

export default Home;
