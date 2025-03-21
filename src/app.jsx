import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body bg-dark text-light">
    <header className="container-fluid">
  <nav className="navbar fixed-top navbar-dark">
    <menu className="navbar-nav">
      <header>
        <a className="navbar-brand" href="#">Connect Four<sup>&reg;</sup></a>
      </header>
      <li className="nav-item">
        <a className="nav-link active" href="index.html">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="play.html">Play</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="scores.html">Scores</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="about.html">About</a>
      </li>
    </menu>
  </nav>
</header>

<main className="container-fluid bg-secondary text-center">app components go here</main>

<footer className="bg-dark text-white-50">
  <div className="container-fluid">
    <span className="text-reset"> Benjamin Anderson</span>
    <a className="text-reset" href="https://github.com/jmanderson5/startup">GitHub</a>
  </div>
</footer>
</div>;
}