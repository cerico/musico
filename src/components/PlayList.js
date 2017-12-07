import React from 'react';

export const PlayList = props => {
  // console.log(props)
  let activeColor
	props.current === props.tune ? 
    activeColor = '#e19375' : activeColor = '#5c4981'
  
  const style = {
    listStyle: {
      listStyle: 'none',
      background: activeColor,
      width: '45%',
      marginBottom:'2px',
      paddingLeft: '1%',
      paddingTop: '1%',
      paddingBottom: '1%',
      marginTop: '2px',
      borderBottom: '1px dotted black'
    }
  }

  return (
    <li style={style.listStyle} onClick={() =>  props.playNext(props.tune)} >
      <a>
        <div className="item-title">
          <div className="item-inner">
          <h3>{props.sound.artist} - {props.sound.title}</h3>
          </div>
        </div>
      </a>
    </li>
  );

}