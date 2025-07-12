
import { IVenda } from "../../@types/IVenda";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";
import { IVendaDia } from "../../@types/IVendaDia";



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



const GraficoVendas = ({ data }: { data: IVenda[] }) => {
    const transformedData = transformData(data);
    return (
        <div>
            <div className="h-96 w-96">
                <ResponsiveContainer width="99%" height={400} style={{ background: "var(--color-3)", borderRadius: "10px", padding: "20px" }}>
                    <LineChart data={transformedData}>
                        <XAxis dataKey="data" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pago" stroke="#91d000" strokeWidth={3} />
                        <Line
                            type="monotone"
                            dataKey="processando"
                            stroke="#e2b941"
                            strokeWidth={3}
                        />
                        <Line
                            type="monotone"
                            dataKey="falha"
                            stroke="#FF0000"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default GraficoVendas;
