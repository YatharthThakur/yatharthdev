import React from 'react'
import {AiTwotoneTrophy} from 'react-icons/ai';
import {MdComputer} from 'react-icons/md';
import {HiDocumentReport} from 'react-icons/hi';
import {RiCupFill} from 'react-icons/ri';
export default function Numberof() {
  return (
    <div>
      <div className='parent-numberof'>
        <div className='child-1'>
            <span className='child-icon'><AiTwotoneTrophy/></span>
            <span className='child-des'>Awards</span>
            <span className='child-number'>2</span>
        </div>
        <div className='child-2'>
            <span className='child-icon'><MdComputer/></span>
            <span className='child-des'>Online course Enrolled</span>
            <span className='child-number'>10</span>
        </div>
        <div className='child-3'>
            <span className='child-icon'><HiDocumentReport/></span>
            <span className='child-des'>Projects</span>
            <span className='child-number'>4</span>
        </div>
        <div className='child-4'>
            <span className='child-icon'><RiCupFill/></span>
            <span className='child-des'>Cups of Coffee</span>
            <span className='child-number'>Too many</span>
        </div>
      </div>
    </div>
  )
}
