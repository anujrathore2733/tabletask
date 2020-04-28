import React from "react";
import axios from "axios";


class TableDisplay extends React.Component {

    state = {
        start: 0,
        end: 5,
        data: []
    }

    componentDidMount = async () => {
        let data = await axios.get("http://my-json-server.typicode.com/anuj-rathore-au5/fakedata/User")
        console.log(data)
        this.setState({
            data: data.data
        })
    }

    nextpage = ()=>{
        if(this.state.end < this.state.data.length){
            this.setState({
                start:this.state.start + 5,
                end:this.state.end + 5
            })
        }

    }

    prevpage = ()=>{
        if(this.state.start > 0){
            this.setState({
                start:this.state.start - 5,
                end:this.state.end - 5
            })
        }

    }





    render() {

        const { start, end, data } = this.state

        return (
            <div className="tablediv">

                <table className="table table-striped w-100">
                    <thead className="bg-dark text-light">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </thead>
                    <tbody>
                        {data.slice(start, end).map((user) => 
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                            </tr>

                        )}
                    </tbody>
                </table>
                <div className="PageButton">
                    <button className="btn btn-sm btn-outline-primary mx-2"
                    onClick={()=>this.prevpage()}>Prev</button>
                    <button className="btn btn-sm btn-outline-primary mx-2"
                    onClick={()=>this.nextpage()}>Next</button>
                </div>
            </div>
        )
    }
}


export default TableDisplay