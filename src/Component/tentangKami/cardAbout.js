import Card from 'react-bootstrap/Card';

const cardAbout =(props) => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="card card-3">
                        <p className="text-justify">{props.tentang1}</p>
                        <p className="text-justify">{props.tentang2}</p>
                        <p className="text-justify">{props.tentang3}</p>
                        <p className="text-justify">{props.tentang4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardAbout