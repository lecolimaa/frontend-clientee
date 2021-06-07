import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import MainCliente from './pages/cliente/main';
import DetalhesCliente from './pages/cliente/detalhes';
import CriarCliente from './pages/cliente/criar';
import EditarCliente from './pages/cliente/editar';
import DeletarCliente from './pages/cliente/deletar';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/clientes" component={MainCliente} />
            <Route path="/clientes/:id" component={DetalhesCliente} />
            <Route path="/criarCliente" component={CriarCliente} />
            <Route path="/editarCliente/:id" component={EditarCliente} />
            <Route path="/deletarCliente/:id" component={DeletarCliente} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;
