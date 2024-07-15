export default function H3(props){
    const {children, className=''} = props;
    return (
        <h1 className={`font-semibold text-2xl ${className}`}>{children}</h1>
    )
}