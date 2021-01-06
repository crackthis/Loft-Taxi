import React, {Component} from "react";
import {connect} from "react-redux";
import {logOut, saveCard} from "../../actions";
import {HeaderWithAuth} from "../../components/header/header";
import styled from "styled-components";
import {Input} from "../../components/input/input";
import Logo from "../../shares/content/Logo.png";
import Chip from "../../shares/content/Chip.png";
import {logo, picItem, chip, row, cardnum, carddate} from "./Profile.module.css";
import {Button} from "../../components/button/button";

const Title = styled.h1``

const Subtitle = styled.div`
    color: #7B7B7B;
    margin-bottom: 51px;
`

const Form = styled.form`
    width: 100%;
    max-width: 888px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin: 0 auto;
    align-self: center
`

const ProfileInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const FormCol = styled.div``

const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
`

const Card = styled.div`
    width: 347px;
    height: 182px;
    padding: 18px 16px 17px 28px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    justify-content: space-between;
`


export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {cardNum: "", characterCount: 0, cardDate: ""};
    }

    cardnumEnter = (e) => {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
            let newValue = e.target.value.replace(/\D/g, "");
            newValue = newValue.replace(/(.{4})/g, "$1 ");
            e.target.value = newValue;
            this.setState({ cardNum: e.target.value });
        }
        if(e.keyCode === 8) {
            this.setState({ cardNum: e.target.value });
        }
    }

    cardDateEnter = (e) => {
        const $this = e.target;
        if($this.value.length === 2 && this.state.characterCount < $this.value.length) {
            $this.value = $this.value + "/";
        }
        this.setState({cardDate: $this.value});
        this.setState({characterCount: $this.value.length});
    }

    saveCard = async (event) => {
        event.preventDefault();
        const { cardNumber, expiryDate, cardName, cvc } = event.target;
        const authToken = localStorage.token;
        await this.props.saveCard(cardNumber.value, expiryDate.value, cardName.value, cvc.value, authToken);
    }


    render() {

        return <>
            <HeaderWithAuth />
            <Form onSubmit={this.saveCard}>
                <Title>Профиль</Title>
                <Subtitle>Введите платежные данные</Subtitle>
                <ProfileInfo>
                    <FormCol>
                        <FormRow>
                            <Input
                                forWhat="name"
                                labelName="Имя владельца"
                                id="cardName"
                                inputWidth="355px"
                                typeAttr="name"
                                inputName="name"
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                forWhat="cardNumber"
                                labelName="Номер карты"
                                id="cardNumber"
                                inputWidth="355px"
                                typeAttr="cardnumber"
                                inputName="cardnumber"
                                onKeyUp={this.cardnumEnter}
                                maxLength="19"
                            />
                        </FormRow>
                        <FormRow>
                            <div className="date">
                                <Input
                                    forWhat="expiryDate"
                                    labelName="MM/YY"
                                    id="expiryDate"
                                    inputWidth="160px"
                                    typeAttr="text"
                                    inputName="date"
                                    maxLength="5"
                                    onChange={this.cardDateEnter}
                                />
                            </div>
                            <Input
                                forWhat="cvc"
                                labelName="CVC"
                                id="cvc"
                                inputWidth="160px"
                                typeAttr="cvc"
                                inputName="cvc"
                                maxLength="3"
                            />
                        </FormRow>
                    </FormCol>
                    <FormCol>
                        <Card>
                            <div className={row}>
                                <div className={logo}>
                                    <img src={Logo} alt="Logo" className={picItem} />
                                </div>
                                <div className={carddate}>{this.state.cardDate}</div>
                            </div>
                            <div className={row}>
                                <div className={cardnum}>{this.state.cardNum}</div>
                            </div>
                            <div className={row}>
                                <div className={chip}>
                                    <img src={Chip} alt="chip" className={picItem} />
                                </div>
                            </div>
                        </Card>
                    </FormCol>
                </ProfileInfo>
                <div className="enter">
                    <Button name="Сохранить" typeAttr="submit" />
                </div>
            </Form>
            </>
    }
}

export const ProfileWithAuth = connect(
    null,
    {logOut, saveCard}
)(Profile);