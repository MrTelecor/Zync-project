import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    // Enviar un mensaje al proceso principal
    window.electron.ipcRenderer.send('example-channel', '¡Hola desde el renderer!');

    // Escuchar la respuesta del proceso principal
    window.electron.ipcRenderer.on('example-channel-response', (response: any) => {
      console.log(`Respuesta recibida: ${response}`);
    });
  }, []);

  return (
    <div>
      <h2>Inicio</h2>
      <p>¡Este es el inicio de Zync</p>
    </div>
  );
};

export default Home;
