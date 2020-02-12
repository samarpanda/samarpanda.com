import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      <a
        rel="noopener noreferrer"
        href="http://www.twitter.com/samarpanda"
        target="_blank"
      >
        Twitter
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/samarpanda"
        target="_blank"
      >
        Github
      </a>
      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/samar-panda"
        target="_blank"
      >
        LinkedIn
      </a>
      <br />
      <a
        rel="noopener noreferrer"
        href="http://www.slideshare.net/samarpanda"
        target="_blank"
      >
        Slideshare
      </a>
      <a
        rel="noopener noreferrer"
        href="http://stackoverflow.com/users/1237494/samar-panda"
        target="_blank"
      >
        Stackoverflow
      </a>
      <a
        rel="noopener noreferrer"
        href="http://www.facebook.com/samar.panda"
        target="_blank"
      >
        Facebook
      </a>
      <br />
      <a
        rel="noopener noreferrer"
        href="https://coderwall.com/samarpanda"
        target="_blank"
      >
        Coderwall
      </a>
      <a
        rel="noopener noreferrer"
        href="http://about.me/samarpanda"
        target="_blank"
      >
        About.me
      </a>
      <br />
      <a
        rel="noopener noreferrer"
        href="http://pinterest.com/samarpanda/"
        target="_blank"
      >
        Pinterest
      </a>
      <a
        rel="noopener noreferrer"
        href="http://foursquare.com/user/29130714"
        target="_blank"
      >
        Foursquare
      </a>
    </p>

    <Link to="/">&larr; back to home</Link>
  </Layout>
);
