import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AddressIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useState } from 'react'
import { ProfileContainer } from './styles'

export default function Index() {

  const [isVerified, setIsVerified ] = useState(true)
  return (
    <ProfileContainer>
      <section className="central-column">
          <span className="user-bio">
              <h3 className="user-avatar">R</h3>
            
              <section className="user-info">
                {/* Email, Phone, Amount, Account Number, Referral Code */}
                  <span>Ramonmurphy</span> { isVerified ? <GppGoodIcon/>: null}
                  <span className="full-name-acc-num"><br />
                    <p>Name  &nbsp;&nbsp; <b>Ramon Murphy</b></p>
                    <p>Current Balance &nbsp;&nbsp;<b> 2000SEC </b></p> 
                    <p>Account Number  &nbsp;&nbsp; <b>3033027680</b></p>
                  </span>
              </section>

          
          </span>
          <section className="central-column-second">
                  <div className="container">
                    <h3>Contact</h3>
                    <span>
                        <p>< MailOutlineIcon fontSize="small"/> &nbsp;&nbsp; <b>ramon.murphy@gmail.com </b></p> 
                        <p>< SmartphoneIcon fontSize="small"/>  &nbsp;&nbsp;<b>08034477604</b></p>   
                        {/* <p>< AddressIcon/>  &nbsp;&nbsp;<b>7 Takori Gusau, Zamfara State</b></p>    */}
                    </span>                  
                  </div>
          </section>

          {/* <section className="central-column-third">
          <div className="container">
                    <h3>Account</h3>
                    <span>
                        <p>< AccountBalanceIcon/> &nbsp;&nbsp;<b> 2000SEC </b></p> 
                        <p>< SettingsAccessibilityIcon/> <b>Inusa Hassan</b></p>   
                    </span>                  
                  </div>
          </section> */}
      </section>
    </ProfileContainer>
  )
}
