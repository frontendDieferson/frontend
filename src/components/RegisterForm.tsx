import React, { useState } from 'react';
import Link from 'next/link';

const RegisterForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica para enviar os dados do formulário para o servidor
    // ...
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos de entrada para nome, email e senha */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Cadastrar
        </button>
        <p className="mt-4">
          Já tem uma conta?{' '}
          <Link href="/login">
            <a className="text-blue-500 font-semibold">Faça login</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
