import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Segment = (props) => {
  switch (props.segment) {
    case 'seg1': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
        
          <i class="fas icon fa-utensils"></i>
        </Link>
      </div>
    )
    case 'seg2': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
        
          <i class="fas icon fa-dumbbell"></i>
        </Link>
      </div>
    )
    case 'seg3': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
        
          <i class="fas icon fa-building"></i>
          
        </Link>
      </div>
    )
    case 'seg4': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
        
          <i class="fas icon fa-dumbbell"></i>
          
        </Link>
      </div>
    )
    case 'seg5': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
          
          <i class="fas icon fa-building"></i>
          
        </Link>
      </div>
    )
    case 'seg6': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
          
          <i class="fas icon fa-utensils"></i>
          
        </Link>
      </div>
    )
    case 'seg7': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
          
          <i class="fas icon fa-building"></i>
          
        </Link>
      </div>
    )
    case 'seg8': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
          
      <i class="fas icon fa-utensils"></i>
        </Link>
      </div>
    )
    case 'seg9': return (
      <div className='segment'>
        <Link to={props.path} className='box'>
          
          <i class="fas icon fa-dumbbell"></i>
        </Link>
      </div>
    )   
    default: return (
      <div className='segment'>
        <Link to={props.path} className='box'>
          
          <i class="fas icon fa-dumbbell"></i>
        </Link>
      </div>
    )
  }
}

export default Segment;