import React, { useState } from 'react'
import Select from 'react-select';
import styled from 'styled-components'


const optionCrypto = [
  { value: 'USDT', label: 'Tether (USDT)' },
  { value: 'BUSD', label: 'Binance (BUSD)' },
  { value: 'LTC', label: 'Litecoin (LTC)' },
];

export default function Deposit() {
  const [ selectCoin, setSelectedCoin ] = useState("USDT")
  return (
    <DepositContainer>
      <section className="central-column">
      <div className="container">
                    <h3>Deposit</h3>
                    <span>
                        <form>
                          <label><input type="number" name="amount" placeholder='Enter amount in USD to deposit' maxLength={"10000000"} minLength={"1000"} required/></label>
                          
                          <label><input type="text" name="walletaddress" placeholder="Enter Wallet Address" required/></label>
                          <Select
                              placeholder="Choose Crypto Coin for Deposit"
                              defaultValue={selectCoin}
                              onChange={setSelectedCoin}
                              options={optionCrypto}
                          />
                           <p>* Make sure the wallet address is in sync with the chosen cryptocoin</p>
                          <p>* Deposited amount can not be less than $1000</p>
                          <p>* After deposit, your accounnt will be updated within few hours to a month</p>
                          <button>Deposit</button>
                        </form>  
                      </span>           
                  </div>
      </section>
      
    </DepositContainer>
  )
}


const DepositContainer = styled.div`
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