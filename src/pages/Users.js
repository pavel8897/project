import {useLocation} from 'react-router-dom';

export const Users = () => {
    let url = useLocation();
    console.log(url);
    return (
        <div>
            <ul>
                <li><a href={`${url.pathname}/ivanov`}>Ivanov</a></li>
                <li><a href={`${url.pathname}/petrov`}>Petrov</a></li>
            </ul>
        </div>
    )
}