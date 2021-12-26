import React from  "react";
import Card from "./card";

const files=[
  {id:1, src=:"/1", title:"id1", urlpath:"/google.com" },
  {id:2, src::"/2", title="id2", urlpath:"/yandex.ru"}

];

class Home extends React.Component{
render(){
  return(
    <div className="cards">
      <Card />

    </div>

  )
}


}
export default Home;