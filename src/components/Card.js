export default function Card(props){
    const {children, className} = props;
    return (
        <div className={`group/card rounded-lg dark:text-slate-200 dark:border-slate-400/15 dark:bg-slate-400/10 bg-slate-200/90 border-slate-200/90
        hover:bg-gradient-to-tr dark:from-slate-800 dark:to-slate-700
        from-slate-300 to-slate-200 transition-all
        hover:shadow-lg dark:shadow-slate-800 ${className}`}>
            {children}
        </div>
    )
}