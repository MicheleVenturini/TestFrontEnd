// name, job, image, checked (true o false )

import React from 'react';
import { TitleSubTitle } from './titleSubTitle';

export const ProfileCard = ({ name, job, image, checked }) => {
    const styles = {
      card: {
        maxWidth: '300px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        textAlign: 'center'
      },
      imageContainer: {
        position: 'relative',
        width: '128px',
        height: '128px',
        margin: '0 auto'
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover'
      },
      checkmark: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        backgroundColor: '#2196f3',
        color: 'white',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px'
      },
      titleContainer: {
        marginTop: '15px'
      }
    };
  
    return (
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img 
            src={image} 
            alt={`${name}'s profile`} 
            style={styles.image}
          />
          {checked && (
            <div style={styles.checkmark}>✓</div>
          )}
        </div>
        <div style={styles.titleContainer}>
          <TitleSubTitle
            title={name}
            subTitle={job}
            showSubTitle={true}
          />
        </div>
      </div>
    );
  };