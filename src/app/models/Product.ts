export interface Product {
    productID: number;
    code: string;
    companyID: number;
    description: string;
    groupCode: string;
    familyCode: string;
    uOMCode: string;
    isInventoryable: boolean;
    quantity: number;
    cost: number;
    salePrice: number;
    tax: string;
    picture: string [];
    gLTransactionID: string;
    gLAccountingCode: string;
    inactive: boolean;
    createdAt: string;
    modifyDate: string;
    modifiedBy: string;
    createdBy: string;
    shortDescription: string;
    stars: number;
}