export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
}

export type BenefitType = {
    icon: JSX.Element;
    title: string;
    descr: string;
};

export type ClassType = {
    name: string;
    descr?: string;
    image: string;
};
