// import logo1 from './PL042EM_frontale-2.png'
// import logo2 from "./PL62X_frontale-2.png"
// import logo3 from "./PL162T_frontale-2.png"

//array of products tp be rendered

const prodArr = [
    ["The Lelit Anita PL042EM", "logo1", "Built-in coffee grinder that combines warming speed, simplicity and the compactness you need"],
    ["The Lelit MaraX PL62X", "logo2", "Automatic controls on this L58E group, perfect extration temp in just 24 mins"],
    ["The Lelit Bianca PL162T", "logo3", "Excellent thermal stability on this L58E group manual machine"]
]


function Product() {
    const prodList = prodArr.map((prodList) => {
        return <li key={prodList.toString()}>
            {prodList[0]}
            <br></br>
            <img src={prodList[1]}></img>
            <br></br>
            {prodList[2]}
        </li>;
    });

    return(
        <div>
            <ul>
            {prodList}
            </ul>
        </div>
        
    )
}

export default Product