export default function CardBody(props){
    const {children} = props;
    return (
        <div className='p-4'>
            {children}
        </div>
    )
}