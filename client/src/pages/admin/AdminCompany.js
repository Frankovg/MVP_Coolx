import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";


export const AdminCompany = ({ onHide, show, allUsers, projectModal, resetProjects, setResetProjects, setModalBuyer }) => {

    const handleCompany = (usuario, projectModal) => {
        console.log(projectModal.project_id)
        console.log(usuario.user_id)

    axios
      .put(`http://localhost:4000/project/changeUser/${projectModal.project_id}/${usuario.user_id}`)

      .then((res) => {
        // console.log(res);
        setResetProjects(!resetProjects);
        setModalBuyer(false);


      })

      .catch((err) => {console.log(err)});
    }


  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {"Empresas"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
        <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empresa</th>
                </tr>
              </thead>

              <tbody>
                {allUsers &&
                  allUsers.map((usuario, index) => (
                    <tr key={usuario.user_id}>
                      <td>{index + 1}</td>
                      <td>{usuario.company}</td>
                      <td>
                        <Button onClick={()=> {
                            handleCompany(usuario, projectModal)      
                        }
                        }>Asignar empresa</Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};