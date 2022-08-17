const cardProker2 = (props) => {
    return (
    <div className="container">
        <div className="row">
            <div>
                <div className="card card-proker">
                <h3 className='text-center text-dark'>{props.title}</h3>
                <p className="text-dark">{props.desc}</p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default cardProker2