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