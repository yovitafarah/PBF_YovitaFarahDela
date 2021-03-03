// agar function arroe HelloComponent bisa berjalan di react maka tambahlan react
import React from 'react';
import './HelloComponent.css';

const HelloComponent = () => {
    return <p className='text-p'>ini adalah arrow function yang ada di folder</p>
}

// agar component ini dapat dipakai dimana aja
export default HelloComponent;