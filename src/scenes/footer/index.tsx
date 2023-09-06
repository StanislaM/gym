import Logo from '@/assets/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione aperiam aliquid recusandae architecto
                        quaerat officiis neque cupiditate minus. Nisi qui non
                        dolorum at atque, repellendus vel modi aliquid optio
                        cupiditate?
                    </p>
                    <p>© Evogym All Rights Reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Architecto aut quae fugit</p>
                    <p>Fugit ullam nobis</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">
                        Perferendis, facilis sunt aut magnam.
                    </p>
                    <p>(333)555-1234</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
