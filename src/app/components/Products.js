import React, {Component} from "react";


export class Products extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        var url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url )
        // var url = 'http://99.79.72.122/catalog/JSON';
        // fetch(url,{
        //         mode: 'no-cors',
        //         headers: {'Access-Control-Allow-Origin': '*'  }
        //  })
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            });
        });
    }
    
    render() {

        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return(<div> Loading ....</div>);
        }
        else{
            return (

                <div className="wrapper">
                <div className="form-wrapper">
                    <div className="row small-up-2 medium-up-3 large-up-4">
                    <div className="column bodyPart">
                        <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <h3>Welcome to Product Page</h3>
                        </div>
                        </div>
                        <div className="row">
                       <div className="col-xs-10 col-xs-offset-1"></div>
                       <ul>
                        {items.map(item => (
                        <li key={item.id}>
                         Name: {item.name} | Email: {item.email} 
                         {/* Catergory: {item.name} | Description: {item.description} */}
                        </li>
                        ))}

                    </ul>

                       </div>
                      </div>
               </div>
              </div>
              </div>
               
            );
        }
    }
}
