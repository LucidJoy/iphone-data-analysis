import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const fetchPlot = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/plot");
    const blob = await response.blob();
    setImageUrl(URL.createObjectURL(blob));
  };

  return (
    <>
      <Head>
        <title>iPhone Sales</title>
        <meta
          name='description'
          content='iPhone data analysis application
        '
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-white flex flex-col items-center justify-center'>
        <h1 className='text-[30px] mt-[15px] font-medium text-[#636EFA]'>
          iPhone Sales Analysis
        </h1>

        <div className='flex items-center mt-[10px] relative w-[300px]'>
          <button
            onClick={fetchPlot}
            className='bg-green-400 px-[20px] py-[5px] rounded-[8px] hover:scale-110 transition-all duration-150 ease-in-out text-[#1a1a1d] font-medium ml-[80px]'
          >
            Fetch Plot
          </button>

          <p className='text-gray-500 text-[14px] absolute -right-[80px]'>{`(*Data fetched using python)`}</p>
        </div>

        <div className=''>
          <select
            value={selectedValue}
            onChange={handleValueChange}
            className='bg-gray-600 px-[10px] py-[10px] rounded-[10px] mb-[10px]'
          >
            {/* <option value=''>Select an option</option> */}
            <option value='option1'>Bar Visualization</option>
            <option value='option2'>Scatter Visualization</option>
          </select>

          {selectedValue === "option1" && (
            <img
              src='https://res.cloudinary.com/lucidjoy/image/upload/v1682571866/bar_vljlyv.png'
              alt='bar'
              className='w-[1096px] h-[539px] rounded-[15px]'
            />
          )}

          {selectedValue === "option2" && (
            <img
              src='https://res.cloudinary.com/lucidjoy/image/upload/v1682571886/scatter_clrwf0.png'
              alt='scatter'
              className='w-[1096px] h-[539px] rounded-[15px]'
            />
          )}
        </div>
      </main>
    </>
  );
}
