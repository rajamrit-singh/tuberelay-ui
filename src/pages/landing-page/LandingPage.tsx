import React from 'react';

export const LandingPage = () => {
    return (
        <div className="bg-landing-page bg-cover bg-center bg-no-repeat h-full w-full grid grid-rows-7 grid-cols-3">
            <div className="row-start-4 row-end-6 col-span-1">
                <h3 className="text-7xl font-bold m-6 ml-8 text-orange-300">Easy Uploads</h3>
                <p className=" text-zinc-100 text-xl ml-8">
                    Say Goodbye to Manual Uploads! Let TubeRelay handle your Video Publishing Hassle.
                </p>
                <div>
                    <button className="text-white  py-3 px-5 rounded-full m-6 ml-8 text-xl border-2 hover:font-medium">
                        Signup now
                    </button>
                </div>

            </div>
        </div>
    );
};
