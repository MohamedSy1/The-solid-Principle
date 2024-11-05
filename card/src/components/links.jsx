
const Links = ({Links}) => {
    return (
        <ul className="pt-2">
            {Links.map((link, index) => (
                <li key={index} className="mb-4 bg-[#393939] hover:bg-lime-400 hover:text-[#393939] p-[0.70em] px-[6em] text-nowrap rounded-lg font-bold text-sm"><a href={`${link}`}>{link}</a></li>
            ))}
        </ul>
        
    )
}

export default Links;