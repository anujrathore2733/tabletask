import React from "react";
import axios from "axios";


class TableDisplay extends React.Component {

    state = {
        start: 0,
        end: 2,
        data: [],
        current_pageno: 1,

    }

    componentDidMount = async () => {
        let data = await axios.get("http://my-json-server.typicode.com/anuj-rathore-au5/fakedata/User")
        console.log(data)
        this.setState({
            data: data.data
        })
    }

    nextpage = () => {
        if (this.state.end < this.state.data.length) {
            this.setState({
                start: this.state.start + 2,
                end: this.state.end + 2
            })
        }

    }

    prevpage = () => {
        if (this.state.start > 0) {
            this.setState({
                start: this.state.start - 2,
                end: this.state.end - 2
            })
        }

    }

    gettotalpage = () => {
        let totalpage = this.state.data.length / 2
        const pagearray = []

        for (let i = 1; i <= totalpage; i++) {
            pagearray.push(i)
        }
        return pagearray


    }
    switchtopage = (no) => {

        let skip = (no - 1) * 2
        this.setState({
            start: skip,
            end: skip + 2
        })
    }

    changecurrentpage = (p_no) => {

        this.setState({
            current_pageno: p_no
        })
        this.switchtopage(p_no)
        

    }

    getpagelist = (pageno = 1) => {
        const pagearray = this.gettotalpage()
        let pageind = pageno-1

        if (pageno === 1 || pageno === 2 || pageno === 3) {
            return (
                <div style={{ display: 'flex' }}>
                    <h4 style={this.state.current_pageno===pagearray[0]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[0])}>{pagearray[0]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[1]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[1])}>{pagearray[1]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[2]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[2])}>{pagearray[2]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[3]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[3])}>{pagearray[3]}</h4>
                    <h4>....</h4>
                    <h4 style={this.state.current_pageno===pagearray[pagearray.length-1]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pagearray.length - 1])}>{pagearray[pagearray.length - 1]}</h4>
                </div>
            )
        }
        else if (pageno > 3 && pageno < pagearray[pagearray.length - 3]) {

            return (
                <div style={{ display: 'flex' }}>
                    <h4 style={this.state.current_pageno===pagearray[0]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[0])}>{pagearray[0]}</h4>
                    <h4>....</h4>
                    <h4 style={this.state.current_pageno===pagearray[pageind-1]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pageind-1])}>{pagearray[pageind-1]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[pageind]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pageind])}>{pagearray[pageind]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[pageind+1]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pageind+1])}>{pagearray[pageind+1]}</h4>
                    <h4>....</h4>
                    <h4 style={this.state.current_pageno===pagearray[pagearray.length-1]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pagearray.length - 1])}>{pagearray[pagearray.length - 1]}</h4>
                </div>

            )
        }
        else{
            return(
                <div style={{ display: 'flex' }}>
                    <h4 style={this.state.current_pageno===pagearray[0]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[0])}>{pagearray[0]}</h4>
                    <h4>....</h4>
                    <h4 style={this.state.current_pageno===pagearray[pagearray.length-4]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pagearray.length - 4])}>{pagearray[pagearray.length - 4]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[pagearray.length-3]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pagearray.length - 3])}>{pagearray[pagearray.length - 3]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[pagearray.length-2]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pagearray.length - 2])}>{pagearray[pagearray.length - 2]}</h4>
                    <h4 style={this.state.current_pageno===pagearray[pagearray.length-1]?{color:'red'}:{color:'black'}} onClick={() => this.changecurrentpage(pagearray[pagearray.length - 1])}>{pagearray[pagearray.length - 1]}</h4>
                </div>

            )
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
                        onClick={() => this.prevpage()}>Prev</button>
                    {this.getpagelist(this.state.current_pageno)}
                    <button className="btn btn-sm btn-outline-primary mx-2"
                        onClick={() => this.nextpage()}>Next</button>
                </div>
            </div>
        )
    }
}


export default TableDisplay