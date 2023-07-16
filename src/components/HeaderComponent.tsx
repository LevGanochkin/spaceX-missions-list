import React, { FC } from "react";

interface HeaderComponentProps {
    action: any
    handleClick: (arg: boolean) => void
}
 
const HeaderComponent: FC<HeaderComponentProps> = ({ action, handleClick }) => {
    return ( 
        <div>
            <h1 className='text-center text-5xl pb-5'>
                Successful <span className="font-montserrat-subrayada whitespace-pre">
                    Space<span className="text-red-700">X</span>
                </span> missions
            </h1>            
            <div className="flex justify-center">
                <button
                    className="py-2 px-4 m-2 bg-yellow-300 rounded hover:shadow-md hover:bg-yellow-200 transition-all"
                    onClick={() => handleClick(true)}
                    >
                    Oldest launches
                    </button>
                <button
                    className="py-2 px-4 m-2 bg-green-300 rounded hover:shadow-md hover:bg-green-200 transition-all"
                    onClick={() => handleClick(false)}
                    >
                    Recent launches
                </button>
            </div>
        </div>
    );
}
 
export default HeaderComponent;