import React from 'react';

function Contact() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 mt-20 dark:bg-slate-900 dark:text-white'>
            <form className='bg-white p-8 rounded shadow-md w-full max-w-md'>
                <h3 className="font-bold text-2xl mb-6 text-center">Contact Us</h3>
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter Your Full Name" 
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter Your Email" 
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="msg">Message</label>
                    <textarea 
                        name="msg" 
                        placeholder="Enter Your Message" 
                        className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    ></textarea>
                </div>
                
                <div className='flex justify-center'>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
