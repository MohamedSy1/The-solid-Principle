
const NameCard = ({name, address}) => {
    return (
        <div className=" tracking-tighter font-bold mb-5">
            <h1 className=" text-2xl p-[0.1em]">{name}</h1>
            <h2 className=" text-sm text-lime-400">{address}</h2>
        </div>
   
    )
}

export default NameCard;