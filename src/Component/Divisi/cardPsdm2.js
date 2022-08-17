

const cardPsdm = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div>
                    <div className="card card-proker">
                    <h3 className='text-center text-dark'>{props.title}</h3>
                    <p className="text-dark">{props.desc}</p>
                    <p className="text-dark">{props.desc2}</p>
                    <p className="text-dark">{props.desc3}</p>
                    </div>
                </div>
            </div>
        </div>  
    )
}
export default cardPsdm