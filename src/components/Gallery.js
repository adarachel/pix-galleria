import React, { useState, useRef } from 'react'; // Import useRef
import { useDrag, useDrop } from 'react-dnd';
import galleryData from './data';
import '../Gallery.css';
import ReorderFeedback from './ReorderFeedback';

const Card = ({ src, title, id, index, tags, moveImage }) => {
    const ref = useRef(null); // Use useRef instead of useState for ref
    // eslint-disable-next-line
    const [showReorderFeedback, setShowReorderFeedback] = useState(false);

    const [, drop] = useDrop({
        accept: 'image',
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveImage(dragIndex, hoverIndex);
            item.index = hoverIndex;

            // Show the reorder feedback message
            setShowReorderFeedback(true);
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'image',
        item: () => {
            return { id, index };
        },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging(),
            };
        },
    });

    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div ref={ref} style={{ opacity }} className="card">
            <img src={src} alt={title} />
            <div className="tags">
                {tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Gallery = ({ searchQuery }) => {
    const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [showReorderFeedback, setShowReorderFeedback] = useState(false);

    // Simulate loading delay (you can replace this with your actual image loading logic)
    React.useEffect(() => {
        setTimeout(() => {
            setImages(galleryData); // Replace galleryData with your actual image data
            setLoading(false);
        }, 3000); // Adjust the delay as needed
    }, []);

    const moveImage = React.useCallback((dragIndex, hoverIndex) => {
        setImages((prevImages) => {
            const clonedImages = [...prevImages];
            const removedImage = clonedImages.splice(dragIndex, 1)[0];
            clonedImages.splice(hoverIndex, 0, removedImage);

            // Show the reorder feedback message
            setShowReorderFeedback(true);

            return clonedImages;
        });
    }, []);

    // Filter images based on the search query
    const filteredImages = images.filter((image) =>
        image.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <main>
            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : (
                <>
                    {filteredImages.map((image, index) => (
                        <Card
                            key={image.id}
                            src={image.img}
                            title={image.title}
                            id={image.id}
                            index={index}
                            tags={image.tags} // Pass the tags to the Card component
                            moveImage={moveImage}
                        />
                    ))}
                </>
            )}

            {showReorderFeedback && (
                <ReorderFeedback
                    show={showReorderFeedback}
                    onClose={() => setShowReorderFeedback(false)}
                />
            )}
        </main>
    );
};

export default Gallery;