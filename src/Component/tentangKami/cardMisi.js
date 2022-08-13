import Card from 'react-bootstrap/Card';

const cardMisi = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div>
                    <div className="card card-2">
                    <h3 className='text-center'>{props.title}</h3>
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
export default cardMisi