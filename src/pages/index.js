import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Samar Panda</h1>
    <Link to="/about">&rarr; Go to about Me</Link>
    <p>More details Coming Soon!</p>
  </Layout>
);
