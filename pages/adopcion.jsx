// Librerias
import React from 'react';

//MUI

// Relative imports
import Layout from '../src/components/commons/Layout';

function AdopcionMascotasPage() {
  return (
    <Layout authRequired={false} publicPage title="Adopción de mascotas">
      <h1>Adopción de mascotas</h1>
    </Layout>
  );
}

export default AdopcionMascotasPage;
