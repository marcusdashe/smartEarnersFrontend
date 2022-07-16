import React, { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'



export default function Transfer() {
  return (
    <TransferContainer>
       <section className="central-column">
        <div className="container">
                <h3>Transfer</h3>
                <span>
                        <form>
                        <label><input type="text" name="account-transfer" placeholder="Enter receiver's account number" required/></label>
                        <label><input type="number" name="amount-transfer" placeholder='Enter amount in SEC to transfer' required/></label>
                          <p>Current Balance &nbsp; <b>{1000}SEC</b></p>
                        
                          <p>* Make sure you input valid user account number</p>
                          <p>* Suspicious activity or invalid/non-existent account number can lead to rejection of transfer</p>
                          <p>* After transfer, you will be alerted within 24 hours</p> 

                          <button>Transfer</button>
                        </form>  
                  </span> 
        </div>
       </section>
    </TransferContainer>
  )
}


const TransferContainer = styled.div`
      width: 100%;
        height: 100vh;
        margin: 0px;
        /* background: #00415d30; */
        color: #00415d;
        border: 2px solid transparent;
        .central-column:nth-child(1){
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
                width: 200px;
                height: 40px;
                border-radius: 30px;
                font-weight: 600;
                font-size: 1.2rem;
                padding: 5px;
                box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
            }

`