import { useState } from 'react';

const MoviePlayer = () => {

    const CORRECT_PASSWORD = import.meta.env.VITE_CORRECT_PASSWORD;
    const GOOGLE_DRIVE_FILE_ID = import.meta.env.VITE_GOOGLE_DRIVE_FILE_ID;

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const [isLoading, setIsLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const getEmbedUrl = (fileId) => {
        return `https://drive.google.com/file/d/${fileId}/preview`;
    };

    const embedUrl = getEmbedUrl(GOOGLE_DRIVE_FILE_ID);


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

    if (!isAuthenticated) {
        return (
            <div className="w-full max-w-md mx-auto px-4 sm:px-6">
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-800">

                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className="bg-red-600 bg-opacity-20 p-3 sm:p-4 rounded-full">
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>


                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2">
                        Protected Content
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8">
                        Enter password to access the movie
                    </p>


                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                placeholder="Enter password"
                                className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                autoFocus
                            />
                        </div>


                        {passwordError && (
                            <div className="bg-red-500 bg-opacity-10 border border-red-500 rounded-lg p-2.5 sm:p-3 flex items-center gap-2">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-red-400 text-xs sm:text-sm">{passwordError}</span>
                            </div>
                        )}


                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
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
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

            <div className="mb-4 sm:mb-6 md:mb-8 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2">
                    Private_Flix
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
                    Streaming from Google Drive
                </p>
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


                <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>

                    <iframe
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



        </div>
    );
};

export default MoviePlayer;
