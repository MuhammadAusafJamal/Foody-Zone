import img1 from "../Images/Boiled Eggs.png"
import img2 from "../Images/Ramen.png"
import img3 from "../Images/Chiken.png"
import img4 from "../Images/Cake.png"
import img5 from "../Images/Burger.png"
import img6 from "../Images/Pancake.png"
import MenuCard from "./MenuCard"


const menu = ["Boiled Eggs", "Ramen", "Grilled Chicken", "Cake", "Burger", "PanCake"]

const price = ["$10.00", "$25.00", "$45.00", "$18.00", "$23.00", "$25.00"]
const images = [img1, img2, img3, img4, img5, img6]
function Main() {
    return (
        <div className="main">
            {/* <MenuCard img={images[0]} title={menu[0]} price={price[0]} />
            <MenuCard img={images[1]} title={menu[1]} price={price[1]} />
            <MenuCard img={images[2]} title={menu[2]} price={price[2]} />
            <MenuCard img={images[3]} title={menu[3]} price={price[3]} />
            <MenuCard img={images[4]} title={menu[4]} price={price[4]} />
            <MenuCard img={images[5]} title={menu[5]} price={price[5]} /> */}
        </div>
    )
}

export default Main;