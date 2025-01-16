import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About({portfolioData}) {
    const skillsNew = [
        "HTML",
        "CSS",
        "JavaScript",
        "Reactjs",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Git",
        "SQL",
        "MySQL",
        "Python",
        "RestAPI",
        "Postman",
    ]
    const { about } = portfolioData;
    //console.log("about" , about);
    const {description1 , description2 , lottieUrl , skills} = about[0];
    //console.log("lottieUrl" , skills , lottieUrl);




    return (
        <div className="text-white">
            <SectionTitle
                title="About Me" />
            <div className="flex w-full items-center sm:flex-col">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <dotlottie-player
                        src={lottieUrl || "https://lottie.host/eddbbede-224f-49f3-a2d0-9377e4f642dc/rgROV01Guj.json"}
                        background="transparent"
                        speed="1"
                        autoplay>
                    </dotlottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full">
                    <p className=" text-white">
                        {description1 || "Hi! I'm Shivangi Agrawal, a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. I enjoy transforming complex problems into elegant, user-friendly solutions. With a keen eye for detail and a drive for efficiency."}
                    </p>
                    <p className=" text-white">
                        {description2 || "I work with modern web development frameworks to create seamless applications from concept to deployment. My skill set includes JavaScript, React, Node.js, and databases like MongoDB, enabling me to deliver complete and robust web solutions. I’m always eager to learn, innovate, and push the boundaries of what's possible in web development."}
                    </p>

                </div>

            </div>
            <div className="py-5">
                <h1 className="text-tertiary text-xl">
                    Here are few technologies I have been working recently:
                </h1>
                <div className="flex flex-wrap gap-5 mt-5">
                    {(skills || skillsNew).map((skill, index) => {
                        return (
                            <div key={index} className="border border-tertiary px-10 py-3">
                                <h1 className="text-tertiary">
                                    {skill}
                                </h1>

                            </div>
                        )
                    }
                    )}
                </div>

            </div>
        </div>
    )
}

export default About;