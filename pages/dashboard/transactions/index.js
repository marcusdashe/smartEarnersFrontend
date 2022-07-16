import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

import TransactionCard from './transactionCard'

const data = [
  {
    id: 1,
    category: "deposit",
    amount: "463",
    status: "successful",
    date: Date,
    transactionCurrency: "USD"
  },

  {
    id: 2,
    category: "withdrawal",
    amount: "1271",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  },

  {
    id: 3,
    category: "transfer",
    amount: "936",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  },
  {
    id: 4,
    category: "deposit",
    amount: "911",
    status: "successful",
    date: Date,
    transactionCurrency: "USD"
  },

  {
    id: 5,
    category: "withdrawal",
    amount: "928",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  },

  {
    id: 6,
    category: "transfer",
    amount: "238",
    status: "successful",
    date: Date,
    transactionCurrency: "SEC"
  }
]

const transactionCategories = [
  { value: 'all', label: 'All' },
  { value: 'deposit', label: 'Deposits' },
  { value: 'transfer', label: 'Transfers' },
  { value: 'withdrawal', label: 'Withdrawals' },
]

export default function Index() {

  const [category, setCategory ] = useState({ value: 'all', label: 'All' })

  // useEffect(()=> {
  //   setCategory(category)
  // },[category])
  return (
    <TransactionContainer>
       <section className="central-column">
        <div className="container">
                <h3>Transaction</h3>
                <span>
                      <Select
                          autoFocus
                          placeholder="Choose category"
                          defaultValue={category}
                          // value={category}
                          onChange={setCategory}
                          options={ transactionCategories }
                        />
                </span>
        </div>
       </section>
       <section className="central-column">
        <div className="container">

            { category.value === "all"? data.map(each => (
                <TransactionCard key={each.id} datum={each}/>
            )) : data.filter(each =>  each.category === category.value ).map(each => (
                <TransactionCard key={each.id} datum={each}/>
            )) }
        </div>
       </section>
    </TransactionContainer>
  )
}

const TransactionContainer = styled.div`
        width: 100%;
        height: fit-content;
        margin: 0px;
        /* background: #00415d30; */
        color: #00415d;
        border: 2px solid transparent;

        .central-column{
            width: 60%;
            height: fit-content;
            max-height: 200vh;
            background: whitesmoke;
            margin: 50px auto 0px;
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
                  }
            }
        }

        .central-column:nth-child(2){
          margin: 0px auto 30px;
        }
`
