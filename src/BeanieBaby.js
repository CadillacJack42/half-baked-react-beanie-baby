import { Link } from 'react-router-dom';
import './BeanieBaby.css';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <div className='baby-container'>
      <Link to={`/detail/${beanieBaby.id}`}>{beanieBaby.title}</Link>
      <img className='beanie-img' src={beanieBaby.image}></img>
    </div>
    
  );
}
