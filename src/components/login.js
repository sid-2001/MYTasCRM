import React from 'react'
// import MailOutlineIcon from '@material-ui/icons/MailOutlineIcon';
// import InputAdornment from '@material-ui/material/InputAdornment';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
const Login=()=>{

    const paperStyle={padding :20,height:'60vh',width:380, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const backgroundstyle={backgroundColor:'#F0F7FF',height:'100%',width:'100%'}
   
    return(
        <Grid style={backgroundstyle}>
        <Grid align='center'><img id="logo" src="./logo.png" /></Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                
                   
                    <h2 id="headingstyle">Welcome Back</h2>
                    <h6 id="subheading">Enter Your Crendential to Access Your account </h6>
                </Grid>
              

                <Grid  container spacing={2}>
                <Grid md={2} align='center'>

                <LockOutlinedIcon />
    
                 </Grid>
                  
                <Grid md={10} mt={10}>
                <TextField  placeholder='Enter Your Mail'  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlinedIcon />
            </InputAdornment>
          ),
        }} variant="outlined" fullWidth required />

    
                 </Grid>
                 </Grid>
              
               
                
                
            
                <TextField  placeholder='Enter Your Password' type='password' InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon />
            </InputAdornment>
          ),
        }} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login