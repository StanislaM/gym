import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { SyntheticEvent } from 'react';

import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e: SyntheticEvent) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section
            id={`${SelectedPage.ContactUs}`}
            className="mx-auto w-5/6 pt-24 pb-32"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
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
                    <HText>
                        <span className="text-primary-500">
                            {'Join now'.toUpperCase()}
                        </span>
                    </HText>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate, sint veniam rem molestiae quidem explicabo
                        quia voluptatibus saepe facere adipisci hic, ad suscipit
                        consequatur? Exercitationem voluptatum error quidem
                        inventore voluptas?
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 50,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action="https://formsubmit.co/doyepik336@gameszox.com"
                        >
                            <input
                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register('name', {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === 'required' &&
                                        'This field is required.'}
                                    {errors.name.type === 'maxLength' &&
                                        'Max length is 100 characters.'}
                                </p>
                            )}
                            <input
                                className={inputStyles}
                                type="email"
                                placeholder="EMAIL"
                                {...register('email', {
                                    required: true,
                                    pattern:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email!.type === 'required' &&
                                        'This field is required.'}
                                    {errors.email!.type === 'patern' &&
                                        'Invalid email address.'}
                                </p>
                            )}
                            <textarea
                                className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder="MESSAGE"
                                {...register('message', {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === 'required' &&
                                        'This field is required.'}
                                    {errors.message.type === 'maxLength' &&
                                        'Max length is 2000 characters.'}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white font-bold"
                            >
                                {'Submit'.toUpperCase()}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 50,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img
                                className="w-full"
                                src={ContactUsPageGraphic}
                                alt="contact-us-graphic"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
