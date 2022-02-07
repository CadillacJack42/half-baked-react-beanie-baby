import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  // you'll need to track the current beanieBaby in state
  const [baby, setBaby] = useState('');
  // you'll need to get the route param using the appropriate react router hook
  const babyId = useParams();
  
  

  useEffect(() => {
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
    const fetchBaby = async () => {
      const detail = await getSingleBeanie(babyId.id);
      setBaby(detail);
    };
    fetchBaby();
  }, [babyId]); // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes 

  function handleBeanieClick() {
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
  }

  return (
    <>
      {/* Feel free to uncomment and use the below code--but you'll need to figure out how to keep it from blowing up on load */}
      
      <Link to='/'>Home</Link>
      <div className='beanie-detail' onClick={handleBeanieClick}>
        <div className='beanie-data'>
          <p>{baby.animal}</p>
          <p>{baby.title}</p>
          <p>Zodiac: {baby.astroSign}</p>
          <p> Born on {baby.birthday}</p>
          <img className='beanie-img' src={baby.image}/>
          <p>Color: {baby.color}</p>
          <p>Release Date: {baby.releaseDate}</p>
          <p>Retirement Date: {baby.retirementDate}</p>

          <p>Size: {baby.size}</p>
          <p>Theme: {baby.theme}</p>
          <p>Sub-Theme: {baby.subtheme}</p>
          <p>Style Number: {baby.styleNumber}</p>
          <p>Swing Tag Generation: {baby.swingTagGeneration}</p>
          <p>Tush Tag Generation: {baby.tushTagGeneration}</p>
        </div>
      </div>  
    </>
  );
}
