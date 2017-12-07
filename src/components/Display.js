import React from 'react';

export const Display = props => {

  let style = {
		imgStyle: {
			width: '43%',
			borderRadius: '4%',
			textAlign: 'center',
			marginTop: '2%',
			marginLeft: '28%',
    },
    songStyle: {
      display: 'block',
      height: '20px',
      textAlign:'center',
      color:'white'
    }
  }
  
	const title = props.sounds[props.current].title;
	const	artist = props.sounds[props.current].artist;
  const	cover = props.sounds[props.current].cover;
  
  return (
    <div id="display-area">
      <img style={style.imgStyle} src={cover}/>
      <h3 style={style.songStyle}>{artist} - {title}  { props.duration}</h3>
    </div>          	
    );
}