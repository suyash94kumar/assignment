import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import axios from 'axios';


export class App extends Component {
  constructor(props) {
    super(props);
    this.handleFilterYear = this.handleFilterYear.bind(this);
    this.handleFilterLaunch = this.handleFilterLaunch.bind(this);
    this.handleFilterLand = this.handleFilterLand.bind(this);
    this.state = {
      spaceXdata: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`)
      .then(res => {
        const spaceXdata = res.data;
        this.setState({ spaceXdata });

      })
  }

  handleFilterYear(event) {
    event.preventDefault();
    console.log("submited: ", event.target.value);
    const url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_year='+event.target.value;
    console.log("url: ", url);
    axios.get(url)
      .then(res => {
        const spaceXdata = res.data;
        this.setState({ spaceXdata });

      })
  }

  handleFilterLaunch(event) {
    event.preventDefault();
    console.log("submited: ", event.target.value);
    const url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+event.target.value;
    console.log("url: ", url);
    axios.get(url)
      .then(res => {
        const spaceXdata = res.data;
        this.setState({ spaceXdata });

      })
  }

  handleFilterLand(event) {
    event.preventDefault();
    console.log("submited: ", event.target.value);
    const url = 'https://api.spaceXdata.com/v3/launches?limit=100&land_success='+event.target.value;
    console.log("url: ", url);
    axios.get(url)
      .then(res => {
        const spaceXdata = res.data;
        this.setState({ spaceXdata });

      })
  }

  render() {
    const allObject = this.state.spaceXdata;
    const listItems = allObject.map(item =>    
     <div className="col-md-3 disInline bodyContent">
        <div>
          <img src={item.links.mission_patch_small} width="132" height="130"></img>
          <p>{item.mission_name} #{item.flight_number}</p>
          <p>Mission Ids: {item.mission_id}</p>
          <p>Launch Year: {item.launch_year}</p>
          <p>Successful Launch: {item.launch_success?"true":"false"}</p>
          <p>Successful Landing: </p>  
        </div>
      </div>
    )

    return (
      <div>
        <Header headerContent="SpaceX Launch Programs"></Header>
        <div className="row">
          <div className="col-sm-3 filterOuter">
            <h3 style={{marginTop:'1px'}}>Filter</h3>
            <h4 style={{marginTop:'-14px', marginBottom: "-4px"}}>Launch Year</h4><hr/>          
            <button className="btn btn-primary" value="2006" onClick={this.handleFilterYear}>2006</button>
            <button className="btn btn-primary" value="2007" onClick={this.handleFilterYear}>2007</button>
            <button className="btn btn-primary" value="2008" onClick={this.handleFilterYear}>2008</button>
            <button className="btn btn-primary" value="2009" onClick={this.handleFilterYear}>2009</button>
            <button className="btn btn-primary" value="2010" onClick={this.handleFilterYear}>2010</button>
            <button className="btn btn-primary" value="2011" onClick={this.handleFilterYear}>2011</button>
            <button className="btn btn-primary" value="2012" onClick={this.handleFilterYear}>2012</button>
            <button className="btn btn-primary" value="2013" onClick={this.handleFilterYear}>2013</button>
            <button className="btn btn-primary" value="2014" onClick={this.handleFilterYear}>2014</button>
            <button className="btn btn-primary" value="2015" onClick={this.handleFilterYear}>2015</button>
            <button className="btn btn-primary" value="2016" onClick={this.handleFilterYear}>2016</button>
            <button className="btn btn-primary" value="2017" onClick={this.handleFilterYear}>2017</button>
            <button className="btn btn-primary" value="2018" onClick={this.handleFilterYear}>2018</button>
            <button className="btn btn-primary" value="2019" onClick={this.handleFilterYear}>2019</button>
            <button className="btn btn-primary" value="2020" onClick={this.handleFilterYear}>2020</button><br/>
            <h4 style={{marginTop:'0px', marginBottom: "0px"}}>Successful Launch</h4><hr/>
            <button className="btn btn-primary" value="true" onClick={this.handleFilterLaunch}>true</button>
            <button className="btn btn-primary" value="false" onClick={this.handleFilterLaunch}>false</button><br/>
            <h4 style={{marginTop:'0px', marginBottom: "0px"}}>Successful Landing</h4><hr/>
            <button className="btn btn-primary" value="true" onClick={this.handleFilterLand}>true</button>
            <button className="btn btn-primary" value="false" onClick={this.handleFilterLand}>false</button>
          </div>
          <div className="col-sm-9">
            <div className="boxGap">
            </div>
            <div className="row contentBox">
              {listItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



