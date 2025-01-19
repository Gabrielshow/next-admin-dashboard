import React from 'react'
import Barchart from '@/components/analytics/Barchart';


const SocialBarchartComponent = () => {
  return (
    <div className="border-[1px] py-2 px-2">
        <div className="flex flex-row justify-between py-1 px-1">
            <div className="flex flex-col gap-2">
                <p>Impression</p>
                <div className="flex flex-row">
                    <h3 className="text-bold">244k</h3>
                    <span className="text-grey-300 text-small">(Total impressions)</span>
                    <div className="bg-green-400 text-green-700">+23.40% {/* place an icon here */}</div>
                </div>
            </div>

            <button> 
                {/* book icon here */}
                Jan 2024 - Jun 2024
            </button>
        </div>
        <div>
            <Barchart />
        </div>
    </div>
  )
}

export default SocialBarchartComponent