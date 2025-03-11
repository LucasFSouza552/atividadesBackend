enum StatusPedido {
    PENDENTE,
    PAGO,
    CANCELADO
};

type Pedido = {
    id: number,
    valor: number,
    status: StatusPedido
};



function validarPedido(pedido: Pedido): string {
    if (pedido.status === StatusPedido.PAGO || pedido.status === StatusPedido.PENDENTE) {
        return "Pedido válido";
    } else {
        return "Não é possível processar pedidos cancelados"
    }
}

const pedido1: Pedido = {
    id: 1,
    valor: 300,
    status: StatusPedido.PAGO
}

const pedido2: Pedido = {
    id: 2,
    valor: 300,
    status: StatusPedido.CANCELADO
}

console.log(validarPedido(pedido1));
console.log(validarPedido(pedido2));