import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Saudacao extends Component {
    
    render(){
        // console.log(this.props.saudacao.value);s
        return(
            <div>
                <label>{this.props.saudacao.value}</label>
            </div>
        )
    }
}

const mapStateToProps = state=>state;


export default connect(mapStateToProps)(Saudacao)