import React, { useState } from 'react';
import type Iplayer from '../types/Player';
const PlayerCard = ({ player }: { player: Iplayer }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <>
            {/* Card Image */}
              <div className="w-full h-48 md:h-56 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                <img 
                  src={player.imageUrl} 
                  alt={player.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Player Name */}
              <div className="flex items-center gap-2 mb-3">
                {/* User Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900">{player.name}</h3>
              </div>

              {/* Country & Role */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  {/* Flag Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                  </svg>
                  <span>{player.country}</span>
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium">
                  {player.role}
                </div>
              </div>

              <hr className="border-gray-200 my-4" />

              {/* Rating Section */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Rating</h4>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{player.leftTrait}</span>
                  <span>{player.rightTrait}</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between mt-6">
                <span className="font-bold text-gray-900">
                  Price: ${player.price}
                </span>
                <button 
                onClick={() => setIsSelected(true)}
                className="border border-gray-300  text-white px-4 py-2 rounded-lg text-sm font-medium  transition-colors bg-black">
                  {isSelected ? 'Selected' : 'Choose Player'}
                </button>
              </div>
        </>
    );
};

export default PlayerCard;