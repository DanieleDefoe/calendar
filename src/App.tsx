import { useEffect } from 'react';

import { Layout, message } from 'antd';

import Navbar from '@/components/Navbar';

import { useActions } from './hooks/useActions';
import { User } from './models/User';
import AppRouter from './router/AppRouter';

const { Content } = Layout;

const App = () => {
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const username = localStorage.getItem('username') ?? '';

    if (auth && username) {
      setUser({ username: JSON.parse(username) } as User);
      setIsAuth(true);
    } else {
      message.error('Auth required');
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};

export default App;
