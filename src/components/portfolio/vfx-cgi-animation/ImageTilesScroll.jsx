import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import imagesLoaded from 'imagesloaded';
import WebFont from 'webfontloader';

// This single component encapsulates all the logic and styling from the original project.
const ImageTilesScroll = () => {
    const scrollRef = useRef(null);
    const headerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    let locoScroll = null;

    // --- MEDIA DATA (8 images + 8 videos) ---
    const media = Array.from({ length: 8 }, (_, i) => ({
        img: `/portfolio/VFX/Thumbnail/${i + 1}.jpg`,
        video: `/portfolio/VFX/Video/${i + 1}.mp4`,
    }));

    // Create a mixed array of all media (images and videos)
    const allMedia = [];
    media.forEach(item => {
        allMedia.push(item.img);
        allMedia.push(item.video);
    });

    // Helper function to get media item by cycling through available items
    const getMediaItem = (index) => {
        return allMedia[index % allMedia.length];
    };

    // Helper function to render either video or image
    const renderMedia = (src, idx) => {
        if (src.endsWith(".mp4")) {
            return (
                <video
                    key={idx}
                    className="tiles__line-img"
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            );
        }
        return (
            <div
                key={idx}
                className="tiles__line-img"
                style={{ backgroundImage: `url(${src})` }}
            />
        );
    };

    // Generate images array by cycling through media
    const images = Array.from({ length: 12 }, (_, i) => getMediaItem(i));

    const perspectiveTiles = [
        { speed: 2, imgs: [images[0], images[1], images[2], images[3], images[4], images[5], images[6], images[7]] },
        { speed: -2, imgs: [images[6], images[7], images[8], images[9], images[10], images[11], images[0], images[1]] },
        { speed: 2, imgs: [images[2], images[3], images[4], images[5], images[6], images[7], images[8], images[9]] },
        { speed: -2, imgs: [images[8], images[9], images[10], images[11], images[0], images[1], images[2], images[3]] }
    ];

    const onelineTiles = [
        { id: 'grid2', speed: 2, imgs: [images[0], images[1], images[2], images[3]], title: 'Civilization' },
        { id: 'grid3', speed: -2, imgs: [images[4], images[5], images[6], images[7]], title: 'Empowerment' },
        { id: 'grid4', speed: 2, imgs: [images[8], images[9], images[10], images[11]], title: 'Apocalypse' }
    ];
    
    const fixedTiles = [
        { speeds: [3, 2, 1, -1, -2, -3], imgs: [images[5], images[4], images[3], images[2], images[1], images[0]] },
        { speeds: [3, 2, 1, -1, -2, -3], imgs: [images[11], images[10], images[9], images[8], images[7], images[6]] },
        { speeds: [3, 2, 1, -1, -2, -3], imgs: [images[2], images[3], images[4], images[7], images[6], images[5]] }
    ];

    // --- EFFECT HOOK for Initialization ---
    useEffect(() => {
        // --- UTILITY FUNCTIONS ---
        const preloadImages = (selector = 'img') => {
            return new Promise((resolve) => {
                imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
            });
        };
        const preloadFonts = (id) => {
            return new Promise((resolve) => {
                WebFont.load({ typekit: { id }, active: resolve });
            });
        };

        // --- PRELOAD AND INITIALIZE ---
        Promise.all([preloadImages('.tiles__line-img'), preloadFonts('rmd7deq')])
            .then(() => {
                if (scrollRef.current) {
                    locoScroll = new LocomotiveScroll({
                        el: scrollRef.current,
                        smooth: true
                    });
                }
                setIsLoading(false);
            });

        // --- CLEANUP FUNCTION ---
        return () => {
            if (locoScroll) {
                locoScroll.destroy();
            }
        };
    }, []);

    const handleBackToTop = (e) => {
        e.preventDefault();
        // The locoScroll instance is created after the initial render,
        // so we access it directly from the variable in the component's scope.
        if (locoScroll && headerRef.current) {
            locoScroll.scrollTo(headerRef.current);
        }
    };
    
    // --- COMBINED CSS ---
    const allCSS = `
        /* base.css */
        *, *::after, *::before { box-sizing: border-box; }
        :root { font-size: 16px; }
        body { margin: 0; --color-text: #fff; --color-bg: #111; --color-link: #aaa; --color-link-hover: #fff; --color-alt: #7f6a57; color: var(--color-text); background-color: var(--color-bg); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-family: neuzeit-grotesk, sans-serif; }
        .js .loading::before, .js .loading::after { content: ''; position: fixed; z-index: 1000; }
        .js .loading::before { top: 0; left: 0; width: 100%; height: 100%; background: var(--color-bg); }
        .js .loading::after { top: 50%; left: 50%; width: 60px; height: 60px; margin: -30px 0 0 -30px; border-radius: 50%; opacity: 0.4; background: var(--color-link); animation: loaderAnim 0.7s linear infinite alternate forwards; }
        @keyframes loaderAnim { to { opacity: 1; transform: scale3d(0.5,0.5,1); } }
        a { text-decoration: underline; color: var(--color-link); outline: none; }
        a:hover, a:focus { color: var(--color-link-hover); outline: none; text-decoration: none; }
        main { overflow: hidden; position: relative; }
        .frame { text-align: center; position: relative; z-index: 900; }
        .frame__title { font-size: 1rem; margin: 0 0 1rem; font-weight: normal; }
        .frame__links { display: inline; }
        .frame__links a:not(:last-child), .frame__demos a:not(:last-child) { margin-right: 1rem; }
        .frame__demos { margin: 1rem 0; }
        .frame__demo--current, .frame__demo--current:hover { text-decoration: none; color: var(--color-alt); }
        .content { padding: 3rem; min-height: 90vh; display: flex; position: relative; flex-direction: column; align-content: center; justify-content: space-between; }
        .content--auto { min-height: 0; }
        .content--feature { justify-content: flex-start; min-height: 0; }
        .content__text { font-size: clamp(1rem, 4vw, 2.25rem); }
        .content__text--right { align-self: flex-end; }
        .content__breakout { margin: 0 -3rem; white-space: nowrap; text-transform: uppercase; font-family: span, serif; font-weight: 200; font-style: italic; color: #211f1b; }
        .content__breakout--big { font-size: 13vw; font-weight: 200; }
        .content__breakout--medium { font-size: 5vw; }
        .tiles { --tiles-height: 52vw; height: var(--tiles-height); position: relative; overflow: hidden; }
        .tiles--oneline { --tiles-height: 50vh; min-height: 400px; margin: 10vh 0; }
        .tiles--fixed { --tiles-height: 65vw; margin-top: 25vh; }
        .tiles--perspective { overflow: visible; perspective: 1000px; --tiles-height: 500px; }
        .tiles__wrap { width: 150%; --tileswrap-height: var(--tiles-height); height: var(--tileswrap-height); position: absolute; left: 50%; top: 50%; transform: translate3d(-50%,-50%, 0); }
        .tiles--perspective .tiles__wrap { width: 200%; transform: translate3d(-50%,-50%,0) translateX(-25%) translateZ(-1200px) rotateX(75.5deg) rotateZ(12deg); }
        .tiles--fixed .tiles__wrap { width: 100%; }
        .tiles__line { display: flex; }
        .tiles--oneline .tiles__line { height: 100%; }
        .tiles__line-img { --tile-margin: 2vw; flex: none; width: calc(16.6666% - var(--tile-margin) * 2); height: calc( var(--tileswrap-height) / 3 - (3 * var(--tile-margin) / 2)); margin: var(--tile-margin); background-size: cover; background-position: 50% 50%; }
        .tiles--perspective .tiles__line-img { backface-visibility: hidden; outline: 1px solid transparent; --tile-margin: 1vw; width: calc(12.5% - var(--tile-margin) * 2); height: calc(16.666vw * 1.3); } /* Adjusted from 16.666% to 12.5% for 8 images */
        .tiles--oneline .tiles__line-img { --tile-margin: 1vw; margin: 0 var(--tile-margin); width: calc(25% - var(--tile-margin) * 2); height: 100%; }
        .tiles--fixed .tiles__line-img { --tile-margin: 10px; filter: brightness(0.8); width: calc(16.6666% - var(--tile-margin) * 2); height: calc( var(--tileswrap-height) / 3 - (3 * var(--tile-margin) / 2)); }
        video.tiles__line-img { object-fit: cover; object-position: center; }
        .tiles--darker .tiles__line-img { opacity: 0.7; }
        .tiles__title { position: absolute; height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center; font-size: 10vw; padding: 3rem; margin: 0; line-height: 0.8; font-family: span, serif; font-weight: 700; }
        .tiles__title--alt { font-size: clamp(2rem, 9vw, 7.25rem); }
        .tiles__title--intro { padding-top: 10vh; align-items: flex-start; justify-content: flex-start; }
        .tiles__title--right { justify-content: flex-end; } .tiles__title--left { justify-content: flex-start; }
        .tiles__title--full { height: 100%; }
        .backtop { align-self: center; margin: auto 0; font-size: 6vw; cursor: pointer; text-decoration: none; }
        .backtop::after { content: "\\2934"; font-size: 3vw; vertical-align: top; margin-left: 1rem; }
        html.has-scroll-smooth { overflow: hidden; }
        html.has-scroll-dragging { -webkit-user-select: none; user-select: none; }
        .has-scroll-smooth body { overflow: hidden; }
        .has-scroll-smooth [data-scroll-container] { min-height: 100vh; }
        @media screen and (min-width: 53em) {
            .frame { display: grid; align-content: space-between; width: 100%; grid-gap: 5vw; grid-template-columns: auto auto auto 1fr; grid-template-areas: 'title title links demos'; }
            .frame__title { margin: 0; grid-area: title; }
            .frame__demos { margin: 0; grid-area: demos; justify-self: end; }
            .frame__links { grid-area: links; padding: 0; justify-self: end; }
            .content__text { max-width: 800px; width: 50vw; min-width: calc(300px - 6rem); }
            .content__text--wide { max-width: 1000px; width: 65vw; }
        }
    `;

    return (
        <>
            <style>{allCSS}</style>
            <div className={`demo-3 ${isLoading ? 'loading' : ''}`}>
                <main id="main" ref={scrollRef} data-scroll-container>
                    <section id="header" ref={headerRef} className="content content--auto">
                    </section>
                    
                    <section className="tiles tiles--perspective tiles--darker">
                        <div className="tiles__wrap">
                            {perspectiveTiles.map((line, lineIdx) => (
                                <div key={lineIdx} className="tiles__line" data-scroll data-scroll-speed={line.speed} data-scroll-direction="horizontal">
                                    {line.imgs.map((img, imgIdx) => renderMedia(img, imgIdx))}
                                </div>
                            ))}
                        </div>
                        <h2 className="tiles__title tiles__title--intro" data-scroll data-scroll-speed="4">Neurotic<br/>culture</h2>
                    </section>
                    
                    <section className="content">
                        <p className="content__text" data-scroll data-scroll-speed="2">We have the money, the power, the medical understanding, the scientific know-how, the love and the community to produce a kind of human paradise. But we are led by the least among us – the least intelligent, the least noble, the least visionary.</p>
                    </section>
                    
                    {onelineTiles.map((grid, index) => (
                        <section key={grid.id} className="tiles tiles--oneline" id={grid.id}>
                            <div className="tiles__wrap">
                                <div className="tiles__line" data-scroll data-scroll-speed={grid.speed} data-scroll-target={`#${grid.id}`} data-scroll-direction="horizontal">
                                    {grid.imgs.map((img, imgIdx) => renderMedia(img, imgIdx))}
                                </div>
                            </div>
                            <h2 className={`tiles__title ${index % 2 === 0 ? 'tiles__title--right' : 'tiles__title--left'} tiles__title--full tiles__title--alt`} data-scroll data-scroll-speed="2">{grid.title}</h2>
                        </section>
                    ))}

                    <section className="content content--feature">
                        <p className="content__breakout content__breakout--big" data-scroll data-scroll-speed="20" data-scroll-direction="horizontal">Culture is not your friend</p>
                        <p className="content__breakout content__breakout--medium" data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">express ourselves through creative activity</p>
                    </section>

                    <section className="tiles tiles--fixed">
                        <div className="tiles__wrap">
                            {fixedTiles.map((line, lineIdx) => (
                                <div key={lineIdx} className="tiles__line">
                                    {line.imgs.map((img, imgIdx) => {
                                        if (img.endsWith(".mp4")) {
                                            return (
                                                <video
                                                    key={imgIdx}
                                                    className="tiles__line-img"
                                                    src={img}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    data-scroll
                                                    data-scroll-speed={line.speeds[imgIdx]}
                                                    data-scroll-direction="horizontal"
                                                />
                                            );
                                        }
                                        return (
                                            <div
                                                key={imgIdx}
                                                className="tiles__line-img"
                                                style={{ backgroundImage: `url(${img})` }}
                                                data-scroll
                                                data-scroll-speed={line.speeds[imgIdx]}
                                                data-scroll-direction="horizontal"
                                            ></div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="content">
                       
                        <div className="frame frame--footer">
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default ImageTilesScroll;