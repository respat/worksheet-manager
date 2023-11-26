import React from 'react'
import clip from '../assets/box-check.png'

const Worksheet = () => {
    return (
        <div className='border w-1/2 rounded-md flex flex-col shadow-md shadow-slate-100 hover:shadow-slate-200 cursor-pointer'>
            {/* Header */}
            <div className='flex justify-between p-5'>
                <div className='flex flex-col'>
                    <div className='flex items-center'> 
                        <h1 className='font-bold text-lg text-slate-800 mr-2'>Fehér ház</h1>
                        <p className='text-sm bg-orange-300 px-2 text-slate-800 rounded-full'>Magán</p>
                    </div>
                    <p>1037, Budapest, Erdőalja lejtő 10.</p>
                </div>
                <p className='text-md font-bold'>2023.09.14</p>
            </div>
            <hr className=' w-11/12 self-center'/>
            <div className='p-5'>
                <h2 className='font-bold text-left'>Munka leírása</h2>
                <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam voluptas, quae commodi quasi amet error officia impedit, recusandae quod autem ut sunt quaerat eos corporis vitae rem deleniti quos iure?
                Quibusdam sit cumque exercitationem ab, odio quo facere, doloremque nobis dolores quae vitae officia vero sapiente quis tenetur assumenda ea error repellendus esse, illo autem odit dolor! Numquam, aperiam dolorum.</p>
            </div>
            <div className='px-5 py-2'>
            <h3 className='font-bold text-left'>Felhasznált anyagok</h3>
            <ul className='pl-5 list-disc text-left'>
                <li className=''>30m 2,5mm2 MT</li>
                <li>6 db 2,5mm2 érvéghüvely</li>
                <li>6 db WAGO</li>
            </ul>
            </div>
            <div className='px-5 flex pt-3'>
                <p className='text-left font-bold mr-2'>Ennyi időt vett igénybe:</p>
                <p>3 óra</p>
            </div>
            <div className='flex items-center justify-between p-5'>
                <div className=''>
                    <h3 className='font-bold text-left'>Ők dolgoztak rajta:</h3>
                    <p className='text-sm bg-gray-400 font-medium px-2 mt-1 text-white rounded-full w-max'>Resperger Patrik</p>
                </div>
                <div className=' w-10 h-10 border rounded-md flex items-center justify-center shadow-md shadow-slate-100 hover:bg-green-300 hover:shadow-slate-200'>
                    <img src={clip} alt="" className='opacity-60 w-1/2' />
                </div>
            </div>
        </div>
    )
}

export default Worksheet