import React from 'react'

const AddLocation = () => {
    return (
        <div className='w-full text-left rounded-md border-slate-100 border mt-10 p-5 shadow-sm shadow-sky-100'>
            <h1 className=' text-slate-700 font-semibold text-lg'>Hely hozzáadása</h1>
            <hr className='mt-2' />
            <div className='flex flex-col mt-3 '>
                <label htmlFor="" className=' text-slate-500 font-medium'>Név:</label>
                <input type="text" className='border rounded-md mt-2 w-full p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
            </div>
            <div className='grid grid-cols-2 gap-3 w-full'>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="" className=''>Irányítószám:</label>
                    <input type="number" className='border rounded-md mt-2 p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
                </div>
                <div className='flex flex-col mt-3'>
                    <label htmlFor="">Település:</label>
                    <input type="text" className='border rounded-md mt-2 p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
                </div>
            </div>

            <div className='flex flex-col mt-3'>
                <label htmlFor="">Cím:</label>
                <input type="text" className='border rounded-md mt-2 w-full p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
            </div>
            <div className='flex items-center justify-center mt-8 mb-4'>
                <button className='bg-sky-500 px-4 py-2 rounded-full text-white'>Hozzáadás</button>
            </div>

        </div>
    )
}

export default AddLocation