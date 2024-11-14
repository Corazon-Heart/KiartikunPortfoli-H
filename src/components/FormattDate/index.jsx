const FormattedDate = ({isHighlight, children}) => {
    return (
        <div>
            <span className={`text-sm duration-500 ${isHighlight ?"text-gray-400 " : ""} `}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;