/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {


    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-4 w-4 text-green-500" />
            <span className='pl-2 text-purple-900'>{feature}</span>
        </div>
    );
};

export default Feature;