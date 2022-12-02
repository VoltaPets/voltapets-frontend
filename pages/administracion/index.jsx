// Librerías
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// MUI
import { Grid } from '@mui/material';

// Relative Imports
import AdminDashboard from '../../src/components/screens/private/admin/AdminDashboard';
import GeneralTab from '../../src/components/screens/private/admin/tabs/GeneralTab';
import MascotasTab from '../../src/components/screens/private/admin/tabs/MascotasTab';
import UsuariosTab from '../../src/components/screens/private/admin/tabs/UsuariosTab';
import ProfileTab from '../../src/components/screens/private/admin/tabs/ProfileTab';

const HomeAdministracionPage = () => {
  // State
  const [activeTab, setActiveTab] = useState(null);

  // Hooks
  const { push, query, isReady } = useRouter();

  // Effects
  useEffect(() => {
    if (isReady) {
      console.log(query.tab);
      switch (query.tab) {
        case 'general':
          setActiveTab(<GeneralTab />);
          break;
        case 'usuarios':
          setActiveTab(<UsuariosTab />);
          break;
        case 'mascotas':
          setActiveTab(<MascotasTab />);
          break;
        case 'profile':
          setActiveTab(<ProfileTab />);
          break;
        // case 'paseos':
        //   setActiveTab(3);
        //   break;
        // case 'anuncios':
        //   setActiveTab(4);
        //   break;
        default:
          setActiveTab(<GeneralTab />);
          break;
      }
    }
  }, [isReady, query.tab]);

  return (
    <>
      <Head>
        <title>Administración - Volta Pets</title>
      </Head>

      <Grid container sx={{ height: '100vh', width: '100%', maxWidth: 1400 }}>
        <Grid
          item
          xs={4}
          md={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'secondary.main',
            p: 2,
            color: '#fff'
          }}
        >
          <AdminDashboard />
        </Grid>
        <Grid item xs={8} md={10} sx={{ bgcolor: '#e3e4e5', p: 4 }}>
          {activeTab}
        </Grid>
      </Grid>
    </>
  );
};

export default HomeAdministracionPage;
