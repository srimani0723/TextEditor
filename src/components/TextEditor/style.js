import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10% 8%;
  background-color: #25262c;
  height: 100vh;
  @media screen and (max-width: 576px) {
    padding: 20px;
  }
`
export const Box = styled.div`
  background-color: #1b1c22;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  padding: 20px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    height: 100%;
  }
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-weight: 500;
  font-size: 27px;
  font-family: 'Roboto';
  margin-top: 20px;
`

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 100%;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 50%;
  }
`

export const Image = styled.img`
  width: 90%;
  margin-top: 25%;
  @media screen and (max-width: 576px) {
    width: 50%;
    margin: 10px;
  }
`

export const EditorBox = styled.div`
  border: 1px solid #334155;
  background-color: #25262c;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`
export const TextEditArea = styled.textarea`
  background-color: #25262c;
  border: 0px;
  height: 90%;
  width: 100%;
  outline: none;
  cursor: pointer;
  color: #f1f5f9;
  padding: 25px;
  font-size: 22px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-family: 'Roboto';
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};

  @media screen and (max-width: 576px) {
    height: 80%;
  }
`
export const ButtonsArea = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  margin: 0px;
  border-bottom: 1px solid #334155;
`

export const List = styled.li`
  list-style: none;
  padding: 0px;
  margin: 0px;
`

export const Button = styled.button`
  border: 0px;
  background-color: transparent;
  border: 0px;
  outline: none;
  cursor: pointer;
  color: ${props => props.color};
`
