import Card from "./Card";
import CardHeader from "./CardHeader";

export default function MediumBlog(props) {
    const { url, title, description, imageUrl } = props;
    return (
        <Card className="p-0">
            <a href={url} target="_blank" rel='noreferrer'>
                <div className='flex flex-col'>
                    <div className="">
                        <img className="rounded-tl-lg rounded-tr-lg h-full" src={imageUrl} alt={title}/>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                        <CardHeader className='text-lg'>
                            {title}
                        </CardHeader>
                        <p className='dark:text-gray-400 text-gray-800'>
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </Card>
    )
}