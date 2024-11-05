import ProfilePicture from './profilePicture'
import logo from "../assets/profilePicture.jpg"
import NameCard from './name';
import Bio from './bio';
import Links from './links';

const CardContainer = ({links, name, address, description}) => {

    return (
        <div className=' bg-[#242424] p-[2em] md:max-w-[350px] max-w-[320px] place-items-center text-center rounded-lg mx-auto mt-auto'>
            <ProfilePicture logo={logo}/>
            <NameCard name={name} address={address}/>
            <Bio description={description}/>
            <Links Links={links}/>
        </div>
    )
}

export default CardContainer;