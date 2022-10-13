import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery/Gallery.lazy';
import { setConfig } from 'cloudinary-build-url';

setConfig({
  cloudName: 'dxqdxwtjz',
  privateCDN: true,
  storageType: 'fetch'
});
function App() {
  
  return (
    <div className="App">
      <Gallery />
      <div className='img-conatiner'>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
