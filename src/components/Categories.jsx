import React from 'react'
import Bracelets from '../assets/images/bracelets.jpg'
import Broom from '../assets/images/brooms.jpg'
import MakeupRemovers from '../assets/images/makeup.jpg'
import CategoriesCard from './CategoriesCard'
import Switches from '../assets/images/switches.png'
import AirportRouter from '../assets/images/airport.jpg'
import PregnancyPillows from '../assets/images/pregnancy.png'
import Mobiles from '../assets/images/mobile.jpg'
import SpeakerStands from '../assets/images/speaker stands.png'
import Dupatta from '../assets/images/dupatta.jpg'
import Infant from '../assets/images/infant.jpg'
import Wristlets from '../assets/images/wristlets.jpg'
import ReligionBooks from '../assets/images/religion.jpg'
import Thermal from '../assets/images/thermal.jpg'
import Bracelets2 from '../assets/images/bracelets2.jpg'
import Rice from '../assets/images/rice.jpg'
import Toilet from '../assets/images/toilet.jpg'

const Categories = () => {
    const data = [
        {
            title: 'Bracelets',
            image: Bracelets
        }, {
            title: 'Brooms, Mops and Sweepers',
            image: Broom
        },
        {
            title: 'Makeup Removers',
            image: MakeupRemovers
        },
        {
            title: 'Switches',
            image: Switches
        }, {
            title: 'Airport Routers',
            image: AirportRouter
        }, {
            title: 'Mobiles',
            image: Mobiles
        }, {
            title: 'Pregnancy Pillows',
            image: PregnancyPillows
        }, {
            title: 'Speaker Stands',
            image: SpeakerStands
        }, {
            title: 'Dupatta Stoles & Shawls',
            image: Dupatta
        }, {
            title: 'Infant(0-6 Months)',
            image: Infant
        },
        {
            title: 'Wristlets',
            image: Wristlets
        }, {
            title: 'Religion Books',
            image: ReligionBooks
        }, {
            title: 'Thermal',
            image: Thermal
        },
        {
            title: 'Bracelets',
            image: Bracelets2
        }, {
            title: 'Rice',
            image: Rice
        },
        {
            title: 'Toilet',
            image: Toilet
        }
    ]
    return (
        <div>
            <h2 className='text-xl font-semibold'>Categories</h2>
            <div className='bg-white mt-5 pt-4'>
                <CategoriesCard product={data} />
            </div>
        </div>
    )
}

export default Categories
