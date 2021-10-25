import React from 'react'
import 'bulma/css/bulma.min.css';
import 'react-bulma-components'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import emailjs, { send } from 'emailjs-com';

const InputBtn = styled.button`
    background: #08313A;
    color: white;
    margin-top: 20px;

    &:hover {
        color: #08313A;
        background: white;
        border-color: #08313A;
        border-width: 2px;
        box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
    }
`

const Input = styled.input`
  color: #08313A;
  background-color: #eff6fc;
  border-width: 1.5px;
  border-color: transparent;

  &:hover {
    border-color: #7CB7AF;
    border-width: 2px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  }
`
const Textarea = styled.textarea`
  color: #08313A;
  background-color: #eff6fc;
  border-width: 1.5px;
  border-color: transparent;

  &:hover {
    border-color: #7CB7AF;
    border-width: 2px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
  }
`
const Div = styled.div`
    @media (max-width: 768px) { 
        // padding: 3rem 1.5rem;
    }
`
const Section = styled.section`
    padding: 0rem 1.5rem;
`
export const Contact = () => {
    const formRef = React.useRef()
    const [toSend, setToSend] = React.useState({
        fullname: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })
    const [isSent, setIsSent] = React.useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault();

        let templateParams = {
            fullname: toSend.fullname,
            company: toSend.company,
            email: toSend.email,
            phone: toSend.phone,
            subject: toSend.subject,
            message: toSend.message,
        }
        send(
            'service_kjgi7co', 
            'template_jiik8c7',
            templateParams,
            'user_tbbezz2rmbnW2ZkvAoygK'
        ).then((response) => {
            console.log("EMAIL SUCCESSFUL", response.status, response.text);
            if (response.status == 200 || response.text == "OK") {
                setIsSent(true)
                setTimeout(() => {
                    setToSend({
                        fullname: '',
                        company: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                    })
                }, 3000);
            }
        }).catch((error) => {
            console.log("EMAIL FAILED", error);
            setIsSent(false)
        });
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }


    return (
        <>
            <Section className="form is-paddingless-horizontal">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <Div className="content">
                                    <form onSubmit={handleSubmit}>
                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                            <div className="field">
                                                <Input 
                                                    className="input" 
                                                    type="text" 
                                                    placeholder="Fullname*" 
                                                    name="fullname"
                                                    value={toSend.fullname} 
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="field">
                                                <Input 
                                                    className="input" 
                                                    type="text" 
                                                    placeholder="Organisation / Company" 
                                                    name="company"
                                                    value={toSend.company}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                            <div className="field">
                                                <Input 
                                                    className="input" 
                                                    type="text" 
                                                    placeholder="Phone*" 
                                                    name="phone"
                                                    value={toSend.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="field">
                                                <Input 
                                                    className="input" 
                                                    type="email" 
                                                    placeholder="Email" 
                                                    name="email"
                                                    value={toSend.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                            <div className="field">
                                                <Input 
                                                    className="input input-shadow grey-darker" 
                                                    type="text" 
                                                    placeholder="Subject*" 
                                                    name="subject"
                                                    value={toSend.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                            <div className="field">
                                                <div className="control">
                                                    <Textarea 
                                                        className="textarea $input-shadow grey-darker" 
                                                        placeholder="Details*" 
                                                        name="message"
                                                        value={toSend.message}
                                                        onChange={handleChange}></Textarea>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="field is-horizontal">
                                            <div className="field-body">
                                            <div className="field">
                                                <div className="control">
                                                <InputBtn className="button is-fullwidth" type="submit">
                                                    Send message
                                                </InputBtn>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        {isSent == true 
                                            ? (<div className="field is-horizontal">
                                                <div className="field-body">
                                                <div className="field">
                                                    <div className="control">
                                                    <InputBtn className="button is-fullwidth has-background-success is-success">
                                                        Email sent Succefully! Our Admin Team will reach out to you soonest.
                                                    </InputBtn>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>)
                                            : null
                                        }
                                    </form>
                                </Div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Contact