export default function Section(props){
    const {children, ...otherProps} = props;
    return (
        <div className='pt-24 px-6 first:pt-6' {...otherProps}>
            {children}
        </div>
    )
}