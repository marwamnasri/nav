import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          display : false
            
         }
    }
    render() { 
        return ( 
            <div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li onClick={()=>this.setState({display:!this.state.display})}><a href="#">Services</a>
                     <ul className={!this.state.display ? "hide":"hiden"}>
                         <li><a href="#">For entrepreneurs</a></li>
                         <li><a href="#">For studient</a></li>
                         <li><a href="#">For hobboyist</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
         );
    }
}
 
export default Header  ;