import React from 'react';
import Layout from '@components/Layout';
import ComicFetcher from '@components/ComicFetcher';

const ComicsPage: React.FC = () => {
  return (
    <Layout>
      <ComicFetcher />
    </Layout>
  );
};
export default ComicsPage;
