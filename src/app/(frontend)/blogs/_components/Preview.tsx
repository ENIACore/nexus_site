import React from 'react';
import Image from 'next/image';
import ButtonLink from '@/src/components/ui/ButtonLink';
import Text from '@/src/components/ui/Text';


interface PreviewProps {
    description: string;
    url: string;
    alt: string;
    view?: string;
}

const Preview: React.FC<PreviewProps> = ({description, url, alt, view = '#'}) => {
    return (
        <div className="flex flex-col sm:flex-row items-center">
            <div className="w-50 h-50 shrink-0">
                    <Image
                        src={url}
                        alt={alt}
                        height={200}
                        width={200}
                        className="w-full h-full object-cover rounded-lg"
                        loading='eager'
                        priority
                    />
            </div>
            <div className="flex flex-col p-4">
                <Text className='text-center' text={description} size='bs'/>
                <ButtonLink className='mx-auto mt-4' link={view}  text='View Blog' size='lg'/>
            </div>
        </div>
    );
};

export default Preview;
