// pages/index.js

import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import ContentLoader from 'react-content-loader';

export default function Home() {
    const [textInput, setTextInput] = useState('');
    const [images, setImages] = useState(
        Array.from({ length: 10 }, () => null)
    );
    const [error, setError] = useState(null);
    const [imageLoaders, setImageLoaders] = useState(
        Array.from({ length: 10 }, () => false)
    );

    const fetchImage = async (text, index) => {
        try {
            const data = { inputs: text };
            const response = await fetch(
                'https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud',
                {
                    headers: {
                        Accept: 'image/png',
                        Authorization:
                            'Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(data)
                }
            );

            console.log('response', response);

            if (response.ok) {
                const result = await response.blob();
                const imageUrl = URL.createObjectURL(result);

                // Update the specific image in the images state array
                setImages(prevImages =>
                    prevImages.map((image, i) =>
                        i === index ? imageUrl : image
                    )
                );
            } else {
                console.error(`Image request ${index + 1} failed`);
                setError('Failed to fetch image. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        } finally {
            // Set loader state for the specific image to false
            setImageLoaders(prevLoaders =>
                prevLoaders.map((loader, i) => (i === index ? false : loader))
            );
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        setImages(Array.from({ length: 10 }, () => null));
        setError(null);

        // Reset loader states
        setImageLoaders(Array.from({ length: 10 }, () => true));

        let prompt =
            textInput + ' comics strip with speech bubbles or text annotations';

        // Fire off all 10 requests asynchronously
        for (let i = 0; i < 10; i++) {
            fetchImage(prompt, i);
        }
    };

    useEffect(() => {
        // Check if all loaders are set to false to determine if all image requests are completed
        const allRequestsCompleted = imageLoaders.every(loader => !loader);

        if (allRequestsCompleted) {
            // All requests are completed
            setError(null);
        }
    }, [imageLoaders]);

    return (
        // <div className='justify-center items-center h-screen'>
        <div className='container mx-auto p-4  h-full '>
            <div className='mt-4 mb-5 sm:my-5'>
                <p className='text-center'>
                    Generate comic strips with speech bubbles or text
                    annotations
                </p>
            </div>
            <form
                className='flex  sm:flex-row items-center mb-8 sm:mb-10 p-6 bg-white shadow-md rounded-md'
                onSubmit={handleSubmit}
            >
                <label className=' flex-none text-sm font-medium text-gray-700 mr-5'>
                    Enter text :
                </label>
                <input
                    type='text'
                    className=' p-2 flex-auto border border-gray-300 rounded-md  mr-5'
                    placeholder='Enter text'
                    value={textInput}
                    onChange={e => setTextInput(e.target.value)}
                />

                <button
                    type='submit'
                    className={` w-auto bg-blue-500 text-white p-2 rounded-md ${
                        imageLoaders.some(loader => loader)
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-blue-600'
                    }`}
                    disabled={imageLoaders.some(loader => loader)}
                >
                    {imageLoaders.some(loader => loader)
                        ? 'Fetching ...'
                        : 'Get Images'}
                </button>
            </form>
            {error && <p className='mt-2 text-red-500'>{error}</p>}

            <div className=' mt-4 grid  sm:grid-cols-2 lg:grid-cols-5 gap-6'>
                {images.map((imageUrl, index) => (
                    <div key={index} className='relative shadow-sm'>
                        {imageLoaders[index] && (
                            <div className='object-contain'>
                                <ContentLoader
                                    speed={2}
                                    // width={200}
                                    // height={200}
                                    viewBox='0 0 208 208'
                                    backgroundColor='#f3f3f3'
                                    foregroundColor='#ecebeb'
                                >
                                    <rect
                                        x='0'
                                        y='0'
                                        rx='10'
                                        ry='10'
                                        width='208'
                                        height='208'
                                    />
                                </ContentLoader>
                            </div>
                        )}
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt={`Image ${index + 1}`}
                                className='w-full h-full object-contain '
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
