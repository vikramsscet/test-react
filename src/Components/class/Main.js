import React, {Component} from 'react';
import '../../css/main.css';
import {Content} from '../functional/Content';
import {Navigation} from '../functional/Navigation';
import {Footer} from '../functional/Footer';
class Main extends Component{
    constructor(){
        super();
        this.state = {
            navigation:["Add Navigation", "Remove Navigation", "Add Content", "Remove Content", "Add/Remove Items"],
            mainContent:["Content 1", "Content 2", "Content 3", "Content 4"],
            items:[],
            footer:[
                    ["REPORT ERROR","PRINT PAGE","FORUM","ABOUT"],
                    [
                            {"Top 10 Tutorials":["HTML Tutorial","CSS Tutorial","JavaScript Tutorial","W3.CSS Tutorial","Bootstrap Tutorial","SQL Tutorial","PHP Tutorial","jQuery Tutorial","Angular Tutorial","How To Tutorial"]},
                            {"Top 10 References":["HTML Reference","CSS Reference","JavaScript Reference","W3.CSS Reference","Bootstrap Reference","SQL Reference","PHP Reference","HTML Colors","jQuery Reference","AngularJS Reference"]},
                            {"Web Certificates":["HTML Certificate","CSS Certificate","JavaScript Certificate","jQuery Certificate","PHP Certificate","Bootstrap Certificate","XML Certificate"]},
                            {"Top 10 Examples":["HTML Examples","CSS Examples","JavaScript Examples","W3.CSS Examples","Bootstrap Examples","HTML DOM Examples"]}
                    ]    
                ]
        }
    }
    render(){
        return(
            <div className="main">
                <div className="header">
                    <div className="navigationItems">
                        <Navigation navigation={this.state.navigation} />
                    </div>
                </div>
                <div className="body">
                    <div className="left">
                        <div className="navigationColumnItems">
                            <Navigation navigation={this.state.navigation} />
                        </div>
                    </div>
                    <div className="center">
                        <Content content={this.state.mainContent} />
                    </div>
                    <div className="right">Right</div>
                </div>
                <div className="footer">
                    <Footer footer={this.state.footer} />
                </div>
            </div>
        );
    }
}

export default Main;