import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
    return(
        <div><MainCrosel/>
           <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarosel data={mens_kurta}/>
            <HomeSectionCarosel data={mens_kurta}/>
            <HomeSectionCarosel data={mens_kurta}/>
            <HomeSectionCarosel data={mens_kurta}/>
            <HomeSectionCarosel data={mens_kurta}/>
            
            
        </div>
        </div>

       
    )
}

export default HomePage