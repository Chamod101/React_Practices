import Accordian from "./components/accordian"
import Random_color from "./components/random_color"
import Star_rating from "./components/start_ratings"
import Img_slider from "./components/img_slider"

function App() {

  return (
    <>
     {/* <Accordian/> */}
     {/* <Random_color/> */}
     {/* <Star_rating noOfStars = {10}/> */}
     <Img_slider url ={'https://picsum.photos/v2/list'} limit ={5}/>
    </>
  )
}

export default App
