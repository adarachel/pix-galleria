import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../Gallery.css';

const Gallery = () => {
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);

    // Simulate loading delay (replace this with your actual image loading logic)
    useEffect(() => {
        setTimeout(() => {
            const sampleImages = [
                { src: '/assets/image1.jpg', tag: 'Disgusted' },
                { src: '/assets/image2.jpg', tag: 'What?' },
                { src: '/assets/image3.jpg', tag: 'Shocked' },
                { src: '/assets/image4.jpg', tag: 'Please Be FR' },
                { src: '/assets/image5.jpg', tag: 'Shocked' },
                { src: '/assets/image6.jpg', tag: 'Please Be FR' },
                { src: '/assets/image7.jpg', tag: 'Disgusted' },
                { src: '/assets/image8.jpg', tag: 'Relatable' },
                { src: '/assets/image9.jpg', tag: 'Relatable' },
                { src: '/assets/image10.jpg', tag: 'Relatable' },
                { src: '/assets/image11.jpg', tag: 'Shocked' },
                { src: '/assets/image12.jpg', tag: 'Crying' },
                { src: '/assets/image13.jpg', tag: 'Relatable' },
                { src: '/assets/image14.jpg', tag: 'Disgusted' },
                { src: '/assets/image15.jpg', tag: 'Laughing' },
                { src: '/assets/image16.jpg', tag: 'Disgusted' },
                { src: '/assets/image17.jpg', tag: 'Disgusted' },
                { src: '/assets/image18.jpg', tag: 'Disgusted' },
                { src: '/assets/image19.jpg', tag: 'Disgusted' },
                { src: '/assets/image20.jpg', tag: 'Disgusted' },
                { src: '/assets/image21.jpg', tag: 'Disgusted' },
                { src: '/assets/image22.jpg', tag: 'Disgusted' },
                { src: '/assets/image23.jpg', tag: 'Disgusted' },
                { src: '/assets/image24.jpg', tag: 'Disgusted' },
                { src: '/assets/image25.jpg', tag: 'Disgusted' },
                { src: '/assets/image26.jpg', tag: 'Disgusted' },
                { src: '/assets/image27.jpg', tag: 'Disgusted' },
                { src: '/assets/image28.jpg', tag: 'Disgusted' },
                { src: '/assets/image29.jpg', tag: 'Disgusted' },
                { src: '/assets/image30.jpg', tag: 'Disgusted' },
                { src: '/assets/image31.jpg', tag: 'Disgusted' },
                { src: '/assets/image32.jpg', tag: 'Disgusted' },
                { src: '/assets/image33.jpg', tag: 'Disgusted' },
                { src: '/assets/image34.jpg', tag: 'Disgusted' },
                { src: '/assets/image35.jpg', tag: 'Disgusted' },
                { src: '/assets/image36.jpg', tag: 'Disgusted' },
                { src: '/assets/image37.jpg', tag: 'Disgusted' },
                { src: '/assets/image38.jpg', tag: 'Disgusted' },
                { src: '/assets/image39.jpg', tag: 'Disgusted' },
                { src: '/assets/image40.jpg', tag: 'Disgusted' },
                { src: '/assets/image41.jpg', tag: 'Disgusted' },
                { src: '/assets/image42.jpg', tag: 'Disgusted' },
                { src: '/assets/image43.jpg', tag: 'Disgusted' },
                { src: '/assets/image44.jpg', tag: 'Disgusted' },
                { src: '/assets/image45.jpg', tag: 'Disgusted' },
                { src: '/assets/image46.jpg', tag: 'Disgusted' },
                { src: '/assets/image47.jpg', tag: 'Disgusted' },
                { src: '/assets/image48.jpg', tag: 'Disgusted' },
                { src: '/assets/image49.jpg', tag: 'Disgusted' },
                { src: '/assets/image50.jpg', tag: 'Disgusted' },
                { src: '/assets/image51.jpg', tag: 'Disgusted' },
                { src: '/assets/image52.jpg', tag: 'Disgusted' },
                { src: '/assets/image53.jpg', tag: 'Disgusted' },
                { src: '/assets/image54.jpg', tag: 'Disgusted' },
                { src: '/assets/image55.jpg', tag: 'Disgusted' },
                { src: '/assets/image56.jpg', tag: 'Disgusted' },
                { src: '/assets/image57.jpg', tag: 'Disgusted' },
                { src: '/assets/image58.jpg', tag: 'Disgusted' },
                { src: '/assets/image59.jpg', tag: 'Disgusted' },
                { src: '/assets/image60.jpg', tag: 'Disgusted' },
                { src: '/assets/image61.jpg', tag: 'Disgusted' },
                { src: '/assets/image62.jpg', tag: 'Disgusted' },
                { src: '/assets/image63.jpg', tag: 'Disgusted' },
                { src: '/assets/image64.jpg', tag: 'Disgusted' },
                { src: '/assets/image65.jpg', tag: 'Disgusted' },
                { src: '/assets/image66.jpg', tag: 'Disgusted' },
                { src: '/assets/image67.jpg', tag: 'Disgusted' },
                { src: '/assets/image68.jpg', tag: 'Disgusted' },
                { src: '/assets/image69.jpg', tag: 'Disgusted' },
                { src: '/assets/image70.jpg', tag: 'Disgusted' },
            ];
            setImages(sampleImages);
            setFilteredImages(sampleImages);
            setLoading(false);
        }, 2000);
    }, []);

    const onDragStart = () => {
        // You can add animations or feedback when dragging starts
    };

    const onDragEnd = (result) => {
        if (!result.destination) return; // No valid destination, do nothing

        const items = [...filteredImages];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setFilteredImages(items);
    };

    // Filter images based on the search query
    useEffect(() => {
        const filtered = images.filter((image) =>
            image.tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredImages(filtered);
    }, [searchQuery, images]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search by tag"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                <Droppable droppableId="image-gallery" direction='none'>
                    {(provided) => (
                        <div
                            className="gallery"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {loading ? (
                                <div className="loading-spinner">Loading...</div>
                            ) : (
                                <>
                                    {filteredImages.map((image, index) => (
                                        <Draggable
                                            key={image.src}
                                            draggableId={image.src}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    className={`image-container ${snapshot.isDragging
                                                        ? 'dragging'
                                                        : ''
                                                        }`}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        transition: 'all 0.2s',
                                                    }}
                                                >
                                                    <img src={image.src} alt={image.tag} />
                                                    <p>{image.tag}</p>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                </>
                            )}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Gallery;
