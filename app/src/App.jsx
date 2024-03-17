import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const items=[
    {
        id:1,
        name:'Netflix',
        Date:'Feb 12 2023',
        price:12.25,
        image:'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=w480-h960',

    },

    {
        id:2,
        name:'Instacard Express',
        Date:'Jan 2 2023',
        price:12.99,
        image:'https://play-lh.googleusercontent.com/g_irOkVgCmmyGOxAoB5-N6CuHYjL7FMiHUkO7FJFNBVKE3W-yoFoKJBiq4Sy8sSI9woQ=w480-h960',

    },
    {
        id:3,
        name:'Amazon Prime',
        Date:'Jan 12 2023',
        price:12.99,
        image:'https://play-lh.googleusercontent.com/r3eFMgQp7Z6mR_gI0AsCS3WJAHX2x6P6KnJoT1yvjO728OIRcOy9ukUN3TFZRd1LzwY=w480-h960',

    },
    {
        id:4,
        name:'Crunchyroll',
        Date:'Feb 2 2023',
        price:12.99,
        image:'https://play-lh.googleusercontent.com/CjzbMcLbmTswzCGauGQExkFsSHvwjKEeWLbVVJx0B-J9G6OQ-UCl2eOuGBfaIozFqow=s96',
        

    },
    {
        id:5,
        name:'Skillshare',
        Date:'Jan 24 2023',
        price:15.01,
        image:'https://play-lh.googleusercontent.com/Lfh8g5kPONfSNL7R4s8itnMMdj3lhmHU9tb4gp7eoOaXkJo0dOcwB6iWPdNGZMRDMVs=w480-h960',

    },
]


export default function section(){
    return(
   <>
<div className='flex items-center justify-center min-h-screen'>
    <div className='border p-6 rounded-xl flex flex-col w-full xl:w-1/2 '> 

    <div className='flex flex-row justify-between mb-9'>
        <p className='font-semibold text-sm'>Subscriptions</p>
        <a className='text-xs text-blue-500'>payment History</a>
    </div>

        <ul>

            {items.map((item)=>(

                <li key={item.id} className='flex justify-between justify-center ' >
                <div className='flex min-w-0 gap-x-4 '>
                       <img className='rounded-lg w-10 h-10 mb-4 ' src={item.image} alt="" />

                        <div className="min-w-0 flex-auto ">
                                <p className="text-xs font-bold leading-6 text-gray-900 text-left ">{item.name}</p>
                                <p className=" text-xs  text-gray-500 text-left">{item.Date}</p>
                        </div>
                        
                </div>

                

                    <div className=' sm:flex sm:flex-col sm:items-end'>
                        <p className='text-xs leading-6 font-bold mt-3 '> <sup className='text-gray-500'>$</sup> {item.price} /mo</p>
                    </div>


                </li>
            )
            
            
            )}

        </ul>

      

      

       

       
    </div>
</div>

   
   </>
    );
}










 



