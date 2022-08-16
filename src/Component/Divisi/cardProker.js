const cardProker = (props) => {
    return (
    <div className="container">
        <div className="row">
            <div>
                <div className="card card-proker">
                <h3 className='text-center'>{props.title}</h3>
                <p>{props.desc}</p>
                <ul>
                    <li>{props.misi1}</li>
                    <li>{props.misi2}</li>
                    <li>{props.misi3}</li>
                    <li>{props.misi4}</li>
                </ul>
                </div>
            </div>
        </div>
    </div>

    )
}
export default cardProker