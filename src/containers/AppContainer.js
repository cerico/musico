import React  from 'react';
import { Player } from '../components/Player';
import { PlayList } from '../components/PlayList';
import { Display } from '../components/Display';
import { Controls } from '../components/Controls';
import { timeCalc } from '../utils/TimeCalc'

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      current: 0
    };
    this.loadPlayer = this.loadPlayer.bind(this);
    this.playPauseSound = this.playPauseSound.bind(this);
    this.playNext = this.playNext.bind(this);
  };
  
  componentDidMount() {
    this.player = document.getElementById('player');
  }

  loadPlayer(){
    this.player.load();
  }

  playList(){
    return this.props.sounds.map((sound,i) => {
      return  <PlayList 
        current={this.state.current} 
        playThis={this.playThis} 
        key={i} 
        tune={i} 
        sound={sound}
        playNext={this.playNext}
      /> 
    })
  };

  getTime() {
    
    let showTimeLeft
    if (this.state.playing && this.state.timeLeft){
      showTimeLeft = timeCalc(this.state.timeLeft)
    } else {
      showTimeLeft = ""
    }
      return showTimeLeft
  };

  playPauseSound(){
    if(this.state.playing){
			this.pauseSound();	
		}else{	
			this.playSound();
		}
  }

  pauseSound(){
    this.setState({playing: false}); 	
		this.player.pause();
  }

  playSound(){
    this.setState({playing: true});
    this.player.play();
    setInterval(() => this.updateTimer(),10)
  }

  updateTimer(){
    this.setState({
			timeLeft:this.player.duration - this.player.currentTime
		})
  }

  playNext(num){
    let index;
    0 < num && num < this.props.sounds.length ? 
	    index = num : index = 0
    this.setState({current: index})
		this.loadPlayer();
		if(this.state.playing){
			this.playSound();
		}	
  }
  
  render(){
    return (
      <div className={'site-wrapper'}>
        <div className="play-list">         
          {this.playList()}
        </div>
        <div className="right-side">
          <Player 
            sounds={this.props.sounds} 
            current={this.state.current} 
          />
          <div className="player">
            <Display 
              sounds={this.props.sounds} 
							current={this.state.current} 
							duration={this.getTime()}
							getTime={this.getTime}
            />
            <Controls 
							playing={this.state.playing} 
							playPauseSound={this.playPauseSound}
              playNext={this.playNext} 
              current={this.state.current} 
						/>
          </div>
          
        </div>
      </div>
    )
  }
};


