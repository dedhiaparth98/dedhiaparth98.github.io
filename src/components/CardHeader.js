export default function CardHeader(props){
    const  {children, className} = props;
    return (
        <div className={`text-xl group-hover/card:font-bold ${className}`}>{children}</div>
    )
}