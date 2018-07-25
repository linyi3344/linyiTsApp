import * as React from 'react'
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            aa:'111',
            bb:'222',
            list:[1,2,3,4,5,6]
        }
    }
    aa(params,params2) {
        return params+params2
    }
    render() {
        console.log(11111,this.data)
        return (
            
            <div className="home">
                home
            </div>
        )
    }
}