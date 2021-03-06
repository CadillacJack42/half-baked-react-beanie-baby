import BeanieBaby from './BeanieBaby.js';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {/* render out the beanie babies as a list */}
      {
        beanieBabies.map((baby, i) => {
          return <BeanieBaby key={baby.title + i} beanieBaby={baby} />;
        })
      }
    </div>);
}
