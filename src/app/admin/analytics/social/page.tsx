import React from 'react';
import SocialCard from '@/components/analytics/SocialCard';
import SocialBarchartComponent from '@/components/analytics/SocialBarchartComponent';
import SocialMapper from '@/components/analytics/SocialMapper';

const page = () => {
  return (
    <div>
      <section>
      <h4 className="text-bold">SOCIAL ANALYTICS</h4>
      <div className="border-[grey] border-[2px] py-2 px-2">
        <h5>
          Social Engagement Summary
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
         <SocialCard mode="Likes"/>
         <SocialCard mode="Followers" className={"border-l-2 border-[grey]-300"}/>
         <SocialCard mode="Followers" className={"border-l-2 border-[grey]-300"}/>
         <SocialCard mode="Subscribers" className={"border-l-2 border-[grey]-300"}/>
         <SocialCard mode="Followers" className={"border-t-2 border-[grey]-200"}/>
         <SocialCard mode="Followers" className={"border-l-2 border-t-2 border-[grey]-300"}/>
         <SocialCard mode="Reviews" className={"border-l-2 border-t-2 border-[grey]-300"}/>
         <SocialCard mode="Reviews" className={"border-l-2 border-t-2 border-[grey]-300"}/>
      </div>
    
      </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
          <SocialBarchartComponent />
          <SocialMapper />
      </section>

      </div>
  )
}

export default page