import localFont from "next/font/local";

export const spectral = localFont({
    src: [
        {
            path: '../../public/fonts/spectral/Spectral-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/spectral/Spectral-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-spectral',
    display: 'swap',
    preload: false,
});
