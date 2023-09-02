import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from './Link';
import ActionButton from '@/shared/ActionButton';
import Logo from '@/assets/Logo.png';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
    isTopOfPage: boolean;
    selectedPage: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';
    const modalRight = isMenuToggled ? 'right-0' : 'right-[-100%]';

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={Logo} />

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full `}>
                                <div className={`${flexBetween} gap-8 text-md`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Our Classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contact Us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Become a Member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() =>
                                    setMenuToggled((state) => !state)
                                }
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && (
                <div
                    className={`fixed ${modalRight} bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl transition-all duration-300`}
                >
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setMenuToggled((state) => !state)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl font-bold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
