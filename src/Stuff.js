import React from "react";

class Stuff extends React.Component {
    constructor(props){
         super(props);
         console.log(props);
         props.history.listen((location)=>{
             console.log(123)
              console.log(77);


         })
    }
    componentDidMount(){
       //this.goTo();
    }
    goTo(){
        console.log(456)
        console.log(this.props,789)
        this.props.history.push({
            path:'/start'
        })
    }
    render() {
        return (
            <div>
                <h2>STUFF</h2>
                <p>{JSON.stringify(this.props)}</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
                <div onClick={this.goTo}>1111111</div>
            </div>
        );
    }

}

export default Stuff
