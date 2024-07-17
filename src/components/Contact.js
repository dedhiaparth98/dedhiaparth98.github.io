import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";



export default function Contact() {
    const size = 36;
    const linkClass = 'flex gap-4 justify-start  align-middle'
    const divClass = 'text-lg pt-1'
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 mt-12 gap-6 mx-auto'>
            <div>
                <a href='https://in.linkedin.com/in/parth-dedhia' target="_blank" rel='noreferrer' className={linkClass}>
                    <div><FaLinkedin size={size} /></div>
                    <div className={divClass}>LinkedIn</div>
                </a>
            </div>
            <div>
                <a href='https://github.com/dedhiaparth98' target="_blank" rel='noreferrer' className={linkClass}>
                    <div><FaGithub size={size} /></div>
                    <div className={divClass}>GitHub</div>
                </a>
            </div>
            <div>
                <a href='mailto:prdedhia1998@gmail.com' target="_blank" rel='noreferrer' className={linkClass}>
                    <div><MdEmail size={size} /></div>
                    <div className={divClass}>Email</div>
                </a>
            </div>
            <div>
                <a href="https://x.com/Parth_dedhia98" target="_blank" rel="noreferrer" className={linkClass}>
                    <div><FaXTwitter size={size} /></div>
                    <div className={divClass}>Twitter</div>
                </a>
            </div>
        </div>
    )
}