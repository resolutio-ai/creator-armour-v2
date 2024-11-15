import Image from 'next/image';
import { FC } from 'react';
import alex from "../../../public/landingpage/team/Alex.svg"
import sneha from "../../../public/landingpage/team/Sneha.svg"
import anish from "../../../public/landingpage/team/Anish.svg"
import zareen from "../../../public/landingpage/team/Zareen.svg"
import bestin from "../../../public/landingpage/team/Bestin.svg"


interface Member {
    id: number;
    name: string;
    profileLink: string;
    imageURL: string;
    mask: string;
}

interface MemberItemProps {
    member: Member;
}

const ourTeam = [
    {
        "id": 1,
        "imageURL": sneha,
        "name": "Sneha",
        "profileLink": "https://www.linkedin.com/in/sneha-vijayan-0a8608169/",
        "mask": "#FFCA70"
    },
    {
        "id": 2,
        "imageURL": zareen,
        "name": "Zarreen",
        "profileLink": "https://www.linkedin.com/in/zarreennreza/",
        "mask": "#B7ACD3"
    },
    {
        "id": 3,
        "imageURL": alex,
        "name": "Alexandra",
        "profileLink": "https://www.linkedin.com/in/ogubuike-alex",
        "mask": "#E76B5D"
    },
    {
        "id": 4,
        "imageURL": bestin,
        "name": "Bestin",
        "profileLink": "https://www.linkedin.com/in/bestin-john/",
        "mask": "#908CD8"
    },
    {
        "id": 5,
        "imageURL": anish,
        "name": "Anish",
        "profileLink": "https://www.linkedin.com/in/anishprvn/",
        "mask": "#F0CEB2"
    }
]

const MemberItem: FC<MemberItemProps> = ({ member }) => {
    const { name, imageURL, profileLink } = member;
    return (
        <div className='our-team-member text-center hover:grayscale'>
            <a href={profileLink} target='_blank' rel='noreferrer'>
                <div>
                    <Image
                        src={imageURL}
                        alt={`${name}'s picture`}
                        className='mx-auto mb-4 max-h-64'
                        width={300}
                        height={300}
                    />
                </div>
                <h3 className='mb-4 text-xl font-bold'>{name}</h3>
            </a>
        </div>
    );
};

const OurTeam: FC = async () => {
    return (
        <div className='our-team-container bg-[#F4F4F4]'>
            <div className='w-[80%] p-[1.5rem] md:p-[3rem] py-16 m-auto ' >
                <p className='py-4 px-[3rem] text-4xl font-[700] mb-4 text-primary'>Meet our Team</p>
                <div className='our-team grid gap-4 py-4 md:grid-cols-3'>
                    {ourTeam.map((member) => (
                        <MemberItem member={member} key={member.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
