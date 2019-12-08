import React from 'react';
import './App.css';

const data = [

  { id: '', letter: 'Shut Up!', src: '\assets\audio\Ahhhhh, shutup.mp3' },
  
  { id: '', letter: 'Bombs away!', src: '\assets\audio\bombs away.mp3' },
  
  { id: '', letter: 'Disintergration', src: '\assets\audio\disintegration.mp3' },
  
  { id: '', letter: 'Ending Theme', src: '\assets\audio\Ending Theme.mp3' },

  { id: '', letter: 'Meep Meep', src: '\assets\audio\Meep Meep.mp3' },

  { id: '', letter: 'Oh ow!', src: '\assets\audio\Oh Ow.mp3' },

  { id: '', letter: "That's all Folks", src: "\assets\audio\That's All Folks.mp3" },

  { id: '', letter: "What's up doc", src: "\assets\audio\What's up Doc.mp3" },

  { id: '', letter: 'yiyiyiyiyi', src: '\assets\audio\yiyiyiyiyiyiyiyiyiyiyiyiyiyiyiyi.mp3' },

  { id: '', letter: 'You are rightt', src: '\assets\audio\You are right.mp3' }

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
