import React, { Component } from 'react';
import { url } from '../keys';

class MainView extends Component {

  state = {
    data: [],
    list: [],
    daysData: [],
  }

  componentDidMount = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const daysData = data.list.filter((day) => day.dt_txt.includes("18:00:00"))
      this.setState({
        data,
        list: data.list,
        daysData,
      },
        () => console.log(this.state)
      )
    })
  }
  

  render() {

    const { data, daysData } = this.state;

    return (
      <div className="container-fluid">
        <h1 className="display-3">Weather Forecast for the next 5 days</h1>
        {data.length === 0 ? <h3>Loading...</h3> : <h3>City: {data.city.name}. {data.city.country}</h3>}
      </div>
    )
  }
}

export default MainView;