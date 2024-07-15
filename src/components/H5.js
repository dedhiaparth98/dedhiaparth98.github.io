export default function H5(props){
    const {children, className=''} = props;
    return (
        <h1 className={`font-medium text-xl ${className}`}>{children}</h1>
    )
}