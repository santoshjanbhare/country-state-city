import React,{ Component } from 'react';
import axios from 'axios';

class Resolver extends Component{

  state = {
    countries: [],
    states: [],
    cities: [],
    api_token: 'bUc49N0IVVry28oIAMr6PI678gAebpJDgNCifnQfEIAFr4o8TlNtKsQ6zBJahOUKJcw',
    user_email: 'sj.pune95@gmail.com',
    selectedCountry: " -- Select Country -- ",
    selectedState: " -- Select State -- ",
    selectedCity: " -- Select City -- "

  }
    componentDidMount() {
        axios.get(`https://www.universal-tutorial.com/api/getaccesstoken`
        ,{
          headers: {"api-token": `${this.state.api_token}`,
          'user-email': `${this.state.user_email}`}})
          .then(res => {
            //console.log(res.data);
            const auth = res.data.auth_token;          
            this.setState({ auth });
            //console.log(`Bearer ${this.state.auth}`)
            return axios.get(`https://www.universal-tutorial.com/api/countries/`,{
              headers: {
                "Authorization": `Bearer ${this.state.auth}`
              }
            
          })
            .then(res => {
              //console.log(`Bearer ${this.state.auth}`);
              const countries = res.data;
              this.setState({ countries });
            })
          })
          
      }
      componentDidUpdate(prevState){
        if(prevState.selectedCountry!==this.state.selectedCountry && this.state.selectedCountry!==" -- Select Country -- "){
         
        }
        
      }
      handleCountryChange = event => {
        this.setState({
          selectedCountry : event.target.value
        })
         console.log(this.state.selectedCountry)
          axios.get(`https://www.universal-tutorial.com/api/states/${event.target.value}`,{
              headers: {
                "Authorization": `Bearer ${this.state.auth}`
              }
            
          })
            .then(res => {
              //console.log(`Bearer ${this.state.auth}`);
              const states = res.data;
              this.setState({ states });
            })
        
      }

      handleStateChange = event => {
        this.setState({
          selectedState : event.target.value
        })
        console.log(this.state.selectedCountry)
          axios.get(`https://www.universal-tutorial.com/api/cities/${event.target.value}`,{
              headers: {
                "Authorization": `Bearer ${this.state.auth}`
              }
            
          })
            .then(res => {
              //console.log(`Bearer ${this.state.auth}`);
              const cities = res.data;
              this.setState({ cities });
            })
        
      }

      handleCityChange = event => {
        this.setState({
          selectedCity : event.target.value
        })
        
      }
    render () {
        //console.log(1)
      return (
    <div >
      <div>
      <label>Country : </label>
      <select  value={this.state.selectedCountry} onChange = {this.handleCountryChange}>
      <option key={this.state.selectedCountry} value={this.state.selectedCountry}>{this.state.selectedCountry}</option>
      {this.state.countries.map(country =>
        <option key={country.country_name} value={country.country_name}>{country.country_name}</option>
      )};
    </select>
    </div>
    <div>
    <label>State : </label>
    <select  value={this.state.selecedtState} onChange = {this.handleStateChange}>
    <option key={this.state.selectedState} value={this.state.selectedState}>{this.state.selectedState}</option>
      {this.state.states.map(state =>
        <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
      )};
    </select>
    </div> 
    <div>
    <label>City : </label>
    <select  value={this.state.selectedCity} onChange = {this.handleCityChange}>
    <option key={this.state.selectedCity} value={this.state.selectedCity}>{this.state.selectedCity}</option>
      {this.state.cities.map(city =>
        <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
      )};
    </select>
    </div> 
    </div>
  );
}
}

export default Resolver;
