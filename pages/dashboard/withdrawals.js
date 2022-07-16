import React, { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const optionAmount = [
  { value: '1000', label: '1000' },
  { value: '2000', label: '2000' },
  { value: '3000', label: '3000' },
  { value: '4000', label: '4000' },
  { value: '5000', label: '5000' },
]
const optionCrypto = [
  { value: 'USDT', label: 'Tether (USDT)' },
  { value: 'BUSD', label: 'Binance (BUSD)' },
  { value: 'LTC', label: 'Litecoin (LTC)' },
];

export default function Withdrawals() {
  const [ selectCoin, setSelectedCoin ] = useState("USDT")
  const [ selectAmount, setSelectAmount ] = useState("1000")

  return (
    <WithdrawalsContainer>
       <section className="central-column">
        <div className="container">
                <h3>Withdrawal</h3>

                <span>
                        <form>
                        <Select
                              placeholder="Choose amount to withdraw"
                              defaultValue={selectAmount}
                              onChange={setSelectAmount}
                              options={optionAmount}
                          />
                          <p>Current Balance &nbsp; <b>{1000}SEC</b></p>
                          <label><input type="text" name="walletaddress" placeholder="Enter Wallet Address" required/></label>
                          <Select
                              placeholder="Choose Crypto Coin for Deposit"
                              defaultValue={selectCoin}
                              onChange={setSelectedCoin}
                              options={optionCrypto}
                          />
                         
                         <p>* Make sure the wallet address is in sync with the chosen cryptocoin</p>
                          <p>* Withdrawal is subject to rejection due to malicious attack or invalid input</p>
                          <p>* After withdrawal, you will be alerted within 24 hours</p>

                          <button>Withdraw</button>
                        </form>  
                      </span>    
        </div>
       </section>
    </WithdrawalsContainer>
  )
}


const WithdrawalsContainer = styled.div`
        width: 100%;
        height: 100vh;
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
                width: 200px;
                height: 40px;
                border-radius: 30px;
                font-weight: 600;
                font-size: 1.2rem;
                padding: 5px;
                box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 8px 0px;
            }

`
