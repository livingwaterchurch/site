/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import Button from '../../components/Button';
import About from '../../components/About';
import Contribute from '../../components/Contribute';
import logo from './website_logo.png';

import styles from './styles.css';

export class HomePage extends React.Component {
  render() {
    return (
      <main className="homePage">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <blockquote>
                    <p>"If anyone thirsts, let him come to me and drink. Whoever believes in me, as the Scripture has said, 'Out of his heart will flow rivers of living water.'"</p>
                    <footer>John 7:37-38 [ESV]</footer>
          </blockquote>
        </header>
        <article className="content">
          <About />
        </article>
        <Contribute />
      </main>
    );
  }
}

export default HomePage;