import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import useLoadUser from '../../hook/useLoadUser';

const ListPage = () => {

    const { users } = useLoadUser();

    return (
        <Container>

            <h2>Lista de Usuarios</h2>
            <Row>
                <Col>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ListPage