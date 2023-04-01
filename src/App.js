import React from "react";
import './App.css';
import Linktree from './components/linktree';
import profilePicture from './images/pp.jpeg';
import waIcon from './images/wa.png';
import fbIcon from './images/pp.jpeg';
import pWIcon from './images/pp.jpeg';
import gitIcon from './images/pp.jpeg';


function App() {
  const links = [
    { img: waIcon, name: 'WhatsApp', url: 'https://wa.me/6285861526198' },
    { name: 'Personal Website', url: 'http://bowo-profile.epizy.com/' },
    { name: 'Facebook', url: 'https://www.facebook.com/prasty.b0wo' },
    { name: 'GitHub', url: 'https://www.github.com/Prasetyant0/' }
  ];

  return (
    <div className="app">
      <div className="profile">
        <div className="picture-container">
          <img src={profilePicture} alt="Profile" className="profile-picture" />   
        </div>
        <h2 className="name">@Prasetyanto Tri Prabowo</h2>
      </div>
      <h1 className="title">My Social Media Link</h1>
      <div className="link-container">
        <Linktree links={links} />
      </div>
    </div>
  );
}

export default App;
