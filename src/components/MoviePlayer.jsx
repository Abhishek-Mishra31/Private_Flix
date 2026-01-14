import { useState } from 'react';
import saiyaara from '../assets/saiyaara.jpeg'
import shiddat from '../assets/shiddat.jpg';
import aashiqui2 from '../assets/aashique2.jpg';
import laaptaladies from '../assets/laaptaladies.jpeg';

const MoviePlayer = () => {

    const CORRECT_PASSWORD = import.meta.env.VITE_CORRECT_PASSWORD;

    const MOVIES = [
        {
            id: 1,
            title: 'Saiyaara',
            fileId: import.meta.env.VITE_GOOGLE_SAIYAARA_DRIVE_FILE_ID,
            thumbnail: saiyaara
        },
        {
            id: 2,
            title: 'Shiddat',
            fileId: import.meta.env.VITE_GOOGLE_SHIDDAT_DRIVE_FILE_ID,
            thumbnail: shiddat
        },
        {
            id: 3,
            title: 'Aashiqui 2',
            fileId: import.meta.env.VITE_GOOGLE_AASHIQUI2_DRIVE_FILE_ID,
            thumbnail: aashiqui2
        },
        {
            id: 4,
            title: 'Laapta Ladies',
            fileId: import.meta.env.VITE_GOOGLE_LAAPTA_LADIES_DRIVE_FILE_ID,
            thumbnail: laaptaladies
        },
    ];

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const getEmbedUrl = (fileId) => {
        return `https://drive.google.com/file/d/${fileId}/preview`;
    };

    const embedUrl = selectedMovie ? getEmbedUrl(selectedMovie.fileId) : null;


    const handleIframeLoad = () => {
        setIsLoading(false);
    };


    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);

    };


    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (passwordInput === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            setPasswordError('');
        } else {
            setPasswordError('Incorrect password. Please try again.');
            setPasswordInput('');
        }
    };

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
        setIsLoading(true);
    };

    if (!isAuthenticated) {
        return (
            <div className="w-full max-w-md mx-auto px-3 xs:px-4 sm:px-6">
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-10 border border-gray-800">

                    <div className="flex justify-center mb-3 xs:mb-4 sm:mb-6">
                        <div className="bg-red-600 bg-opacity-20 p-2 xs:p-3 sm:p-4 rounded-full">
                            <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>


                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2">
                        Protected Content
                    </h2>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-400 text-center mb-4 xs:mb-6 sm:mb-8">
                        Enter password to access the movie
                    </p>


                    <form onSubmit={handlePasswordSubmit} className="space-y-3 xs:space-y-4">
                        <div>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-3 xs:px-4 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                autoFocus
                            />
                        </div>


                        {passwordError && (
                            <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-2 xs:p-2.5 sm:p-3 flex items-center gap-1.5 xs:gap-2">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-red-400 text-xs sm:text-sm">{passwordError}</span>
                            </div>
                        )}


                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 sm:px-6 text-xs xs:text-sm sm:text-base rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 xs:gap-2"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                            <span className="hidden xs:inline">Unlock Movie</span>
                            <span className="xs:hidden">Unlock</span>
                        </button>
                    </form>


                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">

            <div className="mb-3 xs:mb-4 sm:mb-6 md:mb-8 text-center">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2">
                    Private_Flix
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
                    Streaming from Google Drive
                </p>
            </div>

            <div className="mb-4 xs:mb-6 sm:mb-8">
                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 xs:mb-3 sm:mb-4">
                    Select a Movie
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
                    {MOVIES.map((movie) => (
                        <button
                            key={movie.id}
                            onClick={() => handleMovieSelect(movie)}
                            className={`group relative overflow-hidden rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 ${selectedMovie?.id === movie.id
                                ? 'ring-4 ring-red-500 shadow-2xl shadow-red-500/50'
                                : 'ring-2 ring-gray-700 hover:ring-gray-500'
                                }`}
                        >

                            <div className="aspect-[3/4] sm:aspect-[2/3] bg-gray-800 overflow-hidden">
                                <img
                                    src={movie.thumbnail}
                                    alt={movie.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>


                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-2 xs:p-3 sm:p-4">
                                <div className="w-full">
                                    <h3 className="text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 xs:mb-1 leading-tight">
                                        {movie.title}
                                    </h3>
                                    {selectedMovie?.id === movie.id && (
                                        <div className="flex items-center gap-0.5 xs:gap-1 text-red-500 text-[10px] xs:text-xs sm:text-sm">
                                            <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-semibold">Now Playing</span>
                                        </div>
                                    )}
                                </div>
                            </div>


                            {selectedMovie?.id !== movie.id && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                    <div className="bg-red-600 rounded-full p-3 sm:p-4">
                                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>


            {selectedMovie ? (
                <>

                    <div className="mb-2 xs:mb-3 sm:mb-4">
                        <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">
                            {selectedMovie.title}
                        </h3>
                    </div>


                    <div className="relative w-full bg-black rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden">

                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
                                <div className="text-center">
                                    <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 sm:border-t-4 border-b-2 sm:border-b-4 border-red-600 mb-3 sm:mb-4"></div>
                                    <p className="text-white text-sm sm:text-base md:text-lg">Loading movie...</p>
                                </div>
                            </div>
                        )}


                        <div className="relative w-full overflow-hidden min-h-[200px] xs:min-h-[250px] sm:min-h-0" style={{ paddingBottom: '56.25%' }}>

                            <iframe
                                key={selectedMovie.id}
                                src={embedUrl}
                                className="absolute top-0 left-0 w-full h-full border-0"
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    touchAction: 'auto'
                                }}
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                onLoad={handleIframeLoad}
                                title="Movie Player"
                                loading="lazy"
                            />
                        </div>

                    </div>
                </>
            ) : (

                <div className="relative w-full bg-gray-900 bg-opacity-50 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-dashed border-gray-700 overflow-hidden">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                            <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 mb-2 text-center">
                                Select a Movie to Start Watching
                            </h3>
                            <p className="text-sm sm:text-base text-gray-500 text-center">
                                Click on any movie card above to begin playback
                            </p>
                        </div>
                    </div>
                </div>
            )}


            <footer className="mt-8 sm:mt-12 md:mt-16 pb-6 sm:pb-8">
                <div className="text-center space-y-1 sm:space-y-2">
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 sm:gap-2">
                        <span>Developed by</span>
                        <a href='https://www.instagram.com/async.bytes_/' target="_blank" rel="noopener noreferrer"><span className="text-white font-semibold">Asyncbytes</span></a>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </p>
                    <p className="text-gray-500 text-[10px] xs:text-xs sm:text-sm">
                        © 2026 Asyncbytes. All rights reserved. | IST
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default MoviePlayer;
