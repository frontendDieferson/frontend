// import Link from 'next/link';
// import React from 'react';

// const Home = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="text-center m-5">
//         <h1 className="text-4xl font-bold mb-4">Bem-vindo à Mini Rede Social de Diário Anônimo!</h1>
//         <p className="text-xl mb-4">
//           Aqui você pode compartilhar suas histórias, pensamentos e emoções de forma anônima.
//           Expresse-se livremente sem se preocupar com a identidade!
//         </p>
//         <p className="text-lg mb-4">
//           Faça parte da nossa comunidade e conecte-se com pessoas que têm experiências e ideias similares.
//           Compartilhe, leia e interaja com postagens de outros usuários de forma anônima e segura.
//         </p>
//       </div>
//       <div className="ml-auto w-1/4 p-8">
//         <h2 className="text-2xl font-bold mb-4">Faça login</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
//             <input
//               type="email"
//               id="email"
//               className="border border-gray-300 rounded-md px-3 py-2 w-full"
//               placeholder="Digite seu email"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-lg font-semibold mb-2">Senha:</label>
//             <input
//               type="password"
//               id="password"
//               className="border border-gray-300 rounded-md px-3 py-2 w-full"
//               placeholder="Digite sua senha"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
//           >
//             Entrar
//           </button>
//           <div className="mt-4 flex items-center justify-center">
//           <span className="text-lg">Ainda não tem uma conta?</span>
//             <Link href="/cadastro" passHref>
//               <p className="text-blue-500 font-semibold ml-1">Cadastre-se, é grátis</p>
//             </Link>
//          </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;

import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

const Home = () => {
  return (
    
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl font-bold mb-8">Bem-vindo à Rede Social Anônima</h1>
            {/* Aqui você pode adicionar qualquer conteúdo que desejar */}
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
  );
};

export default Home;

