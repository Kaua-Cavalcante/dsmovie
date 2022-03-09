import {ReactComponent as GithubIcon} from 'assets/img/github1.svg';
import './styles.css';

function Navbar() {
    return(
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          <a href="https://github.com/Kaua-Cavalcante" rel="noreferrer" target="_blank">
            <div className='dsmovie-contact-container'>
                <GithubIcon />
                <p className='dsmovie-contact-link'>/Kaua-Cavalcante</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;