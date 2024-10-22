export interface Contract {
    ServicePackages:{
        Name: string
        Description: string
        NumOfRequest: string
        Policy: string
    }
    Customers:{
        FullName: string
        Email: string
        PhoneNumber: string
        AvatarUrl: string
        DateOfBirth: string;
    }
    ContractId: string
    FileUrl: string
    PurchaseTime: string
    ServicePackagePrices:{
        PriceByDate: number
    }
}