const cardProker2 = (props) => {
    return (
    <div className="container">
        <div className="row">
            <div>
                <div className="card card-proker">
                <h3 className='text-center'>{props.title}</h3>
                <p>{props.desc}</p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default cardProker2