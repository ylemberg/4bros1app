import React from 'react';
import {render} from 'react-dom';
import MovieList from './movieList.jsx'

class App extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      movies: ['movieObject1', 'movieObject2']
    }
    this.search = this.search.bind(this)
    this.suggest = this.suggest.bind(this)
  }

  componentDidMount () {
  	// var context = this;
   //  axios.get('/movies')
   //  .then(result => {
   //    context.setState({
   //      data: result.data
   //    })
   //    console.log('movie data set to', context.state.data);
   //  })
   //  .catch(err => {
   //    console.log('error in component did mount catlist', err)
   //  })
  }

  search() {

  }

  suggest() {

  }

  render () {
    return(
    	<div>
  		  <button onClick ={()=> {
            this.search()
          }}>
    		Search
    		</button>

    		<button onClick ={()=> {
            this.suggest()
          }}>
    		Pick a Flick
    		</button>

    		<MovieList 
    			movies = {this.state.movies}
    		/>

    	</div>
    )
  }
}

render(<App/>, document.getElementById('app'));