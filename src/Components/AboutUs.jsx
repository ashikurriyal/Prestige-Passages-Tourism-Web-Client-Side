import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const AboutUs = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 lg:gap-8 gap-4 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-800 lg:mb-12">
            <div className="flex flex-col justify-between bg-gray-200 p-8 rounded-2xl shadow-xl"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine" >
                <div className="space-y-12">
                    <h1 className=" font-playfair font-bold lg:text-5xl text-3xl lg:mt-2"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-600 to-blue-800">Prestige Passages!</span></h1>

                    <p className="font-worksans font-medium text-xl">
                        we are passionate about connecting travelers with the wonders of Europe and beyond. Founded on the belief that exploration enriches the soul, our platform serves as a gateway to unforgettable journeys and cultural experiences. We inspire and empower adventurers of all kinds to discover hidden gems and iconic landmarks, whether seeking historic cities, scenic landscapes, or off-the-beaten-path adventures. More than a travel website, Prestige Passages is a community of like-minded explorers united by a shared love of discovery. Join us on this exciting voyage of exploration and create your own unforgettable passages. Welcome to Prestige Passages, where every journey is an adventure, and every adventure is a story waiting to be told.

                    </p>
                    <button className="btn font-worksans font-semibold text-lg bg-sky-500 text-white lg:w-[190px]">Contact Us</button>


                </div>

            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine">
                <img src="https://i.ibb.co/hCG8gGJ/kourosh-qaffari-Rrhhzit-Yizg-unsplash.jpg/*  */" alt="" className="rounded-2xl shadow-2xl" />
            </div>

        </div>
    );
};

export default AboutUs;