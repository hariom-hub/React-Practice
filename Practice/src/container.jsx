import Boxes from "./boxes";
import "./outercontainer.css";

function Container(){

    return(

        <div className="outer-container">
            <Boxes title="Logitech MX 3S" list1="8,000 DPI" list2= "5 Programmable Buttons" oldPrice= "Rs : 12,450" newPrice="Rs : 8,999"/>
            <Boxes title="Apple Pencil(2nd Generation)" list1="Intuitive touch Surface" list2= "Designed for iPad Pro" oldPrice= "Rs : 11,900" newPrice="Rs : 9,199"/>
            <Boxes title="Zebronics zeb Transformer" list1="Intuitive touch Surface" list2= "Designed for iPad Pro" oldPrice= "Rs : 1,599" newPrice="Rs : 899"/>
            <Boxes title="Portonics Toad 23 " list1="Wireless Mouse 2.4 GHz" list2= "Optical Orientation" oldPrice= "Rs : 599" newPrice="Rs : 278"/>F
        </div>
        

        
    )
}

export default Container;
