import React from "react";
import Film from "./Film"

class FilmList extends React.Component {
  render() {

    const filmNodes = this.props.data.map(film => {
      return (
        <Film
        key={film.id} url={film.url}>
        {film.name}
        </Film>

);
  })

return(
  <div className="film-list">
  {filmNodes}
  </div>
)
  }
}

export default FilmList;

 
