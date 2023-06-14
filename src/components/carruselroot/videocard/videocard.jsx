import "./card.css";

const VideoCard = ({ img, alt, course }) => {
    return (
        <div
            className="card"
            style={{ borderColor: { course } }}
        >
            <img
                src={img}
                alt={alt}
            />
        </div>
    );
};

export default VideoCard;
