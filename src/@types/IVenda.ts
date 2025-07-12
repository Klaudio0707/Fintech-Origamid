export type IVenda = {
    id: string;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha";
    pagamento: "cartao" | "pix" | "boleto";
    data: string;
    parcelas: number | null;
}
