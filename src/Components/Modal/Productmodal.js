import React from 'react';
import '../../assets/cartmodal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Productmodal({showProduct,closeProduct}) {

    const showHiddenProduct = showProduct ? "modal display-block": "modal display-none";
    return (
        <div className={showHiddenProduct}>
            <div className='modal-main'>
                <div className='flex 
                        justify-between
                        items-center'>
                    <h2 className='text-3xl font-bold'>Product Modal (0)</h2>
                    <FontAwesomeIcon 
                        className='text-dark 
                        mr-2 p-2
                        text-lg
                        bg-slate-300
                        rounded-full
                        hover:cursor-pointer' 
                        onClick={closeProduct}
                        icon={faXmark} />
                </div>
            </div>
        </div>
    );
}

export default Productmodal;