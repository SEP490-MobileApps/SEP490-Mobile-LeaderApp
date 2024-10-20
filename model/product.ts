export interface Product {
    ProductId: string;
    Name: string;
    Description: string;
    ImageUrl: string;
    In_Of_Stock: number;
    WarrantyMonths: number;
    ProductPrices: {
        PriceByDate: number
    }
}