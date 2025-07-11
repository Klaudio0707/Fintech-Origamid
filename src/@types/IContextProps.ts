import { IVenda } from "./IVenda";

export type IDataContext = {
    loading: boolean;
    error: string | null;
    data: IVenda[] | null;
    inicio: string;
    final: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}
