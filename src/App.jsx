import Accordian from "./components/accordian"
import Random_color from "./components/random_color"
import Star_rating from "./components/start_ratings"
import Img_slider from "./components/img_slider"
import Load_More from "./components/load_more"
import TreeView from "./components/tree_view"
import menus from "./components/tree_view/data"

function App() {

  return (
    <>
     {/* <Accordian/> */}
     {/* <Random_color/> */}
     {/* <Star_rating noOfStars = {10}/> */}
     {/* <Img_slider url ={'https://picsum.photos/v2/list'} limit ={5}/> */}
     {/* <Load_More/> */}
     <TreeView menus={menus}/>
    </>
  )
}

export default App
