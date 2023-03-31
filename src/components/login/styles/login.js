import styled from 'styled-components/macro';

export const Container = styled.div`
display:flex;
border: 1px solid #dee2e6;
@media(max-width: 1000px) {
    flex-direction: column;
}
`;

export const Form = styled.div`
flex:2;
display:flex;
flex-direction: column;
align-items: center;
padding:1rem;
@media(max-width: 1000px) {
    flex:1;
}
`;

export const FormInner = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: space-between;
`;

export const Manuel = styled.div`
display: flex;
flex-direction: column;
align-items: left;
padding-left: 30px;
padding-right: 30px;  
margin: 0.5rem;
border-left: 1px solid lightgray;
flex:3;

@media(max-width:1000px) {
    align-items: center;
    border:none;
    margin: 0;
    flex:1;
    
}
`;

export const Label = styled.p``;

export const Input = styled.input`
width:50%;`;

export const Button = styled.button`
flex:0.5;
`;
