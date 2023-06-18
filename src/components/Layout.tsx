import React from 'react';

const Layout: React.FC = ({ children }:any) => {
  return (
    <div>
      {/* Coloque aqui o cabeçalho ou menu se necessário */}
      <main>{children}</main>
      {/* Coloque aqui o rodapé se necessário */}
    </div>
  );
};

export default Layout;
