import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "../Component/Message";
import { FiTrash, FiEdit } from "react-icons/fi";
import {
  Row,
  Col,
  Container,
  ListGroup,
  Button,
  Table,
  Image,
  Form,
} from "react-bootstrap";
import {
  CRow,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CCardBody,
  CFormSelect,
  CCard,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CAlert,
  CModalTitle,
  CButton,
} from "@coreui/react";
import { imageUrl } from "../utils/imageUrl";
import {
  uploadProject,
  displayAllProject,
  removeProject,
  updateProject,
} from "../Action/projectActions";
const Dashboard = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [id, setId] = useState("");
  const [visible, setVisible] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState(null);
  const [projectImage, setProjectImage] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const allProject = useSelector((state) => state.allProject);
  const { projects, errors } = allProject;
  const addProject = useSelector((state) => state.addProject);
  const { load, project, err } = addProject;
  const deleteProject = useSelector((state) => state.deleteProject);
  const { success: successDelete } = deleteProject;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  useEffect(() => {
    dispatch(displayAllProject());
  }, [dispatch, load, successDelete]);
  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
    setProjectImage(inputRef.current.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (projectImage && name && detail) {
      const formData = new FormData();
      formData.append("projectImage", projectImage, projectImage.name);
      formData.append("name", name);
      formData.append("detail", detail);

      dispatch(uploadProject(formData));
      console.log(formData);
    }
  };
  const UpdateHandler = (product) => {
    setName(product.name);
    setDetail(product.detail);
    setProjectImage(product.projectImage);
    setId(product._id);
    console.log(product._id);
    console.log(id);
    setVisible(true);
  };

  const submitUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectImage", projectImage, projectImage.name);
    formData.append("name", name);
    formData.append("detail", detail);
    dispatch(updateProject(id, formData));
  };
  const DeleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log(id);
      dispatch(removeProject(id));
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <CRow>
              <CCol md={12} className='mt-2'>
                {err && (
                  <CAlert color='danger' style={{ textAlign: "center" }}>
                    {err}
                  </CAlert>
                )}
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12} className='mt-2'>
                {errors && (
                  <CAlert color='danger' style={{ textAlign: "center" }}>
                    {errors}
                  </CAlert>
                )}
              </CCol>
            </CRow>
            <CRow>
              <CCol md={12}>
                {project && (
                  <CAlert color='success' style={{ textAlign: "center" }}>
                    {project.message}
                  </CAlert>
                )}
              </CCol>
            </CRow>
            <CRow className='justify-content-center'>
              <CCol md={12} className='mt-4'>
                <p className='text-gray-800 dark:text-gray-200 text-xl font-bold'>
                  Add New Product
                </p>
              </CCol>
              <CCol md={12} className='bg-white rounded-lg'>
                <CForm className='row  '>
                  <CCol md={6}>
                    <CInputGroup className='mb-3'>
                      <CInputGroupText>
                        <i class='fa fa-signature'></i>
                      </CInputGroupText>
                      <CFormInput
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </CInputGroup>
                  </CCol>
                  <CCol md={6}>
                    <CInputGroup className='mb-3'>
                      <CInputGroupText>
                        <i class='fa fa-signature'></i>
                      </CInputGroupText>
                      <CFormInput
                        placeholder='Enter details'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                      />
                    </CInputGroup>
                  </CCol>

                  <CRow className='my-4'>
                    <CCol md={6}>
                      <input
                        ref={inputRef}
                        onChange={handleDisplayFileDetails}
                        type='file'
                      />
                      {/* <Form.File
                        id='image-file'
                        label='choose File'
                        custom
                        onChange={handleDisplayFileDetails}
                      ></Form.File> */}
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md={3} xs={8}>
                      <Button
                        onClick={submit}
                        className='py-2 px-4 mt-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
                      >
                        {load ? "loading" : "add Project"}
                      </Button>
                    </CCol>
                  </CRow>
                </CForm>
              </CCol>
            </CRow>
          </Col>
          <Col md={4}>
            <ListGroup variant='flush'>
              <ListGroup.Item className='text-center'>
                <h2>User Profile</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Name:</Col>
                  <Col>{userInfo.name}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Email :</Col>
                  <Col>{userInfo.email}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <div className='mt-3'>
            <h4 className='font-semibold'>All Project</h4>
          </div>

          <Table striped bordered hover size='lg' variant='light'>
            <thead>
              <tr>
                <th> Name</th>
                <th>Project Image</th>
                <th>Details</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {projects &&
                projects.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>
                      <Image
                        className='roundedCircle'
                        style={{
                          width: "7rem",
                          height: "7rem",
                          objectFit: "cover",
                        }}
                        src={`${imageUrl}${product.projectImage}`}
                        alt={product.name}
                      />
                    </td>
                    <td>{product.detail}</td>
                    <td>
                      <button
                        style={{ border: "none" }}
                        onClick={() => DeleteHandler(product._id)}
                      >
                        <FiTrash />
                      </button>
                      <button
                        style={{ padding: "5px", border: "none" }}
                        onClick={() => UpdateHandler(product)}
                      >
                        <FiEdit />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
        <CModal
          alignment='center'
          size='lg'
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <CModalHeader>
            <CModalTitle>
              <p className='text-gray-800 dark:text-gray-200 text-xl font-bold'>
                Update Project
              </p>
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CRow className='justify-content-center'>
              <CForm className='row mx-4 g-3'>
                <CCol md={6}>
                  <CInputGroup className='mb-3'>
                    <CInputGroupText>
                      <i class='fas fa-signature'></i>
                    </CInputGroupText>
                    <CFormInput
                      placeholder='Enter Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CInputGroup className='mb-3'>
                    <CInputGroupText>
                      <i class='fas fa-signature'></i>
                    </CInputGroupText>
                    <CFormInput
                      placeholder='Enter Detail'
                      value={detail}
                      onChange={(e) => setDetail(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>

                <CRow className='my-3'>
                  <CCol md={3}>
                    <p className='text-gray-800 dark:text-gray-200 text-xl font-bold'>
                      Update Picture
                    </p>
                  </CCol>
                  <CCol md={6}>
                    <input
                      ref={inputRef}
                      onChange={handleDisplayFileDetails}
                      type='file'
                    />
                  </CCol>
                </CRow>
              </CForm>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color='secondary' onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color='primary'> upload project</CButton>
          </CModalFooter>
        </CModal>
      </Container>
    </>
  );
};

export default Dashboard;
