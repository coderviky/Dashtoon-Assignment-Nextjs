import React, { Fragment } from 'react';
import { CgMonday } from 'react-icons/cg';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsFillBagFill } from 'react-icons/bs';
// import SearchInHeader from '../search/SearchInHeader';

const Navbar = () => {
    // const navigationData = [
    //     {
    //         name: 'AnyPage',
    //         href: '/anypage'
    //     },
    //     {
    //         name: 'Tab4',
    //         href: '/tab4'
    //     }
    // ];

    const router = useRouter();

    const checkRouteName = function (item) {
        if (router.asPath.includes(item.href)) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Fragment>
            <nav className='flex flex-row fixed h-16 w-full  bg-white drop-shadow'>
                <div className='flex flex-row items-center md:justify-between px-4 py-2  container mx-auto max-w-6xl'>
                    <Link href='/' key='/'>
                        <a>
                            <p className='text-xl font-bold text-center my-3'>
                                Comic Strip Generator
                            </p>
                        </a>
                    </Link>

                    {/* <div className='flex flex-row items-center'>
                        <Link href='/tab2'>
                            <a>
                                <span
                                    key='bagicon'
                                    className={classNames([
                                        'text-gray-400 hover:text-gray-700 cursor-pointer w-20 h-full flex items-center justify-center text-xl p-4',
                                        router.asPath.includes('/tab2') &&
                                            ' text-gray-700'
                                    ])}
                                >
                                    <span className='-mb-1'>
                                        <BsFillBagFill />
                                    </span>
                                </span>
                            </a>
                        </Link>

                        <button
                        className=' bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded h-10 '
                        onClick={() => router.push('/tab5')}
                    >
                        Login
                    </button>
                        <button
                            className='bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none'
                            onClick={() => router.push('/tab5')}
                        >
                            Login
                        </button>
                    </div> */}
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
