import React from "react";

import {
  FooterInfos,
} from "./FooterStyles";

export default function Footer() {
  return (
    <footer style={{ marginTop: '80px' }}>
    <hr />
    <FooterInfos>
      <div>
      © 2021 Clina. Todos os direitos reservados
      </div>
      <div>
        <a href="/">Termos de uso</a>
        <a href="/">Políticas de privacidade</a>
      </div>
    </FooterInfos>
  </footer>
  );
}
