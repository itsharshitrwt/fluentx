import React from 'react';

const Navbaar = () => {
    return (
        <div className="bg-purple-600 h-[5vh] md:h-[10vh] flex justify-between items-center px-4">
            <div className="text-white text-lg font-bold">
                <span className="text-white">Fluent</span>
                <span className="text-gray-600">X</span>
            </div>
            <a 
                href="https://github.com/your-repo-link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white text-xl"
            >
                ★
            </a>
        </div>
    );
}

export default Navbaar;



