import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import { fetchSmurfs } from '../store/actions'
import {SmurfForm} from './SmurfForm'

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [])

    console.log('Smurfs', props.smurfs)

    return (
        <div>
            <SmurfForm />
            {props.isLoading && <h4>Loading Smurfs</h4>}
            {props.error && (<p className='error'>Error: {props.error}</p>)}
            {props.smurfs && (
                <div className="character-container">
                    {props.smurfs.map(smurf => (
                        <div className='smurf'>
                            <h3>Name: {smurf.name}</h3>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
                    ))}

                </div>)}
        </div>
    )
}

const mapStateToProps= state => {
     return {
         isLoading: state.isLoading,
         smurfs: state.smurfs,
         error: state.error
     }
}

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList)