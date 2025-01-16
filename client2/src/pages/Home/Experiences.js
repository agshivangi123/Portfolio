import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { experiences } from '../../resources/experiences';


export default function Experiences({portfolioData}) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)
    // console.log("portfolioData" , portfolioData);
    const { experience } = portfolioData;
    // console.log("experience" , experience);
    //const {description1 , description2 , lottieUrl , skills} = experience[0];
    // console.log("lottieUrl" , skills , lottieUrl);

    return (
        <div>
            <SectionTitle title="Experience" />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#27da9c] w-2/5 sm:flex-row  sm:w-full'>
                    {(experience || experiences).map((experience, index) => {
                        return (
                            <div
                                onClick={() => setSelectedItemIndex(index)}
                                className='cursor-pointer'
                            >
                                <h1
                                    className={`text-xl px-5 py-[0.5rem] whitespace-nowrap ${selectedItemIndex === index
                                            ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#3d5651] '
                                            : 'text-white'
                                        }`}
                                >
                                    {experience.period}
                                </h1>
                            </div>
                        )
                    }

                    )}
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl'>
                        {(experience[selectedItemIndex] || experiences[selectedItemIndex]).title}
                    </h1>
                    <h1 className='text-tertiary text-xl'>
                        {(experience[selectedItemIndex] || experiences[selectedItemIndex]).company}
                    </h1>
                    <p className='text-white'>
                        {(experience[selectedItemIndex] || experiences[selectedItemIndex]).description}
                    </p>
                </div>

            </div>
        </div>
    )
}