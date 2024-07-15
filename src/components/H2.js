export default function H2(props){
    const {children, className='', ...otherProps} = props;
    return (
        <h1 className={`font-bold text-3xl ${className}`} {...otherProps}>{children}</h1>
    )
}