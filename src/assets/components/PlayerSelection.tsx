import { useState } from 'react';
import type Iplayer from '../types/Player'
import PlayerCard from './PlayerCard';
interface PlayerType {
  players: Iplayer[];
}
type StatusType = 'available' | 'selected';
const PlayerSelection = ({players}: PlayerType) => {
  const [status, setStatus] = useState<StatusType>('available');
  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-325 mx-auto w-full">
        
        {/* Top Header & Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-0">
          <h2 className="text-2xl font-bold text-gray-900">{status==='available'?'Available Players' : 'Selected Players'}</h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <button  
            onClick={()=> setStatus('available')}
            className={`px-6 py-2.5 cursor-pointer text-sm font-bold transition-colors ${status == 'available'? 'bg-amber-300 text-black': ''}`}
            >
              Available
            </button>
            <button 
            onClick={()=> setStatus('selected')}
            className={`px-6 py-2.5 text-sm cursor-pointer transition-colors ${status == 'selected'? 'bg-amber-300 text-black': ''}`}
            >
              Selected (0)
            </button>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            status === 'available' ? (
              players.map((player: Iplayer) => (
                <div key={player.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  
                  <PlayerCard player={player}></PlayerCard>

                </div>
              ))
            ) : (
              <div>No player selected yet</div>
            )}
        </div>

      </div>
    </section>
  );
};

export default PlayerSelection;