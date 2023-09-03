import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: BenefitType[] = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, labore laborum veniam at distinctio quidem aliquid.',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, labore laborum veniam at distinctio quidem aliquid.',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert and Pro Trainers',
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, labore laborum veniam at distinctio quidem aliquid.',
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={`${SelectedPage.Benefits}`}
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => {
                    setSelectedPage(SelectedPage.Benefits);
                }}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
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
                    <HText>{'More than just a GYM'.toUpperCase()}</HText>
                    <p className="my-5 text-md">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quos qui ad nulla libero reprehenderit quidem,
                        expedita, ex totam quas natus ipsa. Cumque delectus
                        consectetur quibusdam adipisci at blanditiis accusantium
                        repellendus!
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit) => (
                        <Benefit
                            key={benefit.title}
                            title={benefit.title}
                            icon={benefit.icon}
                            descr={benefit.descr}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
                    {/* GRAPHIC */}
                    <img
                        className="mx-auto"
                        src={BenefitsPageGraphic}
                        alt="benefits-page-graphic"
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractWaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            x: 50,
                                        },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                        },
                                    }}
                                >
                                    <HText>
                                        {'Milions of happy members getting '.toUpperCase()}
                                        <span className="text-primary-500">
                                            FIT
                                        </span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: 50,
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                },
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempore officiis vero commodi,
                                sint architecto recusandae mollitia enim fugit
                                laboriosam quasi explicabo deleniti corporis,
                                nihil accusamus expedita, accusantium libero
                                possimus quisquam! Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Alias officiis
                                vero tenetur! Deserunt delectus quam recusandae
                                exercitationem porro commodi corporis adipisci
                                itaque rerum a aut vitae unde, quo fuga id?
                            </p>

                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo rerum deleniti
                                consequuntur animi ea, dolor adipisci ducimus
                                nam numquam facere. Omnis deserunt nesciunt sit
                                nam, ipsa repudiandae iste alias quos! Lorem
                                ipsum dolor sit amet consectetur adipisicing
                                elit. At totam reiciendis nemo et id ipsum,
                                dolor magnam adipisci.
                            </p>
                        </motion.div>
                        {/* BUTTON */}

                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;
