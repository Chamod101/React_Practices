import Accordian from "./components/accordian"
import Random_color from "./components/random_color"
import Star_rating from "./components/start_ratings"
import Img_slider from "./components/img_slider"
import Load_More from "./components/load_more"
import TreeView from "./components/tree_view"
import menus from "./components/tree_view/data"
import QRGenerater from "./components/qrGenerater"
import LightDarkMode from "./components/light_dark_theme"
import Scroller from "./components/scroller_progres"
import Tab_test from "./components/custome_tabs/tab_test"
import Model_test from "./components/Custome_popup/model_test"
import Profile_finder from "./components/github_profile_finder"
import AutoComplete from "./components/text_autocomplete"
import Tik_tak_toe from "./components/tik_tak_toe"
import UseFetchTest from "./components/useFetch/useFetchTest"


function App() {

  return (
    <>
     {/* <Accordian/> */}
     {/* <Random_color/> */}
     {/* <Star_rating noOfStars = {10}/> */}
     {/* <Img_slider url ={'https://picsum.photos/v2/list'} limit ={5}/> */}
     {/* <Load_More/> */}
     {/* <TreeView menus={menus}/> */}
     {/* <QRGenerater/> */}
     {/* <LightDarkMode/> */}
     {/* <Scroller url={'https://dummyjson.com/products?limit=100'}/> */}
     {/* <Tab_test/> */}
     {/* <Model_test/> */}
     {/* <Profile_finder/> */}
     {/* <AutoComplete/> */}
     {/* <Tik_tak_toe/> */}
     <UseFetchTest/>
    </>
  )
}

export default App
