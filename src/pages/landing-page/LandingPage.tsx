import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const redirectToSignupPage = () => {
        navigate('/signup')
    }

    return (
        <div className="bg-landing-page bg-cover bg-center bg-no-repeat h-full w-full grid grid-rows-7 grid-cols-3">
            <div className="row-start-4 row-end-6 col-span-1">
                <h3 className="text-7xl font-bold m-6 ml-8 text-white">Easy Uploads</h3>
                <p className=" text-zinc-100 text-xl ml-8 w-96">
                    Say goodbye to manual uploads! Let TubeRelay handle your video publishing hassle.
                </p>
                <div>
                    <button
                        onClick={redirectToSignupPage}
                        className="text-white  py-3 px-5 rounded-full m-6 ml-8 text-xl border-2 border-red-600 hover:font-medium">
                        Sign up now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;