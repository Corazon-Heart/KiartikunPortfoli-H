const Picture = ({ picture , title ,round}) => {
    if (!picture)

    return null;

    return (
        <div>
            <img src={picture} alt={title} round ={round} className="w-5/6 rounded-lg } "/>
        </div>
    )
}

export default Picture;