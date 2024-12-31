export default class Links {
    static server = "/dashboard";
    static transactionLink: (serial?: string | null) => string = (serial: string | null = null): string => {
        if (serial) {
            return `${Links.server}/transaction/${serial}`;
        } else {
            return `${Links.server}/transaction`;
        }
    };
    static transactionVerification: (serial: string, code: string) => string = (serial: string, code: string): string => {
        return `${Links.server}/transaction/${serial}/${code}`;
    }

    static foodLink: (uuid?: string | null) => string = (uuid: string | null = null): string => {
        if (uuid !== null) {
            return `${Links.server}/food/${uuid}`;
        } else {
            return `${Links.server}/food`;
        }
    };

    static extraLink: (uuid?: string | null) => string = (uuid: string | null = null): string => {
        if (uuid !== null) {
            return `${Links.server}/extras/${uuid}`;
        } else {
            return `${Links.server}/extras`;
        }
    };

    static instructionLink: (uuid?: string | null) => string = (uuid: string | null = null): string => {
        if (uuid !== null) {
            return `${Links.server}/instruction/${uuid}`;
        } else {
            return `${Links.server}/instruction`;
        }
    };
    static categoryLink: (uuid?: string | null) => string = (uuid: string | null = null): string => {
        if (uuid !== null) {
            return `${Links.server}/category/${uuid}`;
        } else {
            return `${Links.server}/category`;
        }
    };
}