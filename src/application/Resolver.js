import React,{ Component } from 'react';
import axios from 'axios';

class Resolver extends Component{

  state = {
    countries: [],
    auth_token: String,
    auth:String

  }
    componentDidMount() {
        axios.get(`https://www.universal-tutorial.com/api/getaccesstoken`
        ,{
          headers: {'api-token':'bUc49N0IVVry28oIAMr6PI678gAebpJDgNCifnQfEIAFr4o8TlNtKsQ6zBJahOUKJcw',
          'user-email': 'sj.pune95@gmail.com'}})
          .then(res => {
            console.log(res.data);
            const auth = res.data.auth_token;          
            this.setState({ auth });
            console.log(`Bearer ${this.state.auth}`)
            //this.setState({ persons  });
            return axios.get(`https://www.universal-tutorial.com/api/countries/`,{
              headers: {
                "Authorization": `Bearer ${this.state.auth}`
                //"Accept": "application/json"
                //'authorization': ` ${this.state.auth}`
              }
            
          })
            .then(res => {
              console.log(`Bearer ${this.state.auth}`);
              const countries = res.data;
              this.setState({ countries });
            })
          })
          
          
      }
    render () {
        console.log(1)
      return (
    <div >
      <ul>
      { this.state.countries.map(country => <li>{country.country_name}</li>)}
      </ul>
    </div>
  );
}
}

export default Resolver;
