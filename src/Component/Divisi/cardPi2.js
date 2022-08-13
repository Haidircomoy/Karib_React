const cardPi2 = (props) => {
    return (
        <div className="container">
        <div className="row">
            <div>
                <div className="card card-PI2">
                <h3 className='text-center'>{props.title}</h3>
                <ul>
                    <li>{props.misi1}</li>
                    <li>{props.misi2}</li>
                    <li>{props.misi3}</li>
                    <li>{props.misi4}</li>
                    <li>{props.misi5}</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
export default cardPi2