import React from 'react'
import {render} from 'react-dom'
import MovieList from './movieList.jsx'
import QuizMovieList from './quizMovieList.jsx'
import SearchMovieList from './searchMovieList.jsx'
import MovieDescription from './movieDescription.jsx'
import { Modal } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
      movies: ['movieObject1', 'movieObject2', 'movieobject3', 'moveiobject4', 'movieobjec5'],
      testMovies: ['movieObject3', '4ma;dsfjas;', '5ds;afjds;lfakj', '6laksdjf;adslk', '324', 'the sixth item'],
      searchResult: [],
      showSearchModal: false,
      showSuggestModal: false,
      showQuizResults: false,
      showDetails: false,
<<<<<<< HEAD
      showSearchResults: false
=======
      detailMovie: null
>>>>>>> [feat] add onclick to movie to access description
    }
  this.openSearch = this.openSearch.bind(this)
  this.closeSearch = this.closeSearch.bind(this)
  this.openSuggest = this.openSuggest.bind(this)
  this.closeSuggest = this.closeSuggest.bind(this)
  this.submitQuiz = this.submitQuiz.bind(this)
  this.homePage = this.homePage.bind(this)
  this.submitSearch = this.submitSearch.bind(this)
  this.openDetails = this.openDetails.bind(this)
}

  componentDidMount () {
  	var context = this;
    axios.get('/api/getFirstFive')
    .then(result => {
      context.setState({
        movies: result.data,
        testMovies: result.data
      })
      console.log('movie data set to', context.state.movies);
    })
    .catch(err => {
      console.log('error in component did mount in index', err)
    })
  }
  openSearch () {
    this.setState({ showSearchModal: true })
  }

  closeSearch () {
    this.setState({ showSearchModal: false })
  }

  openSuggest () {
    this.setState({showSuggestModal: true})
  }

  closeSuggest () {
    this.setState({showSuggestModal: false})
  }

  submitQuiz () {
    console.log('quiz submitted')
    this.setState({showQuizResults: true})
  }

  homePage () {
    this.setState({
      showQuizResults: false,
      showDetails: false
    })
  }

  openDetails (movie) {
    var context = this;
    this.setState({
      showDetails: true,
      detailMovie: movie
    })
    // axios.get('api/movies/')
    // .then(result => {
    //   context.setState({
    //     movies: result.data,
    //   })
    //   console.log('movie details data set to', context.state.movies);
    // })
    // .catch(err => {
    //   console.log('error in component did mount in index', err)
    // })
  }

  submitSearch (event) {
    var context = this
    event.preventDefault()
    this.closeSearch()
    let query = ""
    query = document.getElementById('movieTitle').value
    axios.get('/api/searchByMovieTitle', {
      headers: {
        query: query
      }
    })
    .then(resp => {
      // let searchArr =[];
      // searchArr.push(resp.data);
      context.setState({searchResult: resp.data,
        showSearchResults: true 
      })

    })

  }

  render () {
    return (
      <div>
      <button onClick={() => {
      this.openSearch()
    }}>
    		Search
    		</button>

      <Modal show={this.state.showSearchModal} onHide={this.closeSearch}>
          <Modal.Header closeButton>
            <Modal.Title>Find a film!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
           <label>
            Movie Title:
            <input type='text' id='movieTitle' />
          </label>
           <button onClick={this.submitSearch}>Search!</button>
         </form>

          </Modal.Body>
        </Modal>

      <button onClick={() => {
          this.openSuggest()
        }}>
        Pick a Flick
        </button>

      <Modal show={this.state.showSuggestModal} onHide={this.closeSuggest}>
          <Modal.Header closeButton>
            <Modal.Title>Let us help you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Fill out some quiz</p>
            <p>Which genre?</p>
            <DropdownButton title={'genre'} id={'askGenre'}>
              <MenuItem eventKey='1'>Action</MenuItem>
              <MenuItem eventKey='2'>Comedy</MenuItem>
              <MenuItem eventKey='3'>Drama</MenuItem>
              <MenuItem eventKey='4'>Romance</MenuItem>
              <MenuItem eventKey='5'>Indifferent</MenuItem>
            </DropdownButton>
            <p>Which era?</p>
            <DropdownButton title={'era'} id={'askEra'}>
              <MenuItem eventKey='1'>Classic</MenuItem>
              <MenuItem eventKey='2'>Modern</MenuItem>
              <MenuItem eventKey='3'>New</MenuItem>
              <MenuItem eventKey='4'>Old</MenuItem>
              <MenuItem eventKey='5'>Indifferent</MenuItem>
            </DropdownButton>
            <p>Sort by?</p>
            <DropdownButton title={'sort'} id={'askSort'}>
              <MenuItem eventKey='1'>Awards</MenuItem>
              <MenuItem eventKey='2'>Rating</MenuItem>
              <MenuItem eventKey='3'>Popularity</MenuItem>
              <MenuItem eventKey='4'>Recommended</MenuItem>
              <MenuItem eventKey='5'>Indifferent</MenuItem>
            </DropdownButton>
          </Modal.Body>
          <button onClick={() => {
            this.submitQuiz()
            this.closeSuggest()
          }}>
          Submit
          </button>
        </Modal>

      <button onClick={() => {
          this.homePage()
        }}>
        Home
        </button>
      {this.state.showQuizResults ?
          <QuizMovieList
            movies ={this.state.testMovies}
          /> :
          this.state.showSearchResults ?
            <SearchMovieList
              movies={this.state.searchResult}
            />
            :
          this.state.showDetails ?
            <MovieDescription 
              movie={this.state.detailMovie}
            />
          :
          <MovieList
            movies= {this.state.movies}
            openDetails = {this.openDetails}
      		/>
        }

    	</div>
    )
  }
}

render(<App />, document.getElementById('app'))
