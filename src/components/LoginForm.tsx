'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, senha });
      console.log(response.data);
      // Redirecionar o usuário para a página principal ou realizar outras ações após o login bem-sucedido
    } catch (error) {
      setError('Falha ao fazer login. Verifique suas credenciais.');
      console.error(error);
    }
  };

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/cadastro', { email, senha });
      console.log(response.data);
      // Redirecionar o usuário para a página de login ou realizar outras ações após o cadastro bem-sucedido
    } catch (error) {
      setError('Falha ao cadastrar usuário.');
      console.error(error);
    }
  };

  return (
    <div className='max-w-sm'>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="senha" className="block mb-2 font-semibold">
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={handleSenhaChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Entrar
        </button>
        <p className="mt-4 mr-1 flex items-center justify-center">
          Ainda não tem uma conta?{' '}
          <Link href="/register">
            <p className="ml-2 text-blue-500 font-semibold">Cadastre-se, é grátis</p>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
