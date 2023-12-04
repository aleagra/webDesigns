// pages/index.tsx (o tu archivo Home)
'use client'
import React, { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Projects from '@/components/Projects';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando una carga de 2 segundos (puedes ajustar el tiempo según tus necesidades)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Limpiar el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Projects />
      )}
    </>
  );
};

export default Home;
