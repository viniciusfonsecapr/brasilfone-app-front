import React from 'react'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useUser } from '../../hooks/UserContext'
import apiBrasilFone from "../../services/api";
import { Link } from 'react-router-dom'





import Logo from '../../assets/marca-disparopro.svg'
import Background2 from '../../assets/background2.png'
import Icon from '../../assets/icon-eye.png'

import { Container, ContainerBackgrounds, ContainerItems, H1, Label, Input, Button, SignUp, SignUpText } from './styles'


function Login() {

  const {putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string().email("Digite um E-mail válido").required("O E-mail é obrigatorio"),
    password: Yup.string("Digite uma senha válida").required("A Senha é Obrigatoria").min(6,"A senha deve ter pelo menos 6 digitos"),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      apiBrasilFone.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),{
        success: 'Seja bem vindo',
        error: 'Verique email e senha'
      }

    )
   
    putUserData(data)
   
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
          <Label error={errors.email?.message}>E-mail ou Celular </Label>
          <Input type="email"  {...register("email")} error={errors.email?.message}></Input>
          
          <Label error={errors.email?.message}>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} ></Input>
          <span className="icon"><img src={Icon} alt="icon-eye"></img></span>
          <div>
            <p>{errors.email?.message }</p><p>{errors.password?.message}</p>
          </div>
      
          <Button type="submit">Conectar</Button>
          
          <SignUp><Link to="/register">Ainda não é cliente Disparo Pro?</Link></SignUp>
          <SignUpText > <Link to="/register">Criar Conta</Link></SignUpText>
          </form>
       
      </ContainerItems>
   
    </Container>
  );
}

export default Login;
