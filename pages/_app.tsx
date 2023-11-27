import NaviagtionLayout from '../components/navigation/NavigationLayout';
import '../styles/globals.css';

// import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
    return (
        <NaviagtionLayout>
            <div className='contianer mx-auto '>
                <Component {...pageProps} />
            </div>
        </NaviagtionLayout>
    );
}

export default MyApp;
