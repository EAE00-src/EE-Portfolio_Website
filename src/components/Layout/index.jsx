import '../../global_styles/index.scss';
import './index-layout.scss';

import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import DecoTags from '../Decotags/Decotags';


const Layout = () =>{
    return (
        <div className='app'>
            <Sidebar />
            <div className='page'>
                <DecoTags tag={`body`} tagType='tags top-tags' />

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