import './index.scss'
import SideBar from '../Sidebar/index'
import { Outlet } from 'react-router-dom'

const index = () => {
    return (
        <>
            <div className='App'>
                <SideBar />
                <div className='page'>
                    <span className='tags top-tags'>&lt;body&gt;</span>
                    <Outlet />
                    <span className='tags bottom-tags'>&lt;body&gt;</span>
                    <br />
                    <span className='bottom-tags-html'>&lt;html&gt;</span>
                </div>
            </div>
        </>
    )
}

export default index