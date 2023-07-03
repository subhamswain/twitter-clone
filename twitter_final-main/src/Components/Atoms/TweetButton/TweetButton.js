import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import styles from './TweetButton.module.css'
import MiddleSecTweetBox from '../MiddleSectionTweet/MiddleSectionTweet';

export default function TweetButton() {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  
 

  return (
    <div>
      <CustomButton  onClick={handleClickOpen}
       buttonText="Tweet" className={styles.leftSecTweetBtn}
      />
      <Dialog
      PaperProps={{
        style: {
          borderRadius: 20,
        },
      }}
        open={open}
        onClose={handleClose}
      >
     <MiddleSecTweetBox true={true} setOpen={setOpen}/>
      </Dialog>
    </div>
  );
}