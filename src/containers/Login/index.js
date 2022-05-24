import React, { useState } from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext'
import apiBrasilFone from "../../services/api";
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';





import Logo from '../../assets/marca-disparopro.svg'
import Background2 from '../../assets/background2.png'
import Error from '../../assets/error.png'

import { Container, ContainerBackgrounds, ContainerItems, H1, Label, Input, Button, SignUp, SignUpText } from './styles'



function Login() {

  const { putUserData } = useUser()

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um E-mail válido").required("O E-mail é Obrigatorio"),
    password: Yup.string("Digite uma senha válida").required("A Senha é Obrigatoria").min(6, "A senha deve ter pelo menos 6 digitos"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const [loginFail, setLoginFail] = useState(false)
  const onSubmit = async clientData => {
    try {
      const { data } = await apiBrasilFone.post('sessions', {
        email: clientData.email,
        password: clientData.password
      })
      toast.success('Login Efetuado')
      putUserData(data)

    }
    catch (e) {
      console.log(e)
      setLoginFail(true)

    }
  }


  return (
    <Container>
      <ContainerBackgrounds>
        <img id="logo" src={Logo} alt="background"></img><br></br>
        <img id="background2" src={Background2} alt="background2"></img>
      </ContainerBackgrounds>

      <ContainerItems>
        <H1>Login</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label error={loginFail}>E-mail ou Celular </Label>
          <Input type="email"  {...register("email")} error={errors.email?.message || loginFail}></Input>

          <Label error={loginFail}>Senha</Label>
          <Input {...register("password")}
           type={values.showPassword ? "text" : "password"}
           onChange={handlePasswordChange("password")}
           value={values.password}
           error={errors.password?.message || loginFail} ></Input>
           <InputAdornment>
               <IconButton position="absolute" style={{marginLeft:280, marginBottom:85}}
                 onClick={handleClickShowPassword}
                 onMouseDown={handleMouseDownPassword}
               >
                 {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
               </IconButton>
             </InputAdornment>
          

          {loginFail &&
            <div className='errorInput'>
              <div id='containerError'></div>
              <img src={Error} alt="icon-error"></img>
              <p>Usuário ou senha incorreta, tente novamente.</p>
            </div>
          }
          <Button type="submit">Conectar</Button>

          <SignUp><Link to="/register">Ainda não é cliente Disparo Pro?</Link></SignUp>
          <SignUpText > <Link to="/register">Criar Conta</Link></SignUpText>
        </form>

      </ContainerItems>

    </Container>
  );
}

export default Login;
