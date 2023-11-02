import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const About: NextPage = () => {
  return (
    <MainLayout>
      <h1>About Us</h1>
      <p>This page provides information about our company.</p>
    </MainLayout>
  );
};

export default About;
