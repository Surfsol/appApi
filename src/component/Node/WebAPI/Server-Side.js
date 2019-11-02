import React from 'react'
import notes2 from '../../assets/nodeAssets/webapi/notesWebAPI2.png'
import server from '../../assets/nodeAssets/webapi/server-side.webm'
import { DefaultPlayer as Video } from 'react-html5video';

const ServerSide = () =>{
return(
<>
<div>
        <li><a target="_blank" href="https://github.com/Surfsol/webapi-ii-challenge">project</a></li>
      </div>
      <div>
        <li><a target="_blank" href="https://github.com/Surfsol/webapi-ii-guided">guided 2</a></li>
      </div>
      <div>
        <li><a target="_blank" href="https://www.youtube.com/watch?v=Z9GlifSzqQk&feature=youtu.be">lecture</a></li>
      </div>
      <li><img src={notes2}/></li>
      <Video>
        <source src={b1}  type="video/webm" />
        </Video>
</>

)



}

export default ServerSide