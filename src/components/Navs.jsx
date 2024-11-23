import { Link } from 'react-router-dom';

const Links = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'starred',
    to: '/starred',
  },
];
function Navs() {
  return (
    <div>
      {Links.map(e => (
        <li key={e.to}>
          {' '}
          <Link to={e.to}>{e.text} </Link>
        </li>
      ))}
    </div>
  );
}

export default Navs;
