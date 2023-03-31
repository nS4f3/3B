import React from "react";
import { Container,Form, Manuel, FormInner, Label, Input, Button} from "./styles/login";

export default function Login({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Login.Label = function LoginLabel({children,...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

Login.Input = function LoginInput({onChanged,...restProps}){
    return <Input onChange={onChanged} {...restProps}/>
}

Login.Button = function LoginButton({children,onPress,disabled,...restProps}) {
    return <Button  disabled={disabled} onClick={onPress} {...restProps}>{children}</Button>
}

Login.FormInner = function LoginFormInner({children, ...restProps}){
    return <FormInner {...restProps}> {children}
    </FormInner>
}

Login.Form = function LoginForm({ children,...restProps }) {
  return <Form {...restProps}>
   {children}
  </Form>;
};

Login.Manuel = function LoginManuel({children, ...restProps}){
    return <Manuel {...restProps}>{children}</Manuel>
}
