import { SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import { ClassType } from '@/shared/types';
import Class from './Class';

const classes: ClassType[] = [
    {
        name: 'Weight Training Classes',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui odit culpa quidem mollitia maxime obcaecati animi. Voluptatibus libero voluptates id accusantium. Ad distinctio numquam nostrum, ut ab illo! Omnis.',
        image: image1,
    },
    {
        name: 'Yoga Classes',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui odit culpa quidem mollitia maxime obcaecati animi. Voluptatibus libero voluptates id accusantium. Ad distinctio numquam nostrum, ut ab illo! Omnis.',
        image: image2,
    },
    {
        name: 'Abb Core Classes',
        image: image3,
    },
    {
        name: 'Adventure Classes',
        image: image4,
    },
    {
        name: 'Fitness Classes',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui odit culpa quidem mollitia maxime obcaecati animi. Voluptatibus libero voluptates id accusantium. Ad distinctio numquam nostrum, ut ab illo! Omnis.',
        image: image5,
    },
    {
        name: 'Training Classes',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui odit culpa quidem mollitia maxime obcaecati animi. Voluptatibus libero voluptates id accusantium. Ad distinctio numquam nostrum, ut ab illo! Omnis.',
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={`${SelectedPage.OurClasses}`}
            className="w-full bg-primary-100 py-40"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -50,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>{'Our classes'.toUpperCase()}</HText>
                        <p className="py-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus et porro, itaque similique officiis
                            laudantium dolor beatae ab, cupiditate voluptatibus,
                            accusantium architecto nemo illo quaerat
                            repellendus? Rem, aliquid. Ipsum, ab?
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                descr={item.descr}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default OurClasses;
