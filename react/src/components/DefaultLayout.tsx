import React from 'react';
import '../index.css';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const DefaultLayout = () => {
    const { user, token, setUser, setToken } = useStateContext();

    if (!token) {
        return <Navigate to='/login' />;
    }

 
    const userName = user?.name ?? 'Guest'; 

    return (
        <div id='defaultLayout'>
            <aside>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/users'>Users</Link>
            </aside>
            <div className='content'>
                <header>
                    <div>Header</div>
                    <div>
                        {userName}
                        <a href="#" className='btn-logout' onClick={() => {
                            setToken(null); 
                            setUser(null);
                        }}>
                            Logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;
