// src/components/Tags.jsx
import Badge from 'react-bootstrap/Badge';

const Tags = ({ text, bgColor }) => {
    return <Badge bg={bgColor}>{text}</Badge>;
};
export default Tags;
