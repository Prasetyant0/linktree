import React from "react";
import './App.css';
import Linktree from './components/linktree';
import profilePicture from './images/IMG_20230320_212729.jpg';


function App() {
  const links = [
    { name: 'Facebook', url: 'https://www.facebook.com/yourusername' },
    { name: 'Twitter', url: 'https://www.twitter.com/yourusername' },
    { name: 'Instagram', url: 'https://www.instagram.com/prasty_08/' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername' },
    { name: 'GitHub', url: 'https://www.github.com/Prasetyant0/' }
  ];

  return (
    <div className="App">
      <div className="profile">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h2>Prasetyanto Tri Prabowo</h2>
      </div>
      <h1 className="title">My Social Media Link</h1>
      <Linktree links={links} />
    </div>
  );
}

export default App;
