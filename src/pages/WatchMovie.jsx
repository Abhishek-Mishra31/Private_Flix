import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOVIES } from '../data/movies';

const WatchMovie = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const movie = MOVIES.find(m => m.id === parseInt(movieId));

    if (!movie) {
        return (
            <div className="min-h-screen cinema-container flex items-center justify-center px-4">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Movie Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all"
                    >
                        Back to Library
                    </button>
                </div>
            </div>
        );
    }

    const getEmbedUrl = (fileId) => {
        return `https://drive.google.com/file/d/${fileId}/preview`;
    };

    const embedUrl = getEmbedUrl(movie.fileId);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen bg-black">
         
            <header className="sticky top-0 z-30 bg-black bg-opacity-95 backdrop-blur-md border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                       
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-1.5 xs:gap-2 text-white hover:text-red-500 transition-all group"
                        >
                            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-xs xs:text-sm sm:text-base font-semibold">Back</span>
                        </button>

                      
                        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white truncate max-w-[40%] xs:max-w-[50%] sm:max-w-[60%]">
                            {movie.title}
                        </h1>

                        
                        <div className="text-xs xs:text-sm sm:text-base font-bold text-red-500">
                            Private_Flix
                        </div>
                    </div>
                </div>
            </header>

            <main className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-3 xs:py-4 sm:py-6 md:py-8">

               
                <div className="relative w-full bg-black rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">

                    
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10">
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-10 w-10 xs:h-12 xs:w-12 sm:h-16 sm:w-16 border-t-2 xs:border-t-3 sm:border-t-4 border-b-2 xs:border-b-3 sm:border-b-4 border-red-600 mb-2 xs:mb-3 sm:mb-4"></div>
                                <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg">Loading {movie.title}...</p>
                            </div>
                        </div>
                    )}

                    
                    <div
                        className="relative w-full overflow-hidden"
                        style={{
                            paddingBottom: '56.25%',
                            minHeight: '200px'
                        }}
                    >
                        <iframe
                            key={movie.id}
                            src={embedUrl}
                            className="absolute top-0 left-0 w-full h-full border-0"
                            style={{
                                minHeight: '200px'
                            }}
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            onLoad={handleIframeLoad}
                            title={movie.title}
                        />
                    </div>
                </div>


    
                <footer className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20 pb-4 xs:pb-6 sm:pb-8">
                    <div className="text-center space-y-1 sm:space-y-2">
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2">
                            <span>Developed by</span>
                            <a href='https://www.instagram.com/async.bytes_/' target="_blank" rel="noopener noreferrer">
                                <span className="text-white font-semibold">Asyncbytes</span>
                            </a>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </p>
                        <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
                            © 2026 Asyncbytes. All rights reserved. | IST
                        </p>
                    </div>
                </footer>

            </main>
        </div>
    );
};

export default WatchMovie;
