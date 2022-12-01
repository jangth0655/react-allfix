import { useEffect } from 'react';

import styled from 'styled-components';
import Detail from '../../components/detail/Detail';
import Layout from '../../components/Layout/Layout';

const MovieDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Layout isMainPaddingTop={false} isMainMaxWidth={false}>
      <Detail />
    </Layout>
  );
};
export default MovieDetail;
