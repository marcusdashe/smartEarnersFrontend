import React, { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

import StyledDashboardHeader from '../../components/user/dashboardHeader'



export default function Transfer() {
  return (
    <TransferContainer>
        <StyledDashboardHeader />
       <section className="central-column">
        <div className="container">
                <h3>Transfer</h3>
                <span>
                        <form>
                        <label><input type="text" name="account-transfer" placeholder="Enter receiver's account number" required/></label>
                        <label><input type="number" name="amount-transfer" placeholder='Enter amount in SEC to transfer' required/></label>
                          
                        
                          <p>* Make sure you input valid user account number</p>
                          <p>* Suspicious activity or invalid account number can cause transfer rejection</p>
                          <p>* You will be alerted within 24 hours</p> 

                          <button><small>Proceed with Transfer</small></button>
                        </form>  
                  </span> 
        </div>
       </section>
    </TransferContainer>
  )
}


const TransferContainer = styled.div`
        width: 100%;
        height: fit-content;
        margin: 0px;
        /* background: #00415d30; */
        color: #00415d;
        border: 2px solid transparent;
        .central-column{
            width: 60%;
            height: fit-content;
            background: whitesmoke;
            margin: 50px auto;
            border-radius: 4px;
            .container{
                    width: 74%;
                    margin: 5px auto;
            
                    h3 {
                        padding-top: 20px;
                        font-weight: 400;
                        font-size: 1.5rem;
                       
                    }

                    span{
                        padding: 10px;
                        font-size: 1rem;
                        p{
                            display: flex;
                            align-items: center ;
                            margin-bottom: 10px;
                        }
                    }
                  }
            }

            & input {
            width: 100%;
            height: 2.7rem;
            outline: none;
            border: 2px solid var(--gray-color);
            border-radius: 5px;
            padding: 7px;
            font-size: 1rem;
            margin:7px 0px;
      }
      & button{
      margin: 30px auto;
                border: none;
                background: var(--bright-color);
                color: var(--light-color);
                width: fit-content;
                height: 40px;
                border-radius: 30px;
                font-weight: 600;
                font-size: 1.2rem;
                padding: 10px;
                box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
                small {
                   display: flex;  
                  justify-content: center ;
                  align-items: center ;
                  
                }
              }

`