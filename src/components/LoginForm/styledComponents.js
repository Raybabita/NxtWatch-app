import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
`

export const FormContainer = styled.div`
  display: flex;
  box-shadow: 0px 4px 8px 0px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding-top: 30px;
  width:35%;
  max-width:400px
  min-width: 350px;
  @media screen and (max-width: 768px) {
    min-width: 350px;
  }
`

export const LogoImage = styled.img`
  height: 40px;
  width: 100px;
`

export const FormPage = styled.form`
  display: flex;
  width: 100%;
  padding: 20px;
  margin: 40px;
  flex-direction: column;
`

export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  outline: none;
  color: #1e293b;
  line-height: 2;
  padding-left: 8px;
  border: 1px solid #cbd5e1;
  margin-bottom: 20px;
  font-family: 'Robot';
  :focus {
    border-color: #13e7eb;
    background-color: #d7f9fa;
  }

  font-size: 12px;
`

export const PasswordInput = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  outline: none;
  color: #1e293b;
  line-height: 2;
  padding-left: 8px;
  border: 1px solid #cbd5e1;
  margin-bottom: 20px;
  :focus {
    border-color: #13e7eb;
    background-color: #d7f9fa;
  }

  font-family: 'Robot';
  font-size: 12px;
`

export const UserLabel = styled.label`
  font-size: 12px;
  font-family: 'Robot';
  margin-bottom: 5px;
  color: #475569;
  cursor: pointer;
`
export const PasswordLabel = styled.label`
  font-size: 12px;
  font-family: 'Robot';
  margin-bottom: 5px;
  color: #475569;
  cursor: pointer;
`

export const SubmitButton = styled.button`
  font-size: 14px;
  outline: none;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  outline: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
`
export const CheckboxInput = styled.input`
  height: 15px;
  cursor: pointer;
  width: 15px;
  :focus {
    border-color: #13e7eb;
    background-color: #d7f9fa;
  }
`
export const ShowpasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  margin-bottom: 15px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 12px;
  font-family: 'Robot';
  margin-bottom: 5px;
  cursor: pointer;
  margin-top: 5px;
`

export const ErrorMsgParagraph = styled.p`
  font-size: 12px;
  font-family: 'Robot';
  margin-top: 5px;
  margin-bottom: 5px;
  color: #ff0b37;
  margin-top: 5px;
`
