import './App.css';
import MovieList from './components/MovieList';

function App() {

  return (
    <>
   <div className="container">
    <div className="row">
    <MovieList btn="btn btn-primary" name="KGF" description="Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he becomes involved with the notorious gold mafia."/>
    <MovieList btn="btn btn-secondary" name="John Wick: Chapter 4" description="With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin."/>
    <MovieList btn="btn btn-danger" name="Evil Dead Rise" description="After an earthquake reveals a secret chamber hidden beneath an apartment building, and two teenagers who happen to live their take a mysterious book from the chamber into their apartment"/>
    
    {/*  <StateComp/>  */}
    </div>
</div>
    </>
  );
}

export default App;
