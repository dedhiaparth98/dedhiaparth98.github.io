import Card from "./Card";
import CardHeader from "./CardHeader";

export default function MediumBlog(props) {
    const { url, title, description, imageUrl } = props;
    return (
        <Card className="p-0">
            <a href={url} target="_blank" rel='noreferrer'>
                <div className='grid grid-cols-12 gap-6'>
                    <div className="col-span-4 md:col-span-2">
                        <img className="rounded-tl-lg rounded-bl-lg h-full" src={imageUrl} alt={title}/>
                    </div>
                    <div className="col-span-8 md:col-span-10 py-4 flex flex-col justify-center">
                        <CardHeader className='truncate text-lg'>
                            {title}
                        </CardHeader>
                        <p className='truncate dark:text-gray-400 text-gray-800'>
                            {description}
                        </p>
                    </div>
                </div>
            </a>
        </Card>
    )
}