/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import Feature from '../Feature/Feature';

const PriceList = (props) => {
    const {name, price, features} = props.price
    
    return (
        <div className='bg-purple-100 mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl text-purple-500 font-extrabold'>{price}</span>
                <span className='text-2xl text-purple-900'>/mon</span>
            </h2>
            <h5 className='text-2xl text-center text-purple-900 font-bold my-6'>{name}</h5>
            <p className='text-purple-900 font-bold'>Features:</p>
            {
                features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature> )
            }
            <button className='w-full mt-auto bg-purple-600 text-white rounded-md hover:bg-purple-700 font-bold p-2'>Buy Now</button>
        </div>
    );
};

export default PriceList;