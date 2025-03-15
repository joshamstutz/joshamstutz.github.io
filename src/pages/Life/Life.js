import React, { useState } from 'react';
import './Life.css';
import frind from '../../assets/life/frind.jpg';
import hocking from '../../assets/life/hocking.JPG';
import hocking2 from '../../assets/life/hocking2.jpg';
import purduebask from '../../assets/life/purduebask.jpg';
import rado from '../../assets/life/rado.jpg';
import turt from '../../assets/life/turt.jpg';
import monk from '../../assets/life/monk.jpg';
import pheeb from '../../assets/life/pheeb.jpeg';
import us from '../../assets/life/us.jpg';

const Life = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, src: frind, alt: "Life 1", caption: "purdue football" },
        { id: 2, src: hocking, alt: "Life 2", caption: "hocking hills" },
        { id: 3, src: hocking2, alt: "Life 3", caption: "hocking hills pt. 2" },
        { id: 4, src: purduebask, alt: "Life 4", caption: "purdue basketball" },
        { id: 5, src: rado, alt: "Life 5", caption: "colorado" },
        { id: 6, src: us, alt: "Life 6", caption: "my gf & i" },
        { id: 7, src: turt, alt: "Life 6", caption: "turtle golf" },
        { id: 8, src: monk, alt: "Life 4", caption: "monkey" },
        { id: 9, src: pheeb, alt: "Life 5", caption: "my dog phoebe" },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="life-container">
            {/* Gallery */}
            <main>
                <div className="life-gallery-grid">
                    {images.map((image) => (
                        <div key={image.id} className="life-image-container" onClick={() => openModal(image)}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="life-gallery-image"
                            />
                            <div className="life-caption-overlay">
                                <p className="life-caption-text">{image.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="life-modal-overlay" onClick={closeModal}>
                    <div className="life-modal-container" onClick={e => e.stopPropagation()}>
                        <button
                            className="life-modal-close-button"
                            onClick={closeModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="life-modal-close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="life-modal-content">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="life-modal-image"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Life;