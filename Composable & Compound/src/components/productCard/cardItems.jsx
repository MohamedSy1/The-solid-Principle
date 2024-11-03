import CardButton from "./cardButton"
import CardImage from "./cardImage"
import CardPrice from "./cardPrice"
import CardTitle from "./cardTitle"


const CardItems = ({ datas, error, isLoading }) => {
    if (isLoading) {
        return <>...........</>
    }

    if (error) {
        return `No items available`
    }

    return (
        <ul className="">
            {datas.map((item, index) => (
                <li key={index}>
                    <CardImage image={item.image} />
                    <CardTitle title={item.title} />
                </li>
            ))}
        </ul>
    )
}

export default CardItems;