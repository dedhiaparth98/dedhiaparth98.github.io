import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Contact() {
    const size = 32
    return (
        <div className='flex flex-cols mt-8 gap-6 justify-center md:justify-start'>
            <div>
                <a href='https://in.linkedin.com/in/parth-dedhia' target="_blank" rel='noreferrer'><FaLinkedin CL size={size}/></a>
            </div>
            <div>
                <a href='https://parthdedhia.medium.com/'  target="_blank" rel='noreferrer'><FaMedium size={size}/></a>
            </div>
            <div>
                <a href='https://github.com/dedhiaparth98'  target="_blank" rel='noreferrer'><FaGithub size={size}/></a>
            </div>
            <div>
                <a href='mailto:prdedhia1998@gmail.com'  target="_blank" rel='noreferrer'><MdEmail size={size}/></a>
            </div>
        </div>
    )
}