import React, { useState, useEffect } from 'react'
import SectionTitle from '../../components/SectionTitle'
// import { experiences } from '../../resources/experiences'
//import { courses } from '../../resources/courses'
//import portfolioModel from '../../../../server/models/portfolioModel'
import axios from "axios";


function Courses({ portfolioData }) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const { courses } = portfolioData

    const fetchImage = async () => {
        if (courses[selectedItemIndex]?._id) {
            console.log('Selected Course ID:', courses[selectedItemIndex]?._id);
            const image = await getImage(courses[selectedItemIndex]?._id);
            setImageUrl(image);
        }
    };
    const getImage = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/portfolio/get-image/courses/${id}`, {
                responseType: 'blob', // Important for serving images
            });


            const imageUrl = URL.createObjectURL(response.data);
            console.log('Image URL:', imageUrl);
            setImageUrl(imageUrl);
            return imageUrl;
        } catch (err) {
            console.error('Error fetching image:', err);
            return null; // Handle fallback (e.g., show a placeholder)
        }
    };

    useEffect(() => {
        fetchImage();
    }, [selectedItemIndex]);


    return (
        <div>
            <SectionTitle title={"Courses"} />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#27da9c] w-2/5 sm:flex-row  sm:w-full'>
                    {courses.map((project, index) => {
                        return (
                            // console.log("project",project),
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
                                    {project.title}
                                </h1>
                            </div>
                        )
                    }

                    )}
                </div>
                <div className='flex items-center justify-center gap-10'>
                    <img src={courses[selectedItemIndex].image} alt="" className='h-62 w-72' />
                    {/* <img className='h-62 w-72' src={`http://localhost:3001/api/portfolio/get-image/${courses[selectedItemIndex]._id}`} alt="Course Image" /> */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl'>
                            {courses[selectedItemIndex].title}
                        </h1>
                        <p className='text-white'>
                            {courses[selectedItemIndex].description}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Courses
