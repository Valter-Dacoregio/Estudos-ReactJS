import React, { useState } from 'react';

import './style.css';

export default function Heder(){
    const [fonte, setFonte] = useState('imdb');

    return(
        <header>
            <span>{fonte}</span>
        </header>
    );
}