'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react'

type Link = {
    id: string;
    text: string;
}

const OnThisPage = ({htmlContent}: {htmlContent: string}) => {
    const [links, setLinks] = useState<Link[] | null>(null)
    useEffect(() => {
      const temp = document.createElement('div')   
      temp.innerHTML = htmlContent

      const headings = temp.querySelectorAll('h2')
    
      const generatedLinks: Link[] = [];
      headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`
        heading.id = id;

        generatedLinks.push({
            id: id,
            text: (heading as HTMLElement).innerText
        })

    })
    setLinks(generatedLinks)
    
    }, [htmlContent])
    

  return (
    <div className='w-full relative'>
        <div>
            <h2 className='font-bold text-2xl mb-8'>On this page :)</h2>
            <ul className='not-prose flex flex-col gap-2'>
                {links && links.map((link) => (
                  <li className='font-regular underline underline-offset-4' key={link.id}>
                    <Link href={`#${link.id}`}>{link.text}</Link>
                  </li>
                ))}
            </ul>
        </div>        
    </div>
  )
}

export default OnThisPage