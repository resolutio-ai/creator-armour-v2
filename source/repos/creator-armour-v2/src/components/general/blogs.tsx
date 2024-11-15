import Image from 'next/image';
import { FC } from 'react';
import { PrimaryButton } from '../evidence/button';

// import './Blogs.scss';
// import { getBlogs } from '@/data/adapter/CMS/cms.service';

interface BlogItem {
    id: number;
    title: string;
    link: string;
    description: string;
    imageURL: string;
}

interface Blog {
    heading: string;
    link: string;
    btnText: string;
    blogList: BlogItem[];
}

interface BlogItemProps {
    blog: BlogItem;
}

const BlogItem: FC<BlogItemProps> = ({ blog }) => {
    const { title, description, imageURL, link } = blog;
    return (
        <div className='border border-[white] hover:border-primary blog-item p-[1.5rem] md:p-[3rem] mb-10 grid gap-6 md:grid-cols-2 items-center bg-white hover:shadow-md'>
            <div className='blog-image-container justify-self-end md:order-2 md:mb-0'>
                <Image
                    src={imageURL}
                    alt={title}
                    className='blog-img rounded-md'
                    height={400}
                    width={500}
                />
            </div>
            <div className='blog-content order-2 basis-full md:order-1 md:basis-6/12'>
                <h4 className='blog-title mb-4 text-xl font-bold'>{title}</h4>
                <p className='blog-description font-dm-sans-text mb-6'>{description}</p>

                <div className='my-10 h-full'>
                    <PrimaryButton
                        text={"See More"}
                        disabled={false}
                        isExternal={true}
                        link={link}
                        className="w-fit bg-primary text-white px-5 py-3 hover:border hover:border-[primary] hover:bg-white hover:text-[#5f437f]"
                    />
                </div>
            </div>
        </div >
    );
};

export function Blogs({ heading, btnText, blogList }: Blog) {
    return (
        <div className='our-team-container'>
            <div className='w-[90%] p-[1.5rem] md:p-[3rem] py-16 m-auto ' >
                <p className='py-4 px-[3rem] text-4xl font-[700] mb-4 text-primary'>{heading}</p>
                <div className='pb-4'>
                    {blogList.map((blogItem) => (
                        <BlogItem key={blogItem.id} blog={blogItem} />
                    ))}
                </div>
                <div className='my-10 flex justify-center'>
                    <PrimaryButton
                        text={btnText}
                        link={"https://medium.com/resolutio-nft/"}
                        isExternal={true}
                        disabled={false}
                        className="w-fit bg-primary text-white px-5 py-3 hover:border hover:border-[primary] hover:bg-white hover:text-[#5f437f]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
