import React from 'react';
import './App.css';

const data = [

  { id: '', letter: 'Shut Up!', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/Ahhhhh%2C%20shutup.mp3' },
  
  { id: '', letter: 'Bombs away!', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/bombs%20away.mp3' },
  
  { id: '', letter: 'Prepare', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/disintegration.mp3' },
  
  { id: '', letter: 'Ending Theme', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/Ending%20Theme.mp3' },

  { id: '', letter: 'Meep Meep', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/Meep%20Meep.mp3' },

  { id: '', letter: 'Oh ow!', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/Oh%20Ow.mp3' },

  { id: '', letter: "That's all Folks", src: "https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/That's%20All%20Folks.mp3" },

  { id: '', letter: "What's up doc", src: "https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/What's%20up%20Doc.mp3" },

  { id: '', letter: 'yiyiyiyiyi', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/yiyiyiyiyiyiyiyiyiyiyiyiyiyiyiyi.mp3' },

  { id: '', letter: 'You are right', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/You%20are%20right.mp3' },

  { id: '', letter: 'Hello', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/hello.mp3' },

  { id: '', letter: 'Sorry',  src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/im%20sorry.mp3' },

  { id: '', letter: 'le meow', src: 'https://raw.githubusercontent.com/btanguturu/drumkit/master/assets/audio/meow.mp3' }
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      
      <div 
          className='drum-pad' 
          id={this.props.id}
          onClick={this.handleClick}
      >
        <h2>{this.props.letter}</h2>
        <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: ''
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(

      <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        
        <div id='drum-pads'>{data.map(d => (
          
           <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
            
         ))}</div>
    </div>
    
    )
  }
}




export default App;
