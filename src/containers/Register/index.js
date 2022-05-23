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

import { Container ,ContainerBackgrounds, ContainerItems, H1, Label, Input,InputTerms , PolicyPrivacy, TextOffer , InputOffer1 , InputOffer2, LabelRadio ,Button, SignIn, ErrorMessage , SignInText } from './styles'



function Register() {

  const {putUserData } = useUser()

  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatorio"),
    email: Yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatorio"),
    number: Yup.string().required('Número obrigatorio').min(8,'Telefone precisa ter no mínimo 9 caracteres'),
    password: Yup.string("Digite uma senha válida").required("A Senha é obrigatoria").min(6,"A senha deve ter pelo menos 6 digitos"),
    confirmPassword: Yup.string("Digite uma senha válida").required("A Senha é obrigatoria").oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      apiBrasilFone.post('users', {
        name: clientData.name,
        email: clientData.email,
        number: clientData.number,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja vindo(a)',
        error: 'Verifique seu email e senha🤯'
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
    
        <div>
          <H1>Cadastre-se</H1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
          <Input type="text"  {...register("name")} error={errors.name?.message}></Input>
          <ErrorMessage>{errors.name?.message}</ErrorMessage>


          <Label>E-mail</Label>
          <Input type="email"  {...register("email")} error={errors.email?.message}></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

         
          <Label>Número</Label>
          <Input type="tel"  {...register("number")} error={errors.number?.message}></Input>
          <ErrorMessage>{errors.number?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input type="password" {...register("password")} error={errors.password?.message} ></Input>
     
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label>Repetir Senha</Label>
          <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
          
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <InputTerms type="radio"></InputTerms>
          <PolicyPrivacy>Eu li e aceito a politica de privacidade da Disparo Pro</PolicyPrivacy>

          <TextOffer>Quero receber ofertas,novidades, conteúdos informativos e publicitários da Disparo Pro</TextOffer>
          <InputOffer1 type="radio"></InputOffer1><LabelRadio>Sim</LabelRadio>
          
          <InputOffer2 type="radio"></InputOffer2><LabelRadio>Não</LabelRadio>
          
          

          <Button type="submit">Cadastrar</Button>
          </form>
          <SignIn><Link to="/login">Já é cliente Disparo Pro?</Link></SignIn>
          <SignInText > <Link to="/login">Fazer Login</Link></SignInText>
        </div>

      </ContainerItems>
    </Container>
  );
}

export default Register;
