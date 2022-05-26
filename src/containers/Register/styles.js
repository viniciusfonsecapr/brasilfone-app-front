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
  top: 142px;
  width: 416px;
  height: 781px;
  background: #e5e5e5;
  box-shadow: 3px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin: 0 275px 279px 269px;

  span {
    position: absolute;
    left: 344px;
    top: 254px;
    bottom: 273px;
    right: 56px;

    img {
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;

export const H1 = styled.p`
  padding-top: ${(props) =>
    props.error ? "58px" : "18px"};
  padding-bottom: ${(props) =>
    props.error ? "32px" : "15px"};
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) =>
    props.error ? "26px" : "20px"};
  line-height: 30px;
  text-align: center;
  color: #123d68;
`;

export const Label = styled.label`
  display: block;
  margin: 0px 48px 8px 48px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #123d68;
`;
export const Input = styled.input`
  margin: 0 48px 0 48px;
  padding-left: 5px;
  width: 320px;
  height: 40px;
  background: #ffffff;
  border: ${(props) =>
    props.error ? "2px solid #CC1717;" : "1px solid #3D454C"};
  border-radius: 6px;
`;

export const ErrorMessage = styled.p`
  margin-left: 48px;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 6px;
`;
export const InputTerms = styled.input`
  cursor: pointer;
  margin-top: 15px;
  margin-left: 48px;
`;
export const PolicyPrivacy = styled.p`
  cursor: pointer;
  margin-bottom: 5px;
  margin-left: 70px;
  margin-top: -15px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #3d454c;
`;

export const TextOffer = styled.p`
  margin: 18px 48px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #3d454c;
`;

export const InputOffer1 = styled.input`
  cursor: pointer;
  margin-left: 140px;
`;
export const InputOffer2 = styled.input`
  cursor: pointer;
  margin-left: 15px;
`;
export const LabelRadio = styled.label`
  cursor: pointer;
  margin-left: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #123d68;
`;

export const Button = styled.button`
  display: block;
  width: 240px;
  height: 50px;
  border-radius: 6px;
  border: none;
  margin-top: 27px;
  background: linear-gradient(
    156.07deg,
    rgba(58, 163, 245, 0.86) -10.81%,
    #123d68 84.63%
  );
  border-radius: 6px;
  text-align: center;
  margin: 27px 88px 0 88px;
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

export const SignIn = styled.p`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #3d454c;
  margin-top: 32px;
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

export const SignInText = styled.p`
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
