import React from 'react'
import { LineChart } from './ejemplos/LineChart'
import './App.css';

const labels = ['01-08-22', '02-08-22', '03-08-22', '04-08-22', '05-08-22', '06-08-22', '07-08-22']; // eje x
const scores = [1.5, 1.81, 1.79, 1.76, 2, 1.9, 1.92, 1.93, 1.98]; // eje y

export const App2 = () => {
  return (
    <>
      <div className='container'>
        <LineChart labels = {labels} scores = {scores}/>
      </div>
      
    </>
    
  )
}
