import { Link } from 'react-router-dom';

export default function Menu (props) {
    const { items, className } = props;
    return (
        <ul className="list-unstyled">
            {items.map(
                (data, index) => <li key={`menu-${index}`}><Link to="/" className={className}>{data.text}</Link></li>
            )}
        </ul>
    );
}
