import React from "react";
import './App.css';
import Linktree from './components/linktree';
import Footer from "./components/footer";
import profilePicture from './images/bowo.png';
import waIcon from './images/wa.png';
import fbIcon from './images/fb.png';
import pWIcon from './images/laptop.png';
import gitIcon from './images/github.png';


function App() {
  const links = [
    { img: waIcon, name: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=6285861526198&text=Hallo%20mas' },
    { img: pWIcon, name: 'Personal Website', url: 'http://bowo-profile.epizy.com/' },
    { img: fbIcon, name: 'Facebook', url: 'https://www.facebook.com/prasty.b0wo' },
    { img: gitIcon, name: 'GitHub', url: 'https://www.github.com/Prasetyant0/' }
  ];

  return (
  <div className="app">
    <div className="profile">
      <div className="picture-container">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </div>
      <h2 className="name">@Prasetyanto</h2>
    </div>
    <h1 className="title">My Social Media Link</h1>
    <div className="link-container">
      <div className="link-images">
        {links.map(link => (
          <div key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-item">
              <img className="imgIcon" src={link.img} alt={link.name} />
              <div className="link-name">
                <p>{link.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);



}

export default App;
