export default function Section(props){
    const {children, ...otherProps} = props;
    return (
        <div className='pt-24 px-6' {...otherProps}>
            {children}
        </div>
    )
}