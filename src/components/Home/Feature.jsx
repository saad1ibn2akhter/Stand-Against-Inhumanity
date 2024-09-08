import { FaLaughWink, FaMonero } from "react-icons/fa";
import { MdDetails } from "react-icons/md";

export const Feature = () => {
    return (
        <div className="font-mons flex justify-center bg-center my-16 bg-lines bg-cover bg-no-repeat bg-blend-multiply bg-opacity-70 bg-gray-50">
            <div className="px-4">
                <div>
                    <div className="flex justify-center mb-6 mt-8">
                        <h1 className="capitalize badge text-[18px] bg-orange-100 text-orange-400 py-2 px-3  rounded-badge">a sustainable approach for better world</h1>

                    </div>
                    <div>
                        <h1 className="text-[42px] text-center leading-tighter tracking-tighter font-medium">
                            Choose us for impactful change <br />
                            in global communities
                        </h1>
                    </div>
                </div>

                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[36px] max-w-7xl mx-auto mt-16">
                    <div className="bg-white border-[1px] border-gray-500 p-6 rounded-[20px]">
                        <div className="mb-4">
                            <img width="100" height="100" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-transparency-marketing-agency-flaticons-lineal-color-flat-icons-4.png" alt="transparency-icon" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-medium capitalize text-[19px]">Transparent Operations</h1>
                            <p className="text-[15.5px] text-gray-500">We ensure that every donation is used effectively and ethically. Your trust in us is our highest priority.</p>
                           
                        </div>
                    </div>
                    <div className="bg-white border-[1px] border-orange-400 p-8 rounded-[20px]">
                        <div className="mb-4">
                            <img width="100" height="100" src="https://img.icons8.com/bubbles/100/people-working-together.png" alt="people-working-together" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-medium capitalize text-[19px]">Community Impact</h1>
                            <p className="text-[15.5px] text-gray-500">Your contributions are making a tangible difference in communities, supporting those in need and creating positive change.</p>
                        </div>
                    </div>
                    <div className="bg-white border-[1px] border-orange-400 p-8 rounded-[20px]">
                        <div className="mb-4">
                            <img width="80" height="80" src="https://img.icons8.com/external-flat-geotatah/64/external-agitate-life-coach-flat-flat-geotatah.png" alt="external-agitate-life-coach-flat-flat-geotatah" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-medium capitalize text-[19px]">Empowering Communities</h1>
                            <p className="text-[15.5px] text-gray-500">We work together with local communities to empower individuals and families through education, support, and resources.</p>
                        </div>
                    </div>
                    <div className="bg-white border-[1px] border-orange-400 p-8 rounded-[20px]">
                        <div className="mb-4">
                            <img width="100" height="100" src="https://img.icons8.com/clouds/100/collaboration.png" alt="collaboration" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-medium capitalize text-[19px]">Collaborative Efforts</h1>
                            <p className="text-[15.5px] text-gray-500">Join us in creating a better future. Together, we can make a significant impact on the lives of those in need.</p>
                        </div>
                    </div>
                    <div className="bg-white border-[1px] border-orange-400 p-8 rounded-[20px]">
                        <div className="mb-4">
                            <img width="100" height="100" src="https://img.icons8.com/cotton/100/share-contact.png" alt="share-contact" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-medium capitalize text-[19px]">Transparency & Trust</h1>
                            <p className="text-[15.5px] text-gray-500">Our operations are transparent, and we are accountable to our donors. Your support is crucial in our mission to help those in need.</p>
                        </div>
                    </div>
                    <div className="bg-white border-[1px] border-orange-400 p-8 rounded-[20px]">
                        <div className="mb-4">
                            <img width="100" height="100" src="https://img.icons8.com/doodle/100/welfare.png" alt="welfare" />
                        </div>
                        <div className="space-y-4">
                            <h1 className="font-medium capitalize text-[19px]">Making a Difference</h1>
                            <p className="text-[15.5px] text-gray-500">Your donations have a lasting impact. Help us continue our mission to support vulnerable communities worldwide.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};