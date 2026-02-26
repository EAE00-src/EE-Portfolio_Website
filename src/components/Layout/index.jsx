import '../../global_styles/index.scss';
import './index-layout.scss';

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from '../Loader/Loader';
import Sidebar from '../Sidebar/sidebar';
import DecoTags from '../Decotags/Decotags';


const Layout = () =>{

    const location = useLocation();

    const [loading, setLoading] = useState(true);
    //Mounting and unmounting of loader
    useEffect(() =>{
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)
        //Every time the page (location) changes,  run the Loader for x second(s)
        return () => clearTimeout(timer)//cleanup
    }, [location]);

    return (
        <div className='app'>
            
            <Sidebar />
            <div className='page'>
                <DecoTags tag={`body`} tagType='tags top-tags' />
                {/*If loading is true, display the loader until false state returns.
            loading controls fade direction, visible controls mount/unmount*/}
            {loading && <Loader />}
                <Outlet />

                <span className="tags bottom-tags">
                    <DecoTags tag="/body" />
                    <br />
                    <DecoTags tag="/html" tagType="bottom-tag-html" />
                </span>

            </div>
        </div>
    )
};

export default Layout;