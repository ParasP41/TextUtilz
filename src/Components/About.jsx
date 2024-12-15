import React from 'react'

export default function About() {
  return (
    <div className='max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-1 md:p-4'>
<div   id="accordion-collapse" data-accordion="collapse">
  <h1 className='text-center md:text-4xl p-4 text-2xl font-bold' >About Heading</h1>
  <h2 id="accordion-collapse-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 :focus:ring-gray-800 :border-gray-700 :text-gray-400 hover:bg-gray-300 :hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      
      <span>What is Flowbite?</span>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 ">
      <p className="mb-2 text-gray-500 :text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 :text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 :text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-800 :border-gray-700 :text-gray-400 hover:bg-gray-300 :hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
    
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
    </button>
  </h2>
  <div id="accordion-collapse-body-2"  aria-labelledby="accordion-collapse-heading-2">
    <div className="p-5 border border-b-0 border-gray-200 :border-gray-700">
      <p className="mb-2 text-gray-500 :text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 :text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 :text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 :focus:ring-gray-800 :border-gray-700 :text-gray-400 hover:bg-gray-300 :hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
    </button>
  </h2>
  <div id="accordion-collapse-body-3"  aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 :border-gray-700">
      <p className="mb-2 text-gray-500 :text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500 :text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500 :text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc :text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 :text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 :text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}
