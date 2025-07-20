 import { IoManOutline } from "react-icons/io5";
 import { LiaWeightSolid } from "react-icons/lia";

import { useState } from "react"

export default function Bmi() {
  const [currentHeight,updateHeight]=useState('');
  const [currentWeight,updateWeight]=useState('');
  const [currentBmi,updateBmi]=useState('0');
  const [currentBmiCatogary,updateBmiCatogary]=useState('---');

const calculateBMI= ()=>{
  const heightInMeter = parseFloat(currentHeight/100);
  const weightInKG =parseFloat(currentWeight);
  
  if(heightInMeter>0 && weightInKG>0){
    const result = weightInKG/(heightInMeter*heightInMeter);
    const roundBmi = result.toFixed(3);
    updateBmi(roundBmi);
  }else{
    updateBmi('error values');
  }

  
if(roundBmi<18.5){
  updateBmiCatogary('Under Weight');
}else if(roundBmi>=18.5 && roundBmi<25){
  updateBmiCatogary('Normal');
}else if(roundBmi<30 && roundBmi>=25){
  updateBmiCatogary('Over Weight');
}else{  
  updateBmiCatogary('Obesity');
}
}


  return (
    <section className=" flex flex-col gap-3 justify-center items-center  bg-gradient-to-br from-blue-400 to-purple-400">
      <h1 className=" text-white font-semibold text-5xl py-4">BMI Calculator</h1>
      
      <div className="px-8 py-6 bg-blue-100 rounded-2xl flex flex-col w-2/3 md:w-1/3">
       
        <div className="flex flex-col gap-2 text-purple-900 font-semibold">
          <h2>Height (cm)</h2>
          <div className="bg-white pl-3 py-2 gap-4 flex text-2xl justify-start items-center">
            <IoManOutline/>
           <input className="w-2/3" onChange={(e)=>updateHeight(e.target.value)}/>
           </div>

           <div className="flex flex-col gap-2 pt-4 text-purple-900 font-semibold">
          <h2>Weight (Kg)</h2>
          <div className="bg-white pl-3 py-2 gap-4 flex text-2xl justify-start items-center">
            <LiaWeightSolid />
           <input className="w-2/3" onChange={(e)=>updateWeight(e.target.value)}/>
           </div>

           <button className="font-normal text-white text-2xl bg-gradient-to-br from-blue-400 to-purple-400 p-2 cursor-pointer  rounded-2xl mt-2" onClick={calculateBMI}>Calculate BMI</button>
           
           
           </div>
        </div>
      </div>
       <div className=" w-2/3 md:w-1/3 flex flex-col mb-4 justify-center items-center text-white border border-gray-100 p-4 rounded-2xl">
        <p className="text-xl">BMI</p>
        <p className="text-5xl">{currentBmi}</p>
        <p className="text-2xl">{currentBmiCatogary}</p>

      </div>
    </section>
  )
}
