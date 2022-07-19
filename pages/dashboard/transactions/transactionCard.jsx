import React, { useEffect } from 'react'
import styled from 'styled-components'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import PlayForWorkIcon from '@mui/icons-material/PlayForWork';
import { DateTime } from 'luxon'
import StyledDashboardHeader from '../../../components/user/dashboardHeader'


const TransactionCard = ( { datum }) => {

  return (
    
    <StyledTransactionCard>
            
            <main>
                <aside className='left'>
                        <section>
                            <em>{ datum.category === "transfer" ? <PublishedWithChangesIcon /> : datum.category === "withdrawal" ? <CallReceivedIcon /> : <PlayForWorkIcon /> }</em>
                            <span>
                                <p>
                                    <h4>{datum.category.charAt(0).toUpperCase()+datum.category.slice(1)}</h4>
                                    <time>
                                        {DateTime.fromSeconds(datum.date.now()).toLocaleString({ day: '2-digit', month: '2-digit', year: 'numeric' }) }
                                        {/* toLocaleString({ day: '2-digit', month: '2-digit', year: 'numeric' }) */}
                                    </time>
                                </p>

                            </span>
                        </section>
                </aside>

                <aside className='right'>
                    <span>
                        <small>{datum.status.charAt(0).toUpperCase()+datum.status.slice(1)}</small>
                        <p>{datum.category == "deposit" ? `+${datum.amount}` : `-${datum.amount}`}</p>
                    </span>
                </aside>
            </main>
            
    </StyledTransactionCard>
  )
}

const StyledTransactionCard = styled.div`

        
        width: 100%;
        height: 100px;
        margin: 10px;
        border-bottom: 2px solid var(--gray-color);
        padding-top: 15px;

        main {
            display: flex;
            align-items: center ;
            justify-content: space-between;
            
            .left section{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: fit-content;
                

                span p{
                    display: flex;
                    justify-content: center;
                    align-items: flex-start ;
                    flex-flow: column nowrap;
                    h4 {
                        font-size: 1.2rem;
                        margin: 0 7px 7px;
                    }

                    time {
                        color: var(--gray-color);
                    }
                }
            }

            .right span {
                display: flex;
                flex-flow: column nowrap;
                align-items: flex-end;

                p {
                    font-size: 1.2rem;
                    font-weight: bolder;
                }
            }
        }
`

export default TransactionCard