import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import api from './Api'

const statuses = {
    'watched': 'Assitido',
    'watching': 'Assitindo',
    'toWatch': 'Assitir'
}

class NewSeries extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          genres: [],
          isLoading: false,
          redirect: false
        }

        this.saveSeries = this.saveSeries.bind(this)
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        
        api.loadGenres()
            .then((res) => {
                this.setState({
                isLoading: false,
                genres: res.data
                })
            })
    }

    saveSeries() {
        const newSeries = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comments: this.refs.comments.value
        }
        api.saveSeries(newSeries)
            .then((res) => {
                this.setState({
                    redirect: '/series/'+this.refs.genre.value
                })
            })
    }

    render() {
        return (
            <section className="intro-section container">
                { this.state.redirect &&
                    <Redirect to={ this.state.redirect } />
                }
                <h1>Nova Série</h1>
                <form>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" ref="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Comentários:</label>
                        <textarea ref="comments" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Status:</label>
                        <select ref="status" className="form-control">
                            { Object
                                .keys(statuses)
                                .map( key => <option key={key} value={key}>{statuses[key]}</option> )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Gênero:</label>
                        <select ref="genre" className="form-control">
                            { this.state.genres
                                .map( key => <option key={key} value={key}>{[key]}</option> )
                            }
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.saveSeries}>Salvar</button>
                </form>
            </section>
        )
    }
}

export default NewSeries