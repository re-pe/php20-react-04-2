import DivCard from './div-cards';

export default function Album() {

    return (
        <div className="album py-5 bg-light">
            <div className="container">

                <div className="row">

                    {Array.from(Array(9).keys()).map(
                        i => <DivCard key={i} />
                    )}

                </div>
            </div>
        </div>
    )

}