import { ClassType } from '@/shared/types';

type Props = ClassType;

const Class = ({ name, image, descr }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
                           h-[380px] w-[450px] flex-col item-center justify-center
                           whitespace-normal bg-primary-500 text-center text-white
                           opacity-0 transition duration-500 hover:opacity-90 `;

    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className={overlayStyles}>
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{descr}</p>
            </div>
            <img src={image} alt="class-image" />
        </li>
    );
};

export default Class;
