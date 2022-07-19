import React, { useState } from 'react'
import Select from 'react-select'
import GppGoodIcon from '@mui/icons-material/GppGood'
import styled from 'styled-components'

import StyledDashboardHeader from '../../components/user/dashboardHeader'


const optionCrypto = [
  { value: 'USDT', label: 'Tether (USDT)' },
  { value: 'BUSD', label: 'Binance (BUSD)' },
  { value: 'LTC', label: 'Litecoin (LTC)' },
];

export default function Withdrawals() {
  const [ selectCoin, setSelectedCoin ] = useState("USDT")
  const [ selectAmount, setSelectAmount ] = useState("1000")
  const [isVerified, setIsVerified ] = useState(true)

  return (
  
    <WithdrawalsContainer>
       <StyledDashboardHeader />
       
       <section className="central-column">
        <div className="container">
                <h3>Withdrawal</h3>

                <span>
                        <form>
                        <label><input type="number" name="amount" placeholder='Enter amount to withdraw' maxLength={"10000000"} minLength={"1000"} required/></label>
                          <p>* Enter amount in multiple of 1000</p>
                          <p>* Maximum withdrawal is 10k</p>
                          <label><input type="text" name="walletaddress" placeholder="Enter wallet address" required/></label>
                          <Select
                              placeholder="Choose cryptocoin for deposit"
                              defaultValue={selectCoin}
                              onChange={setSelectedCoin}
                              options={optionCrypto}
                          />
                         
                         <p>* Make sure the wallet address is in sync with the chosen cryptocoin</p>
                          <p>* Withdrawal is subject to rejection due to malicious attack or invalid input</p>
                          <p>* After withdrawal, you will be alerted within 24 hours</p>

                          <button><small>Proceed with Withdraw </small></button>
                        </form>  
                      </span>    
        </div>
       </section>
    </WithdrawalsContainer>
  
  )
}


const WithdrawalsContainer = styled.div`
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
                    /* border: 2px solid red; */
                    h3 {
                        padding-top: 20px;
                        font-weight: 400;
                        font-size: 1.5rem;
                        /* border: 2px solid green; */
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
                width: 250px;
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
