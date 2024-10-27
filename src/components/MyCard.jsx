// src/components/MyCard.jsx
const MyCard = ({ imageUrl, name, description, tagText, tagColor }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} className="card-img" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};
export default MyCard;
