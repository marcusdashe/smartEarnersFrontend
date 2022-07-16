import styled from 'styled-components'


export const ProfileContainer = styled.div`
        width: 100%;
        height: 100vh;
        margin: 0px;
        /* background: #00415d30; */
        color: #00415d;
        border: 2px solid transparent;
        

        .central-column{
            width: 60%;
            height: 27vh;
            background: whitesmoke;
            margin: 50px auto;
            border-radius: 4px;

            .user-bio{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .user-avatar{
                    width: 7rem;
                    height: 7rem;
                    border-radius: 100%;
                    border: 2px solid gray;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: var(--major-color-purest);
                    color: white;
                    font-size: 2rem;
                    font-weight: 400;
                    margin-left: -60px;    
                    /* flex: 1;                 */
                }

                .user-info{
                    flex: 1;
                    font-size: 1.5rem;
                    justify-content: space-between ;
                    height: 100% ;
                    padding: 40px 70px;
                    .full-name-acc-num{
                        display: flex;
                        font-size: 1rem;
                        flex-flow: column nowrap;
                    }
                }
            }
        }

        .central-column-second{
                width: 100%;
                height: 27vh;
                background: whitesmoke;
                margin: 10px auto;
                border-radius: 4px;
                /* padding: 40px; */
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

        .central-column-third{
                width: 100%;
                height: 25vh;
                background: whitesmoke;
                margin: 10px auto;
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
        

`