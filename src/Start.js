import React,{Component} from 'react';
export  default class Start extends Component{
    componentDidMount() {
        console.log(11111111111111)
        this.firstN()
    }
    firstN=()=>{
        console.log(2222222)
    }
    render(){
        return(
            <div>111111111
                <div>2222222</div>
            </div>

        )
    }
}
