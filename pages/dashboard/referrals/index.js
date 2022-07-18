import React, { useState } from 'react'
import Select from 'react-select'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import styled from 'styled-components'
import StyledDashboardHeader from '../../../components/user/dashboardHeader'


const data = {
  ReferredBy: "Username",
  UserReferalId: "hGHG2ar2B2$@7SJA",
  referree: [
    {name: "Usmanhassan", bonus: "20SEC"}, 
    {name: "Chibuzorokoro", bonus: "30SEC"}, 
    {name: "Ntiemfuankuk", bonus: "28SEC"}, 
    {name: "Oludareadeniyi", bonus: "38SEC"}, 
    {name: "Eneokwa", bonus: "62SEC"}
  ]
}
export default function Index() {
  function calcBonus(x){
      let acc = 0;
      x.map(y => {
        acc += parseFloat(y.bonus)
      })

      return acc

  }
  return (
    <ReferralContainer>
      <StyledDashboardHeader />
       <section className="central-column">
        <div className="container">
                <h3>Referral</h3>
                <span>
                        <p>Referred By &nbsp;&nbsp;<b> {data.ReferredBy} </b></p> 
                        <p>Your Referral ID &nbsp;&nbsp;<b> {data.UserReferalId} </b></p>   
                </span>  
        </div>
        </section>
        <section className="central-column second">
        <div className="container">
                <h3>Bonus</h3>
                <section className="bonus-section">
                    <span>
                        <b>Referree</b> 

                        <ul>
                          {data.referree.map(referree => (<li key={referree}>{referree.name} - <b>{referree.bonus}</b></li>))}
                        </ul> 
                    </span>  
                    <span>
                            <p>Your Total Bonus &nbsp;&nbsp;
                              <b>{calcBonus(data.referree)} </b>
                              </p> 
                        
                    </span> 
                </section>
        </div>
       </section>
    </ReferralContainer>
  )
}

const ReferralContainer = styled.div`
      width: 100%;
        height: fit-content;
        margin: 0px;
        color: #00415d;
        border: 2px solid transparent;
        
        .central-column{
            width: 60%;
            height: fit-content;
            background: whitesmoke;
            margin: 50px auto 10px;
            border-radius: 4px;
            .container{
                    width: 74%;
                    margin: 0px auto;
            
                    h3 {
                        padding-top: 20px;
                        font-weight: 400;
                        font-size: 1.5rem;
                       
                    }

                    span{
                        padding: 10px;
                        font-size: 1.1rem;
                        p{
                            display: flex;
                            align-items: center ;
                            margin-bottom: 10px;
                        }
                    }
                  }
            }

            .central-column .second{
            margin-top:0px;
            border: 2px solid red;
        }

            & .bonus-section{
              display: flex;
              justify-content: space-between;
              margin: 0 0 50px;
            }
            & ul li {
              margin: 10px;
            }
`
