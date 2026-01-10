import saiyaara from '../assets/saiyaara.jpeg';
import shiddat from '../assets/shiddat.jpg';
import aashiqui2 from '../assets/aashique2.jpg';

export const MOVIES = [

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
    }
];
