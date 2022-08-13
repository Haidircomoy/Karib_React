import Card from 'react-bootstrap/Card';

const cardVisiMisi = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="card card-1">
                    <h3 className='text-center'>{props.title}</h3>
                    <ul>
                        <li>{props.li1}</li>
                        <li>{props.li2}</li>
                        <li>{props.li3}</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardVisiMisi