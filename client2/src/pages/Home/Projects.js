import React, { useState, useEffect } from 'react'
import SectionTitle from '../../components/SectionTitle'
import axios from "axios";
// import { projects } from '../../resources/projects'

function Projects({ portfolioData }) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0)
    const [imageUrl, setImageUrl] = useState('');

    // console.log("portfolioData" , portfolioData);
    const { projects } = portfolioData;
    console.log("projects", projects);
    //const { projects } = portfolioData

    const fetchImage = async () => {
        console.log("selectedItemIndex", projects[selectedItemIndex])
        if (projects[selectedItemIndex]?._id) {
            console.log('Selected Course ID:', projects[selectedItemIndex]?._id);
            const image = await getImage(projects[selectedItemIndex]?._id);
            setImageUrl(image);
        }
    };
    const getImage = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3001/api/portfolio/get-image/projects/${id}`, {
                responseType: 'blob', // Important for serving images
            });

            console.log("resposne", response.data)
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
            <SectionTitle title={"Projects"} />
            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#27da9c] w-2/5 sm:flex-row  sm:w-full'>
                    {projects.map((project, index) => {
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
                    <img src={projects[selectedItemIndex].image} alt="" className='h-62 w-72' />
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl'>
                            {projects[selectedItemIndex].title}
                        </h1>
                        <p className='text-white'>
                            {projects[selectedItemIndex].description}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects
