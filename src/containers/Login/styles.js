import styled from "styled-components";

import Background from "../../assets/background.png";

export const Container = styled.div`
  background-color: #e5e5e5;
  max-height: 1080px;
`;

export const ContainerBackgrounds = styled.div`
  display: inline-block;
  background: url("${Background}");
  max-height: 1080px;
  background-repeat: no-repeat;

  #logo {
    margin-top: 18px;
    margin-left: 84px;
  }
  #background2 {
    margin-top: 46px;
    margin-left: 179px;
  }
`;

export const ContainerItems = styled.div`
  display: inline-block;
  position: absolute;
  top: 293px;
  width: 416px;
  height: 520px;
  background: #e5e5e5;
  box-shadow: 3px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin: 0 275px 279px 145px;

  .errorInput {
    margin-top:-10px;
    width: 320px;
    height: 50px;

    background: rgba(235, 60, 75, 0.15);
    border: 1px solid #e60b1e;
    border: none;
    border-radius: 6px;

   

    #containerError {
      position: absolute;
      margin: 8px 0 8px 8px;
      width: 2px;
      height: 34px;
      background: rgba(235, 60, 75, 0.7);
    }

    img {
      position: absolute;
      margin: 15px 0 15px 16px;
      
    } 
    p {
      position: absolute;
      margin: 20px 0 17px 44px;
      color: rgba(235, 60, 75, 0.7);
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
    }
  }
  span {
    position: absolute;
    left: 81.93%;
    right: 17.24%;
    top: 49.22%;
    bottom: 49.77%;

    img {
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
  form {
    div {
      margin-left: 45px;
      margin-top: 10px;
      width: 320px;
      height: 50px;

      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: rgba(235, 60, 75, 0.7);
    }
  }
`;

export const H1 = styled.p`
  padding-top: 65px;
  padding-bottom: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #123d68;
`;

export const Label = styled.label`
  display: block;
  margin: 16px 48px 3px 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.error ? "#CC1717" : "#123d68")};
`;
export const Input = styled.input`
  margin: 0 48px 0 48px;
  padding-left: 8px;
  font-size: 16px;
  width: 320px;
  height: 40px;
  background: #ffffff;
  border: ${(props) =>
    props.error  ? "2px solid #CC1717" : "1px solid #3D454C;"};
  border-radius: 6px;
  outline: none;
`;


export const Button = styled.button`
  display: block;
  width: 240px;
  height: 50px;
  border-radius: 6px;
  border: none;
  background: linear-gradient(
    156.07deg,
    rgba(58, 163, 245, 0.86) -10.81%,
    #123d68 84.63%
  );
  border-radius: 6px;
  text-align: center;
  margin: 25px 88px 0 88px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &::before {
    opacity: 0.9;
  }
`;

export const SignUp = styled.p`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #3d454c;
  margin-top: 16px;
  text-decoration: none;

  a {
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #3d454c;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const SignUpText = styled.p`
  margin-top: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #2a5178;
  text-decoration: none;

  a {
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-decoration-line: none;

    color: #2a5178;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
