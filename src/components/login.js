import React from 'react'
// import MailOutlineIcon from '@material-ui/icons/MailOutlineIcon';
// import InputAdornment from '@material-ui/material/InputAdornment';
import Box from '@material-ui/core/Box';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Earbuds from "@material-ui/icons/Earbuds";
// import Earbuds from '@mui/icons-material/Earbuds';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// import LockIcon from '@mui/icons-material/Lock';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
const Login=()=>{

    const paperStyle={padding :'15px',height:'50vh',width:480, margin:"15px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e',marginTop:"100px"}
    const btnstyle={margin:'8px 0'}
    const backgroundstyle={backgroundColor:'#F0F7FF',height:'100vh'}
   
    return(
        <Grid style={backgroundstyle}>
        <Grid align='center'> <img id="logo" style={{marginTop:"10vh"}} src="./logo.png" /></Grid>
            <Paper elevation={10} style={paperStyle}>
            
                <Grid align='center' style={{padding:"20px"}}>
                
                   
                    <h2 id="headingstyle">Welcome Back</h2>
                    <h6 id="subheading">Enter Your Crendential to Access Your account </h6>
                </Grid>
              

                <Grid  container spacing={3} style={{padding:"10px",borderLeft:'3px solid ',borderColor:'#1678F2'}}>
               
                   <Grid md={3} align="center"  >
                    <Grid><MailOutlinedIcon fontSize="large" style={{minHeight:"6vh",color:'grey'}}/></Grid>
                  <Grid>
                  <Grid align="center"  style={{font:"Poppins",color:'grey',fontSize: '12px'}} >Login with Email</Grid>
               
         
                  </Grid>
                   
    
                    </Grid> 
             
          
                  
                <Grid md={9} align="right">
                <TextField size="small"  placeholder='Enter Your Email'  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlinedIcon fontSize="small"/>
            </InputAdornment>
          ),
        }} variant="outlined" fullWidth required />

    
                 </Grid>
                 </Grid>
              
                 <Grid  container spacing={3} style={{padding:"10px"}}>
               
               <Grid md={3} align="center">
                <Grid >
               <ThunderstormOutlinedIcon fontSize="large"  style={{minHeight:"6vh",color:'Grey'}}/>
               </Grid>

               <Grid align="center"  style={{font:"Poppins",color:'grey',fontSize: '12px'}} >Login with SSO</Grid>
                </Grid> 
         
      
              
            <Grid md={9}>
            <TextField size="small"   placeholder='Enter Your Password'  InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <LockOutlinedIcon  fontSize="small" />
        </InputAdornment>
      ),
    }} variant="outlined" fullWidth required />


             </Grid>
             </Grid>
                
                <Grid container spacing={3} style={{padding:"10px"}}>
                 <Grid md={3} align="center" >
                 
                 </Grid>
                 <Grid md={9}>
                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                  </Grid>
                
                </Grid>
          
                
               
            </Paper>
            <Grid align="center" style={{fontFamily:'Helvetica Neue LT Std',fontWeight:"500",fontSize:'16px',color:'black',paddingTop:'3vh'}}><span style={{fontFamily:'Poppins',fontStyle:'Normal',marginTop:'100px'}}>Forgot Your Password ? <a href="*">Reset Password</a></span></Grid></Grid>
    )
}

export default Login