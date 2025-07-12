
import { IVenda } from "../../@types/IVenda";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";
import { IVendaDia } from "../../@types/IVendaDia";
import Loading from "../Loading";



const transformData = (data: IVenda[]): IVendaDia[] => {
    const dias = data.reduce((acc: { [key: string]: IVendaDia }, item) => {
        const dia = item.data.split(" ")[0];
        if (!acc[dia]) {
            acc[dia] = {
                data: dia,
                pago: 0,
                falha: 0,
                processando: 0,
            };
        }
        acc[dia][item.status] += item.preco;
        return acc;
    }, {});

    return Object.values(dias).map((dia) => ({
        ...dia,
        data: dia.data.substring(5),
    }));
}



const GraficoVendas = ({ data, loading }: { data: IVenda[]; loading: boolean }) => {

    if (loading) {
        return <Loading />;
    }
    if (!data || data.length === 0) {
        return <div className="h-96 w-96 flex items-center justify-center" style={{ background: "var(--color-3)", borderRadius: "10px" }}><p>Não há dados para exibir no período.</p></div>;
    }

    const transformedData = transformData(data);

    const cardStyle = {
        backgroundColor: 'var(--color-5)',
        border: '1px solid var(--color-3)',
        borderRadius: 'var(--gap-s)',
        padding: 'var(--gap-s)',
    };
    return (
        <div>
            <div className="h-96 w-96">
                <ResponsiveContainer width="99%" height={400} style={{ background: "var(--color-3)", borderRadius: "10px", padding: "20px" }}>
                    <LineChart data={transformedData}>
                     <XAxis dataKey="data" />
                     <YAxis />
                     <Tooltip contentStyle={cardStyle} />
                        <Legend wrapperStyle={{ ...cardStyle, padding: 'var(--gap)' }} />
                        <Line type="monotone" dataKey="pago" name="Pago" stroke="var(--color-1)" strokeWidth={3} />
                        <Line type="monotone" dataKey="processando" name="Processando" stroke="#d4a953" strokeWidth={3} />
                        <Line type="monotone" dataKey="falha" name="Falha" stroke="#c95d5d" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GraficoVendas;
