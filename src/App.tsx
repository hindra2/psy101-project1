import Dropdown from "./components/Dropdown"
import YouTube, { YouTubeProps } from "react-youtube"
import Tooltip from "./components/Tooltip";

import { InfoIcon } from "./components/icons";

function App() {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    width: '1024',
    height: '276',
  };

  return (
    <div className="flex flex-col h-screen pt-[50px]">
      psy101-project1
    </div>
  )
}

export default App
