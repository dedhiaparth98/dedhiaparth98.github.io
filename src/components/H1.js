export default function H1(props){
    const {children, className=''} = props;
    return (
        <h1 className={`font-black text-4xl ${className}`}>{children}</h1>
    )
}