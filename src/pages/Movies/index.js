import {Form} from './Form';
import './Movies.css';

export const Movies = () => {
    return <>
        <header class="header">            
            <div className="header-content">
                <a href="index.html" className="header__logo">Movieapp</a>
            </div>
            <Form/>
        </header>
    </>
}