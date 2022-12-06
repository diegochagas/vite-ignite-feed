import React from 'react';

import styles from './Avatar.module.css'

function Avatar({ src, hasBorder = true }) {
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="profile picture" />;
}

export default Avatar;