import React from 'react';
import Logo from '../../assets/img/mariflix2.png';
import './Menu.css';
//import ButtonLink from './componentes/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt='Mariflix logo'/>
          </a>
          <Button className="ButtonLink" href="/">
            Novo vídeo
          </Button>

        </nav>
    );
}

export default Menu; 