import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Samar Panda</h1>
    <p>Technical Architect at Quikr</p>
    <Link to="/about">My web presence &rarr;</Link>
  </Layout>
);
