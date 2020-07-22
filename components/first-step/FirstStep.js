import React from 'react';

import {Form, Item, Input, Text} from 'native-base';

export default function FirstStep(props) {

    return (
        <Form>
            <Item>
                <Input placeholder="Email"
                       autoCompleteType={'email'}
                       textContentType={'emailAddress'}
                       value={props.firstStep.email}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           email: text,
                       })}
                />
            </Item>
            {props.error.emailError?
                <Text style={{color: 'red'}}>Invalid Email!</Text>
                :
                <></>
            }
            <Item>
                <Input placeholder="Username"
                       autoCompleteType={'username'}
                       maxLength={15}
                       textContentType={'username'}
                       value={props.firstStep.username}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           username: text,
                       })}
                />
            </Item>
            {props.error.usernameError?
                <Text style={{color: 'red'}}>Username should have at least 4 characters!</Text>
                :
                <></>
            }
            <Item>
                <Input placeholder="Password"
                       secureTextEntry
                       autoCompleteType={'password'}
                       textContentType={'password'}
                       value={props.firstStep.password}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           password: text,
                       })}
                />
            </Item>
            {props.error.passwordLength?
                <Text style={{color: 'red'}}>Password must have at least 4 characters!</Text>
                :
                <></>
            }
            <Item>
                <Input placeholder="Repeat Password"
                       secureTextEntry
                       autoCompleteType={'password'}
                       textContentType={'password'}
                       value={props.firstStep.repeat}
                       onChangeText={text => props.setFirstStep({
                           ...props.firstStep,
                           repeat: text,
                       })}
                />
            </Item>
            {props.error.passwordEquals?
                <Text style={{color: 'red'}}>Password not matching!</Text>
                :
                <></>
            }
        </Form>
    );
}

