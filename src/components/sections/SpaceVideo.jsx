import React from 'react';

const SpaceVideo = () => {
    return (
        <section className="relative h-[50vh] md:h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
                poster="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-interstellar-orbit-of-a-planet-30514-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
        </section>
    );
};

export default SpaceVideo;