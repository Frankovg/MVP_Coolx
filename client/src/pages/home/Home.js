import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { NavBarProject } from '../../components/navBar/NavBarProject'
import "./home.scss"


export const Home = () => {
  return (
    <>
    <Container fluid>
      <Row >
        <Col md={12} lg={12} xs={12} className='fondo-home' >

          <div className='texto'>
            <p>Optimizamos el registro y la evaluación de tus proyectos forestales</p>

            <button>Contáctanos</button>

              <div className='leerMas'>
                  <p>Leer más</p>
                  <img src='/assets/icons/arrow.svg' alt='arrow_down'/>
              </div>

          </div>
        </Col>
      </Row>

      <Row className="fondoRegProject">
        
        <div className='fondoBlur'>

        <Col md={12} className ="p-0" >
          <NavBarProject/>
        </Col>

        <Col className='info'>

            <Col md={12} className="topInfo text-white">

              <img src='/assets/icons/info_top.svg'/>

              <p>Mediante teledetección y big data, disminuimos el tiempo necesario para que tu consultoría medioambiental genere créditos de carbono</p>

            </Col>

            <Col md={12} className="bottomInfo text-white">

            
              <p>Esta tecnología nos permite hacer estimaciones más precisas y constantes, generando confianza en cada crédito de carbono</p>

              <img src='/assets/icons/info_bottom.svg'/>
            
            </Col>
        
        </Col>
        </div>
      </Row>

      <Row className='bloqueProceso'>
      <Col md={12} >

        <div className='titulo'>
          <h1>¿Como será el proceso?</h1>
        </div>
      
      </Col>
      </Row>

      <Row className='iconsProceso p-0'>

      <Col md={4} className ="addProject px-5">

        <img  src="/assets/icons/add_project_color.svg"/>

        <h4>Añade los proyectos</h4>

        <p>Localiza tu proyecto forestal o elige los proyectos que  necesitan un desarrollador de nuestra plataforma</p>

      </Col>

      <Col md={4} className ="satelite px-5">

        <img  src="/assets/icons/satelite.svg"/>

        <h4>Obtenemos datos relevantes</h4>

        <p>Procesamos dichos datos para que puedas utilizarlos de forma rápida y sencilla para generar créditos de carbono</p>

      </Col>

      <Col md={4} className ="carbono px-5">

        <img  src="/assets/icons/co2_color.svg"/>

        <h4>Consigue créditos de carbono</h4>

        <p>Tus créditos serán verificados por los mejores estándares y monitoreados constantemente, facilitando así su venta</p>

      </Col>

      </Row>

      <Row className='bloqueGarantizar'>
      <div className='fondoBlur'>

      <Col md={12} >

        <div className='titulo'>
          <h1>Garantizamos</h1>
        </div>
      </Col>
      

      <Row className='iconsGarantizar p-0 mx-2'>
     
        <Col md={4} className="vision px-5">
          <img src='/assets/icons/visibility_white.svg' />

          <h4>Viabilidad de tu proyecto</h4>

          <p>Mediante Bigdata e IA conseguiremos saber si tu proyecto será exitoso</p>
        </Col>

        <Col md={4} className="sencillex px-5">
          <img src='/assets/icons/easy_white.svg' />

          <h4>Sencillez</h4>
          
          <p>Garantizamos la máxima facilidad en la tediosa tarea de presentación de documentos</p>
        </Col>

        <Col md={4} className="medidas px-5">
          <img src='/assets/icons/measurement_white.svg' />

          <h4>Métodos de medición digitales</h4>
          
          <p>Mediante tecnología satelital realizaremos un seguimiento de tu proyecto con exactitud y rapidez</p>
        </Col>

        <div className='button'>
          <Button className='boton'>¿Hablamos?</Button>
        </div>
       
      </Row>
      </div>
      </Row>

      <Row className='bloqueColabs'>

      <Col md={12}>
        <h4>Respaldados y colaborando con</h4>
      </Col>

      <Col md={2}>
      <img src='/assets/colabs/verra.svg'/>
      </Col>
      <Col md={2}>
      <img src='/assets/colabs/gold_standard.svg'/>
      </Col>
      <Col md={2}>
      <img src='/assets/colabs/aenor.svg'/>
      </Col>
      <Col md={2}>
      <img src='/assets/colabs/miteco.svg'/>
      </Col>
      <Col md={2}>
      <img src='/assets/colabs/demium.svg'/>
      </Col>
      <Col md={2}>
      <img src='/assets/colabs/university.svg'/>
      </Col>

      </Row>

      <Row className='footer'>

      <Col md={4} className="footer_logo">
        <img src='/assets/branding/logo_white.svg'/>
        <p>Enviromental Services</p>
      </Col>

      <Col md={4} className="footer_contacto">
        <h4>Contacta con nosotros</h4>
       
          <div className='mail'>
            <img src="/assets/icons/mail.svg"/>
            <p>coolx.earth@gmail.com</p>
          </div>

          <div className='mail'>
            <img src="/assets/icons/call.svg"/>
            <p>+ 34 3478543874</p>
          </div>
  
      </Col>

      <Col md={4} className="footer_rrss">

        <div>
          <img src='/assets/social/instagram.svg'/>
          <img src='/assets/social/linkedIn.svg'/>
        </div>
        
      </Col>
      <Row className='legacy'>

        <div className='legal'>
          <p>© COPYRIGHT 2022 COOLX </p>
          <p>|</p>
          <p>TERMS AND CONDITIONS</p>
          <p>|</p>
          <p>PRIVACYPOLICY</p>
        </div>
      </Row>

       


      </Row>

    </Container>
      
    </>
  )
}
