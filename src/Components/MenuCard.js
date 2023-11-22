import Navbtn from "./NavBtn";




function MenuCard({ img, title, price }) {
    return (
            <div className="card mb-2 ">
                <div className="img">
                    <img src={img} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <Navbtn v={price} />
                </div>
            </div>


    )
}

export default MenuCard;