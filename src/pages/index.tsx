import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage of our simple Next.js application.</p>
    </MainLayout>
  );
};

export default Home;
