import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import Splitting from 'splitting';
import imagesLoaded from 'imagesloaded';
import WebFont from 'webfontloader';


const ImageStackGallery = () => {
    const scrollRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedImage, setExpandedImage] = useState(null);


    const galleryData = [
         { id: 1, video: '/portfolio/VFX/Video/1.mp4', thumbnail: '/portfolio/VFX/Thumbnail/1.jpg', title: 'Aevum' },
         { id: 2, video: '/portfolio/VFX/Video/2.mp4', thumbnail: '/portfolio/VFX/Thumbnail/2.jpg', title: 'Tempus' },
         { id: 3, video: '/portfolio/VFX/Video/3.mp4', thumbnail: '/portfolio/VFX/Thumbnail/3.jpg', title: 'Spatiu' },
         { id: 4, video: '/portfolio/VFX/Video/4.mp4', thumbnail: '/portfolio/VFX/Thumbnail/4.jpg', title: 'Orbis' },
         { id: 5, video: '/portfolio/VFX/Video/5.mp4', thumbnail: '/portfolio/VFX/Thumbnail/5.jpg', title: 'Motus' },
         { id: 6, video: '/portfolio/VFX/Video/6.mp4', thumbnail: '/portfolio/VFX/Thumbnail/6.jpg', title: 'Fluxus' },
         { id: 7, video: '/portfolio/VFX/Video/7.mp4', thumbnail: '/portfolio/VFX/Thumbnail/7.jpg', title: 'Stella' },
         { id: 8, video: '/portfolio/VFX/Video/8.mp4', thumbnail: '/portfolio/VFX/Thumbnail/8.jpg', title: 'Caelum' },
     ];

    // --- MAIN EFFECT HOOK ---
    useEffect(() => {
        let locoScroll;
        let cursor;
        const eventListeners = []; // To keep track of listeners for cleanup

        // --- UTILITY FUNCTIONS (from utils.js) ---
        const lerp = (a, b, n) => (1 - n) * a + n * b;
        const calcWinsize = () => ({ width: window.innerWidth, height: window.innerHeight });
        const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
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

        // --- CURSOR CLASS ---
        class Cursor {
            constructor(el) {
                this.DOM = { el };
                this.DOM.inner = this.DOM.el.querySelector('.cursor__inner');
                this.mouse = { x: 0, y: 0 };
                this.renderedStyles = {
                    tx: { previous: 0, current: 0, amt: 0.2 },
                    ty: { previous: 0, current: 0, amt: 0.2 },
                };
                this.onMouseMoveEv = (e) => {
                    this.mouse.x = e.clientX;
                    this.mouse.y = e.clientY;
                };
                window.addEventListener('mousemove', this.onMouseMoveEv);
                requestAnimationFrame(() => this.render());
            }
            render() {
                this.renderedStyles.tx.current = this.mouse.x - 15;
                this.renderedStyles.ty.current = this.mouse.y - 15;
                for (const key in this.renderedStyles) {
                    this.renderedStyles[key].previous = lerp(
                        this.renderedStyles[key].previous,
                        this.renderedStyles[key].current,
                        this.renderedStyles[key].amt
                    );
                }
                this.DOM.el.style.transform = `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px)`;
                requestAnimationFrame(() => this.render());
            }
            enter() { gsap.to(this.DOM.inner, { duration: 0.3, scale: 1.5 }); }
            leave() { gsap.to(this.DOM.inner, { duration: 0.3, scale: 1 }); }
        }

        // --- PRELOAD AND INITIALIZE ---
        Promise.all([preloadImages('.gallery__item-thumbnail'), preloadFonts('lty4rfv')])
            .then(() => {
                if (!scrollRef.current) return;

                // --- 1. INITIALIZE LOCOMOTIVE SCROLL ---
                locoScroll = new LocomotiveScroll({
                    el: scrollRef.current,
                    smooth: true,
                    multiplier: 1,
                    class: 'is-revealed',
                    scrollFromAnywhere: false,
                    touchMultiplier: 2,
                });

                // --- 2. INITIALIZE CURSOR ---
                cursor = new Cursor(document.querySelector('.cursor'));

                // --- IMAGE EXPAND HANDLERS ---
                const expandImage = (imageSrc, title) => {
                    setExpandedImage({ src: imageSrc, title });
                };

                const closeExpandedImage = () => {
                    setExpandedImage(null);
                };

                // --- 3. RUN SPLITTING.JS ---
                Splitting();
                
                // --- 4. START INTRO ANIMATION (from galleryController.js) ---
                const galleryEl = scrollRef.current.querySelector('.gallery');
                const galleryItems = Array.from(galleryEl.querySelectorAll('.gallery__item')).map(el => ({
                    DOM: {
                        el,
                        img: el.querySelector('.gallery__item-img'),
                        video: el.querySelector('.gallery__item-video'),
                        thumbnail: el.querySelector('.gallery__item-thumbnail'),
                        caption: el.querySelector('.gallery__item-caption'),
                        captionTitle: el.querySelector('.gallery__item-title'),
                        captionChars: el.querySelectorAll('.gallery__item-title .char'),
                    },
                    imgRect: el.querySelector('.gallery__item-img').getBoundingClientRect(),
                    captionRect: el.querySelector('.gallery__item-title').getBoundingClientRect(),
                    inStack: true, // Initially, all items are in the stack
                }));
                const itemsTotal = galleryItems.length;
                let winsize = calcWinsize();
                const resizeHandler = () => {
                    winsize = calcWinsize();
                    if (locoScroll) {
                        setTimeout(() => locoScroll.update(), 150);
                    }
                };
                window.addEventListener('resize', resizeHandler);
                eventListeners.push({el: window, type: 'resize', fn: resizeHandler});


                const introTimeline = gsap.timeline();
                
                // Set initial z-indexes for stacking
                galleryItems.forEach((item, pos) => {
                    gsap.set(item.DOM.el, { zIndex: itemsTotal - 1 - pos });
                });

                // Initially show thumbnails and hide videos, center all images and prepare the stack effect
                galleryItems.forEach((item, pos) => {
                    // Set initial state: show thumbnails, hide videos
                    gsap.set(item.DOM.thumbnail, { opacity: 1 });
                    gsap.set(item.DOM.video, { opacity: 0 });
                    
                    introTimeline.set(item.DOM.img, {
                        x: winsize.width / 2 - item.imgRect.left - item.imgRect.width / 2,
                        y: winsize.height / 2 - item.imgRect.top - item.imgRect.height / 2,
                        scale: 0.6,
                        rotation: getRandomInteger(-10, 10),
                        opacity: 1,
                        delay: 0.1 * pos
                    }, 0);

                    // Scale up the top 3 images and hide the rest
                    if (pos < itemsTotal - 3) {
                         introTimeline.set(item.DOM.img, { opacity: 0 }, 0.3 + 0.1 * pos);
                    } else {
                         introTimeline.set(item.DOM.thumbnail, { scale: 1.8 }, 0);
                    }
                });
                
                // The main animation timeline
                introTimeline
                    .addLabel('startAnimation', '+=0.1')
                    .add(() => {
                        setIsLoading(false); // Removes 'loading' and 'noscroll' classes
                        setTimeout(() => {
                            if (locoScroll) locoScroll.update();
                        }, 100);
                    }, 'startAnimation')
                    .to(galleryItems.map(item => item.DOM.img), {
                        duration: 1.2, ease: 'expo', x: 0, y: 0, scale: 1, rotation: 0, opacity: 1
                    }, 'startAnimation')
                    .to(galleryItems.filter((_, pos) => pos >= itemsTotal - 3).map(item => item.DOM.thumbnail), {
                        duration: 1.2, ease: 'expo', scale: 1
                    }, 'startAnimation')
                    .add(() => {
                        galleryItems.forEach(item => {
                            item.inStack = false; // Items are no longer in the stack
                            // Transition from thumbnail to video
                            gsap.to(item.DOM.thumbnail, { duration: 0.5, opacity: 0 });
                            gsap.to(item.DOM.video, { duration: 0.5, opacity: 1, delay: 0.2 });
                            // Start video playback with error handling
                            if (item.DOM.video) {
                                item.DOM.video.play().catch(e => {
                                    console.warn('Video autoplay failed:', e);
                                    // Fallback: show thumbnail if video fails
                                    gsap.set(item.DOM.thumbnail, { opacity: 1 });
                                    gsap.set(item.DOM.video, { opacity: 0 });
                                });
                            }
                        });
                    }, 'startAnimation+=1.2')
                    .to(galleryItems.map(item => item.DOM.captionChars), {
                        duration: 1, ease: 'expo', startAt: { opacity: 0, y: '40%' },
                        y: '0%', opacity: 1, stagger: 0.03
                    }, 'startAnimation+=0.5')
                    .to(['.content__title', '.content__text'], {
                        duration: 1.2, ease: 'expo', startAt: { y: '50%' },
                        y: '0%', opacity: 1, stagger: 0.04
                    }, 'startAnimation+=0.2');


                // --- 5. SET UP HOVER AND CURSOR EVENTS ---
                galleryItems.forEach(item => {
                    const onMouseEnter = () => {
                        if (item.inStack) return;
                        // Pause video on hover
                        if (item.DOM.video && !item.DOM.video.paused) {
                            item.DOM.video.pause();
                        }
                        gsap.timeline({ defaults: { duration: 1, ease: 'expo' } })
                            .to(item.DOM.img, { scale: 0.95 })
                            .to(item.DOM.video, { scale: 1.2 }, 0)
                            .to(item.DOM.captionChars, {
                                x: item.imgRect.width - item.captionRect.width * 1.1,
                                stagger: -0.02
                            }, 0);
                    };
                    const onMouseLeave = () => {
                        if (item.inStack) return;
                        // Resume video on mouse leave
                        if (item.DOM.video && item.DOM.video.paused) {
                            item.DOM.video.play().catch(e => {
                                console.warn('Video resume failed:', e);
                            });
                        }
                        gsap.timeline({ defaults: { duration: 1, ease: 'expo' } })
                            .to([item.DOM.img, item.DOM.video], { scale: 1 })
                            .to(item.DOM.captionChars, { x: 0 }, 0);
                    };
                    item.DOM.img.addEventListener('mouseenter', onMouseEnter);
                    item.DOM.img.addEventListener('mouseleave', onMouseLeave);
                    eventListeners.push({ el: item.DOM.img, type: 'mouseenter', fn: onMouseEnter });
                    eventListeners.push({ el: item.DOM.img, type: 'mouseleave', fn: onMouseLeave });
                });

                document.querySelectorAll('a, .gallery__item-img').forEach((link, index) => {
                    // Add click functionality for images
                    if (link.classList.contains('gallery__item-img')) {
                        const clickHandler = () => {
                            // Add click animation
                            gsap.to(link, { 
                                duration: 0.1, 
                                scale: 0.95,
                                ease: "power2.out",
                                yoyo: true,
                                repeat: 1,
                                onComplete: () => {
                                    expandImage(galleryData[index % galleryData.length].video, galleryData[index % galleryData.length].title);
                                }
                            });
                        };
                        link.addEventListener('click', clickHandler);
                        link.addEventListener('touchend', clickHandler);
                        eventListeners.push({ el: link, type: 'click', fn: clickHandler });
                        eventListeners.push({ el: link, type: 'touchend', fn: clickHandler });
                    }
                    // Keep original cursor functionality for links only
                    const enterFn = () => cursor.enter();
                    const leaveFn = () => cursor.leave();
                    link.addEventListener('mouseenter', enterFn);
                    link.addEventListener('mouseleave', leaveFn);
                    eventListeners.push({ el: link, type: 'mouseenter', fn: enterFn });
                    eventListeners.push({ el: link, type: 'mouseleave', fn: leaveFn });
                });
            });

        // --- CLEANUP FUNCTION ---
        return () => {
            if (locoScroll) locoScroll.destroy();
            eventListeners.forEach(e => e.el.removeEventListener(e.type, e.fn));
            if (cursor && cursor.onMouseMoveEv) {
                window.removeEventListener('mousemove', cursor.onMouseMoveEv);
            }
        };
    }, []);

    // --- COMBINED CSS ---
    const allCSS = `
        /* base.css */
        :root { font-size: 15px; --color-text: #f8f6f3; --color-bg: #0c0c0c; --color-link: #7d6350; --color-link-hover: #f8f6f3; --cursor-stroke: none; --cursor-fill: #c5681c; --cursor-stroke-width: 1px; }
        *, *::after, *::before { box-sizing: border-box; }
        body { margin: 0; color: var(--color-text); background-color: var(--color-bg); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-family: halyard-display, sans-serif; }
        .noscroll { overflow: hidden; height: 100vh; }
        .js .loading::before, .js .loading::after { content: ''; position: fixed; z-index: 1000; }
        .js .loading::before { top: 0; left: 0; width: 100%; height: 100%; background: var(--color-bg); }
        .js .loading::after { top: 50%; left: 50%; width: 60px; height: 60px; margin: -30px 0 0 -30px; border-radius: 50%; opacity: 0.4; background: var(--color-link); animation: loaderAnim 0.7s linear infinite alternate forwards; }
        @keyframes loaderAnim { to { opacity: 1; transform: scale3d(0.5, 0.5, 1); } }
        a { text-decoration: underline; color: var(--color-link); outline: none; }
        a:hover, a:focus { text-decoration: none; color: var(--color-link-hover); outline: none; }
        .frame { padding: 1rem; text-align: center; position: relative; z-index: 1000; grid-area: frame; font-weight: 300; }
        .frame__title { font-size: 1rem; margin: 0 0 1rem; font-weight: 500; }
        .frame__links a:not(:last-child), .frame__demos a:not(:last-child) { margin-right: 1rem; }
        .frame__demos { margin: 1rem 0; }
        .frame__demo--current, .frame__demo--current:hover { color: var(--color-text); text-decoration: none; }
        .cursor { display: none; }
        @media screen and (min-width:53em) {
            :root { font-size: 18px; }
            .frame { padding: 1.5rem 2rem; top: 0; left: 0; width: 100%; position: absolute; display: flex; justify-content: space-between; align-items: flex-start; }
            .frame__title, .frame__demos { margin: 0; } .frame__demos { margin: 0 auto 0 4rem; }
        }
        @media (any-pointer:fine) {
            .cursor { position: fixed; top: 0; left: 0; display: block; pointer-events: none; }
            .cursor__inner { fill: var(--cursor-fill); stroke: var(--cursor-stroke); stroke-width: var(--cursor-stroke-width); opacity: 0.7; }
        }
        html.has-scroll-smooth { overflow: hidden; } html.has-scroll-dragging { -webkit-user-select: none; user-select: none; }
        .has-scroll-smooth body { overflow: hidden; } .has-scroll-smooth [data-scroll-container] { min-height: 100vh; }
        
        /* demo2.css */
        body { --color-text: #131212; --color-bg: #eee7e0; --color-link: #52433e; --color-link-hover: #131212; }
        .content { padding: 20vh 1rem 4rem; }
        .content__title { font-family: ivypresto-headline, serif; font-weight: 700; font-size: 3rem; margin: 0; }
        .content__text { font-weight: 300; max-width: 500px; }
        .js .content__title, .js .content__text { opacity: 0; }
        .gallery { display: grid; grid-template-columns: repeat(3,minmax(min-content,320px)); grid-column-gap: 2rem; grid-row-gap: 5vh; padding: 4rem 0 20rem; justify-content: center; }
        .gallery__item { margin: 0; display: grid; grid-template-areas: 'gallery-caption' 'gallery-image'; grid-template-columns: 100%; }
        .gallery__item-img { 
            grid-area: gallery-image; width: 100%; overflow: hidden; position: relative; 
            will-change: transform, opacity; transform: translateZ(0); backface-visibility: hidden; 
            cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            padding-bottom: 140%; /* Maintain aspect ratio */
        }
        .gallery__item-img:active {
            transform: scale(0.98);
        }
        .js .gallery__item-img { opacity: 0; }
        .gallery__item-imginner { background-size: cover; background-position: 50% 0; width: 100%; padding-bottom: 140%; will-change: transform; backface-visibility: hidden; }
        .gallery__item-thumbnail, .gallery__item-video { 
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
            object-fit: cover; will-change: transform, opacity; backface-visibility: hidden;
            transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery__item-thumbnail { z-index: 2; }
        .gallery__item-video { z-index: 1; }
        
        /* Mobile responsive video adjustments */
        @media screen and (max-width: 768px) {
            .gallery { 
                grid-template-columns: repeat(2, minmax(min-content, 1fr)); 
                grid-column-gap: 1rem; 
                padding: 2rem 0 10rem;
            }
            .gallery__item-img { padding-bottom: 120%; }
        }
        @media screen and (max-width: 480px) {
            .gallery { 
                grid-template-columns: 1fr; 
                grid-column-gap: 0; 
                padding: 1rem 0 8rem;
            }
            .gallery__item-img { padding-bottom: 100%; }
        }
        .gallery__item-caption { grid-area: gallery-caption; }
        .gallery__item-title { font-size: 0.9rem; margin: 1rem 0 0.5rem; font-weight: 500; display: inline-block; overflow: hidden; }
        .gallery__item-title .char { opacity: 0; will-change: transform; }
        @media screen and (min-width: 53em) { .content { padding: 20vh 5rem 4rem; } .gallery__item-title { font-size: 1.5rem; } }

        /* Splitting.js required CSS */
        .splitting .word, .splitting .char { display: inline-block; }
        
        /* Performance optimizations */
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        [data-scroll] { will-change: transform; }
        .content__title, .content__text { will-change: transform, opacity; }
        
        /* Image modal styles */
        .image-modal { 
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background: rgba(0, 0, 0, 0.9); z-index: 9999; 
            display: flex; align-items: center; justify-content: center;
            opacity: 0; visibility: hidden;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(10px);
        }
        .image-modal.show { 
            opacity: 1; visibility: visible;
        }
        .image-modal__content { 
            position: relative; max-width: 90vw; max-height: 90vh; 
            display: flex; flex-direction: column; align-items: center;
            transform: scale(0.8) translateY(30px);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .image-modal.show .image-modal__content {
            transform: scale(1) translateY(0);
        }
        .image-modal__image { 
            max-width: 100%; max-height: 80vh; object-fit: contain;
            border-radius: 12px; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            transition: all 0.3s ease;
            opacity: 0;
            animation: imageZoomIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
        }
        @keyframes imageZoomIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }
        .image-modal__title { 
            color: white; font-size: 1.5rem; margin: 1.5rem 0 0; 
            text-align: center; font-weight: 500;
            opacity: 0; transform: translateY(20px);
            animation: titleSlideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        @keyframes titleSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .image-modal__close { 
            position: absolute; top: -3rem; right: 0; 
            background: rgba(255, 255, 255, 0.1); border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%; color: white; width: 44px; height: 44px;
            font-size: 1.5rem; cursor: pointer; display: flex;
            align-items: center; justify-content: center;
            line-height: 1; opacity: 0.8; 
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(5px);
        }
        .image-modal__close:hover { 
            opacity: 1; background: rgba(255, 255, 255, 0.2); 
            border-color: rgba(255, 255, 255, 0.4);
            transform: scale(1.1);
        }
        .image-modal__close:active {
            transform: scale(0.95);
        }
        @media (max-width: 768px) {
            .image-modal__close { 
                top: -4rem; font-size: 1.8rem; width: 48px; height: 48px;
            }
            .image-modal__title { font-size: 1.25rem; }
        }
    `;

    return (
        <>
            <style>{allCSS}</style>
            <div className={`js ${isLoading ? 'loading' : ''}`}>
                <main ref={scrollRef} data-scroll-container className={isLoading ? 'noscroll' : ''}>
                    <div className="content">
                        <h2 className="content__title" data-scroll data-scroll-speed="2" data-scroll-position="top">Pleasure City</h2>
                        <p className="content__text" data-scroll data-scroll-speed="1" data-scroll-position="top">
                            It is difficult not to feel that the unconscious aim in the most typical modern pleasure resorts is a return to the womb.
                        </p>
                        <div className="gallery">
                            {galleryData.map(item => (
                                <figure key={item.id} data-scroll data-scroll-speed={item.id % 3 === 0 ? 4 : (item.id % 2 === 0 ? 2.5 : 1)} className="gallery__item">
                                    <div className="gallery__item-img">
                                        <img className="gallery__item-thumbnail" src={item.thumbnail} alt={item.title} />
                                        <video 
                                            className="gallery__item-video" 
                                            src={item.video} 
                                            loop 
                                            muted 
                                            playsInline
                                            style={{ opacity: 0 }}
                                        />
                                    </div>
                                    <figcaption className="gallery__item-caption">
                                        <h2 className="gallery__item-title" data-splitting>{item.title}</h2>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </main>
                <svg className="cursor" width="30" height="30" viewBox="0 0 30 30" style={{display: 'none'}}>
                    <circle className="cursor__inner" cx="15" cy="15" r="7.5" />
                </svg>
                
                {/* Video Modal */}
                {expandedImage && (
                    <div className={`image-modal ${expandedImage ? 'show' : ''}`} onClick={() => setExpandedImage(null)}>
                        <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
                            <button className="image-modal__close" onClick={() => setExpandedImage(null)}>×</button>
                            <video 
                                src={expandedImage.src} 
                                className="image-modal__image"
                                controls
                                autoPlay
                                loop
                                muted
                            />
                            <h3 className="image-modal__title">{expandedImage.title}</h3>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ImageStackGallery;