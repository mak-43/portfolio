import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='text-center my-10'>
            <p className=''>Feel Free to Contact </p>
            <p className='my-5 text-3xl mb-10'>Get In Touch </p>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div className='  p-2 shadow-xl rounded-xl'>
                    <p className='text-xl'>Contact Form</p>
                    <div class=" text-center flex flex-col justify-center items-center gap-2 ">
                        
                        <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs mt-3" />
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Subject" class="input input-bordered w-full max-w-xs" />
                        <textarea type="text" placeholder="Message..." class="input input-bordered w-full max-w-xs" />

                        <input type="submit" className='btn my-3' value='send message' />
                     
                    </div>

                </div>
                <div className='flex flex-col items-start gap-3 pl-10  justify-center mt-5'>
                    <p><span><i class="fa-solid fa-user-large"></i></span>  Muslim Ahmed Khan</p>
                    
                    <p><span><i class="fa-solid fa-phone"></i></span> +88 01613900027</p>
                    <p> <span><i class="fa-solid fa-envelope"></i></span> letsmailmak@gmail.com</p>
                    <p> <span><i class="fa-solid fa-location-dot"></i></span> Uttara , Dhaka-1230</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Contact;