import React from 'react';

export const Controls = props => {

	return (
    <div className="controls">					
			<button onClick={() => props.playNext(props.current-1)} className="btn-control" >
        <i className="fa fa-backward"></i>
      </button>
			<button onClick={props.playPauseSound} className="btn-control">
        <i className={"fa " + (props.playing ? 'fa-pause' : 'fa-play')}></i>
      </button>
			<button onClick={() => props.playNext(props.current+1)} className="btn-control">
        <i className="fa fa-forward"></i>
      </button>
		</div>  	
	);
  
}

export default Controls;