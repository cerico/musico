import React from 'react';

export const Player = props => {
	const mp3 = props.sounds[props.current].mp3;
		return (
      <audio id="player">
				<source id="src_mp3" type="audio/mp3" src={mp3} />
			</audio>	
		);
};