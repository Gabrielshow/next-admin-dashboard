import React from 'react'
import SocialTraffic from '@/components/analytics/Traffic';


const SocialMapper = () => {
  return (
    <div className="flex flex-col">
        <SocialTraffic className="bg-grey-300 text-bold" platform="Platform" visitors="Visitors" clicks="Clicks" clickThroughRate='clickthrough Rate'/>
        <SocialTraffic className="text-small text-grey-200" platform="Facebook" visitors="500k" clicks="25k" clickThroughRate='75.0%'/>
        <SocialTraffic className="text-small text-grey-200" platform="X" visitors="500k" clicks="25k" clickThroughRate='80.0%'/>
        <SocialTraffic className="text-small text-grey-200" platform="Instagram" visitors="500k" clicks="25k" clickThroughRate='80.0%'/>
        <SocialTraffic className="text-small text-grey-200" platform="Youtube" visitors="500k" clicks="25k" clickThroughRate='80.0%'/>
        <SocialTraffic className="text-small text-grey-200" platform="LinkedIn" visitors="500k" clicks="25k" clickThroughRate='80.0%'/>
        <SocialTraffic className="text-small text-grey-200" platform="PInterest" visitors="500k" clicks="25k" clickThroughRate='80.0%'/>
        <SocialTraffic className="text-small text-grey-200" platform="Trustpilot" visitors="500k" clicks="25k" clickThroughRate='80.0%'/>
        <SocialTraffic className="text-small text-grey-200" platform="Google" visitors="500k" clicks="25k" clickThroughRate='80.0%'/>
    </div>
  )
}

export default SocialMapper