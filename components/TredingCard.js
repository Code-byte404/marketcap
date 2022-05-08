import React from 'react'
import Image from 'next/image'
import MoreButton from './MoreButton'
import TrendingCardRow from './TrendingCardRow'

const styles = {
    trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between`,
  }

const TredingCard = ({title,icon,trendingData}) => {
  return (
    <div className={styles.trendingCard}>
        <div className={styles.trendingCardWrapper}>
             <div className='flex'>
                 {icon && <Image src={icon} width={27} height={27} atl=''/>}
                 &nbsp;&nbsp;
                <p className='font-bold'>{title}</p>
             </div>
             <MoreButton />
        </div>

        {trendingData.map((item, index)=>{
            return (
                <TrendingCardRow
                key={index}
                number={item.number}
                name={item.name}
                symbol={item.symbol}
                icon={item.icon}
                isIncrement={item.isIncrement}
                rate={item.rate}
                />
            )
        })}
    </div>
  )
}

export default TredingCard