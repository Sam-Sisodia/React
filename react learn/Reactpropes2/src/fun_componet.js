//  import React  from "react";  
import propes from "./propes";
import React, {Component}  from "react";




//class based  

class Student  extends Component{
    render()
    {
        return <h1>This is class component {this.props.name}</h1>
    }
}

export default Student



//finction componet without propers

// const Student = () =>
// {
//     return <h1>Hello Sajal This Is Function Componet </h1>
// }


// export default Student



//with props


//=========================================================
// const Student = propes  =>
// {
//     return <h1>Hello {propes.name} This Is Function Componet </h1>
// }


// export default Student


