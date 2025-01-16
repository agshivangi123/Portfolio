import React from 'react'
import SectionTitle from '../../components/SectionTitle'



function Contact({portfolioData}) {
    const user = {
        name: "Shivangi Agrawal",
        age: 20,
        gender: "Female",
        email: "agshivangi3393@gmailcom",
        contactnumber: "9669066607",
        country: "India",
    }
    const { contact } = portfolioData;
    //console.log("contacts" , contact);
    const { age , contactnumber , country , email , gender , name } = contact[0];
    return (
        <div>
            <SectionTitle title={"Contact"} />
            <div className='flex sm:flex-col items-center justify-between'>
                <div className='flex flex-col gap-2 text-sm'>
                    <p className='text-white ml-5'>
                        {"{"}
                        {Object.keys(contact[0] ).map((key) => {
                            return (
                                <h1>
                                    <span className='text-tertiary'> {key}</span> : <span className='text-tertiary'>{contact[0][key] || user[key]}</span>
                                </h1>
                            )
                        })}
                        {"}"}
                    </p>
                </div>
                <div className='h-[400px]'>
                <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
                <dotlottie-player src="https://lottie.host/07ec2195-38c8-42aa-8628-f405979cb5a0/GBYpPDdgfG.lottie" background="transparent" speed="1" loop autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default Contact
