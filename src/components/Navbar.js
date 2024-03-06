import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [show, setShow] = useState(true);
    const [isMobile, setIsMobile] = useState();


    function handleWindowResize() {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        handleWindowResize();
        // Register the event listener
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <header className="px-5 bg-white font-semibold">
            <nav className={isMobile ? "p-5  relative " : "px-5 py-2 relative flex justify-between align-center items-center"}>
                <div>
                    <img className="aspect-auto h-6" alt="company-logo" src="https://lh7-us.googleusercontent.com/TvLUwSeXBErDf9yMpa2BwEOFA8EKepuCaus1b6f-4Qzz3yv4O2YcPRhJu1R1NaTxiF4UH7a6lt8xW4TVlw6W2TIPCZY5_5eKgKRREthnlVtAQ4dEg1rVt5nNzAMSTkjr2rvTiit06ELjWHGGsEH_4Q"></img>
                </div>
                <div className={isMobile ? show ? "absolute -top-40 -left-40" : "flex justify-center items-center flex-col text-center mt-10" : "flex items-center"}>
                    <ul className={isMobile ? "py-2" : "flex "}>
                        <li className="p-2 m-2"><button> Crypto Taxes </button></li>
                        <li className="p-2 m-2"><button>Resource Center</button></li>
                        <li className="p-2 m-2"><button>Free Tools</button></li>
                    </ul>
                    <button className="h-10 w-32 mx-2 bg-blue-600 text-slate-100 rounded-lg hover:bg-blue-500 ">Get Started</button>
                </div>
                {
                    isMobile ?
                        (show ? <FontAwesomeIcon icon={faBars} size="2x" className="absolute top-5 right-5" onClick={() => setShow(!show)} /> :
                            <FontAwesomeIcon icon={faXmark} size="2x" className="absolute top-5 right-5" onClick={() => setShow(!show)} />
                        ) : ""
                }

            </nav>
        </header>
    );
}

export default Navbar;