import React from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { Prices } from '../constants'


const Price = () => {
  return (
    <div className="gap-4 pt-20 px-10 max-pn:px-3">
      {
        Prices.map((item: any, index: number) => (
          <div className='flex flex-col justify-center items-center' id={item.id} key={index}>
            <h1 className="text-4xl">{item.name}</h1>
            <div className={`grid ${item.details.length <= 3 ? `grid-cols-${item.details.length}` : 'grid-cols-2'} justify-between gap-4 max-tb:grid-cols-1`} >
              {
                item.details.map((item: any, index: number) => (
                  <div key={index} className="last:text-yellow-600">
                    <Card
                      tag={item.type}
                      image={item.image}
                      price={item.price}
                      bodyStyle=''
                    >
                      {
                        item.detail.map((item: any, index: number) => (
                          <li className='flex gap-4 items-center' key={index}>
                            <FontAwesomeIcon icon={
                              item.status ? faCheck : faX
                            } size='1x' className={`
                  ${item.status ? 'text-green-700' : 'text-red-900'
                              }
                `} />
                            <h1 className="text-black font-bold">{item.item}</h1>
                          </li>

                        ))
                      }
                    </Card>
                  </div>
                ))
              }
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Price