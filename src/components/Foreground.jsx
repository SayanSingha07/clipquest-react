import React, { useRef } from 'react'
import Card from './Card'


export const Foreground = () => {
  const ref=useRef("null")
  const data = [{
    desc: "ddbsjbcj",
    filesize: ".9mb",
    close: true,
    tag: {
      isopen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    
    },
  },
  {
    desc: "ddbsjbcj",
    filesize: ".9mb",
    close: true,
    tag: {
      isopen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    
    },
    },
    {
      desc: "ddbsjbcj",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      
      },
    }
  ];


  return (
  
    <>
   
      ]
          <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-3 flex-wrap '>
      
        {data.map((items, index) =>
         <Card key={index} data={items} referance={ref} />
        )}
        
          </div>
          
      </>
  )
} 
