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
        <ul className="md:grid grid-cols-4 m-8 gap-7 text-center">
            {datas.map((item, index) => (
                <li key={index} className="grid grid-rows-subgrid row-span-4 bg-rose-300 border-red-800 border-solid border-4 p-1 max-w-[30rem]">
                    <CardImage image={item.image} />
                    <CardTitle title={item.title} />
                    <CardPrice price={item.price} />
                    <CardButton />
                </li>
            ))}
        </ul>
    )
}

export default CardItems;