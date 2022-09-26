import { useParams } from "react-router-dom";

const Detail2 = ({ list }) => {
    const { num } = useParams();
    const match = list.find(it => String(it.id) == num);
    const liStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        background: '#ddd',
        margin: '0 5px'
    }
    return (
        <>
            <img src={match.image_link} onError={e => e.target.src = process.env.PUBLIC_URL + '/assets/images/main_m01.jpg'} alt=""></img>
            <div>{match.name}</div>
            <div>{match.description.substring(0, 30)} ...</div>
            <div>{match.price}원</div>
            <ul>
                {
                    match.product_colors.map(color => <li style={{ ...liStyle, background: color.hex_value }}>color</li>)
                }
            </ul>
        </>
    )
}

export default Detail2;
