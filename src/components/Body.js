import { Box, Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import BgImage from '../images/bg-white.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Body = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Parallax
      bgImage={BgImage}
      bgImageStyle={{ height: 'auto' }}
      strength={500}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: 'absolute',
              background: `rgba(255, 125, 0, ${percentage * 10})`,
              left: '50%',
              top: '50%',
              borderRadius: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
        </div>
      )}
    >
      <Box
        style={{
          height: '100vh',
        }}
      >
        <Box className="container">
          <Box className="container__price">
            <Typography variant="h1">
              <font color="#4772d9">FREE SHOUTCAST</font> SERVER
            </Typography>
            <Typography variant="h2">FREE</Typography>
            <Box component="ul">
              <Box component="li">Online Radio Control Panel</Box>
              <Box component="li">Stream Live</Box>
              <Box component="li">AutoDJ Mode</Box>
              <Box component="li">Radio Player & Page</Box>
              <Box component="li">LiveChat Support</Box>
              <Box component="li">
                <Box href="/" component="a">
                  and more...
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="container__form">
            <Typography variant="h1">
              GET YOUR <font color="#4772d9">FREE</font> RADIO SERVER
            </Typography>
            <Typography variant="span">
              No Card - 100% Free. Start Your Online Radio Station Today!
            </Typography>

            <Box component="form">
              <TextField
                style={{ paddingBottom: '15px' }}
                id="standard-read-only-input"
                label="Username"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                style={{ paddingBottom: '15px' }}
                id="standard-read-only-input"
                label="Email"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                style={{ paddingBottom: '15px' }}
                id="standard-read-only-input"
                label="Password"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                style={{ paddingBottom: '15px' }}
                id="standard-read-only-input"
                label="Confirm Password"
                InputProps={{
                  readOnly: true,
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="
                  I Agree To The Terms Of Service"
              />
              <Button variant="contained" color="primary" disableElevation>
                REGISTER NOW
              </Button>
            </Box>
            <Typography variant="span">
              Free Service Provided by Fastcast4u.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Parallax>
  );
};

export default Body;
