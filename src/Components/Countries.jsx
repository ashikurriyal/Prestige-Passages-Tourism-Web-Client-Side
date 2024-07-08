
import { useNavigate } from "react-router-dom";



const Countries = () => {

    const navigate = useNavigate();


    const handleFrance = (country_Name) => {
        navigate(`/country/${country_Name}`)
    }

    return (
        <div>
            <div className="text-center space-y-5 mt-12 mb-12">
                <h3 className="h3 text-5xl font-playfair font-bold text-sky-600">Featured Countries</h3>
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-12 justify-items-center">
                <div data-aos="zoom-in-up" onClick={() => handleFrance('France')} className="border-2 border-sky-500 card w-96 bg-base-200 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://i.ibb.co/0YJLHvs/anthony-delanoix-QAwci-Fl-S1g4-unsplash.jpg" alt="France" className="rounded-xl" />
                    </figure>
                    <div className="px-10 py-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-sky-600">France</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" onClick={() => handleFrance('Italy')} className="border-2 border-sky-500 card w-96 bg-base-200 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://i.ibb.co/sWVy69w/mathew-schwartz-s87b-BFZvi-AU-unsplash.jpg" alt="Italy" className="rounded-xl" />
                    </figure>
                    <div className="px-10 py-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-sky-600">Italy</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" onClick={() => handleFrance('Spain')} className="border-2 border-sky-500 card w-96 bg-base-200 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://i.ibb.co/55XXd5d/florian-wehde-WBGjg0-Ds-O-g-unsplash.jpg" alt="Spain" className="rounded-xl" />
                    </figure>
                    <div className="px-10 py-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-sky-600">Spain</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" onClick={() => handleFrance('Switzerland')} className="border-2 border-sky-500 card w-96 bg-base-200 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://i.ibb.co/4P47LDr/maximilian-jaenicke-Ua-BDu5hi8-Wg-unsplash.jpg" alt="Switzerland" className="rounded-xl" />
                    </figure>
                    <div className="px-10 py-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-sky-600">Switzerland</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" onClick={() => handleFrance('Netherlands')} className="border-2 border-sky-500 card w-96 bg-base-200 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src="https://i.ibb.co/7Nxvkkm/azhar-j-t2hg-HV1-R7-g-unsplash.jpg" alt="Netherlands" className="rounded-xl" />
                    </figure>
                    <div className="px-10 py-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-sky-600">Netherlands</h2>
                    </div>
                </div>
                <div data-aos="zoom-in-up" onClick={() => handleFrance('England')} className="card w-96 bg-base-200 shadow-xl border-2 border-sky-500">
                    <figure className="px-2 pt-2">
                        <img src="https://i.ibb.co/gyVFS96/benjamin-davies-Oja2ty-9-ZLM-unsplash.jpg" alt="England" className="rounded-xl text-sky-600" />
                    </figure>
                    <div className="px-10 py-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold text-sky-600">England</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Countries;
