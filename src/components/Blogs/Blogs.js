import React from 'react';

const Blogs = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-2xl text-teal-800'>What are semantic tags?</h1>
            <p className='text-lg text-indigo-700'>Semantic tags mean logical or meaningful tags or elements. It keeps hundreds of lines of codes organized and readable for the developers. Using div all the time can make it very confusing. Therefore semantic elements can define their contents. A webpage can be split into different sections and can be labelled with a meaningful tags. Good example of  semantic tags can be article, header, footer, section, nav, summary and so on. The navigation bar (nav) can be inside header for example. And the end notes along with the copyright logos can be in footer tag.  </p>
            <br />
            <h1 className='text-2xl text-teal-800'>What is Context API</h1>
            <p className='text-lg text-indigo-700'>Context API avoids prop drilling. Data or variables can be passed between all the components without prop drilling. Global variables can be called and can be passed from the grand parent to grand children for example easily. It just needs React.createContext() which returns a provider and consumer. The provider wraps around all the components and provides that state to those components. Any child component called within a parent component will also get the state. </p>
        </div>
    );
};

export default Blogs;