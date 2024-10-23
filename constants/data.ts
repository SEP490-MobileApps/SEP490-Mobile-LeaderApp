import { Contract } from "@/model/contract";
import { Product } from "@/model/product";
import { Request } from "@/model/request";
import { User } from "@/model/user";
import { Worker } from "@/model/worker";

export const user: User = {
  AccountId: "1",
  Email: "johndoe@example.com",
  FullName: "John Doe",
  DateOfBirth: "2024-10-16T14:00:00Z",
  PhoneNumber: "1234567890",
  AvatarUrl:
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
  Role: "Leader",
};

// Requests with "New Request" status
export const newRequests: Request[] = [
  {
    RequestId: "1",
    CustomerProblem: "Water leakage in bathroom",
    Start: "2024-10-15T09:00:00Z",
    Customer: {
      RoomId: "A102",
    },
    Status: "Yêu Cầu Mới", // New Request
  },
];

// Requests with "In Progress" status
export const inProgressRequests: Request[] = [
  {
    RequestId: "2",
    CustomerProblem: "Electrical short circuit in kitchen",
    Start: "2024-10-16T14:00:00Z",
    Customer: {
      RoomId: "B305",
    },
    Status: "Đang thực hiện", // In Progress
  },
];

// Requests with "Completed" status
export const completedRequests: Request[] = [
  {
    RequestId: "3",
    CustomerProblem: "Air conditioner not cooling",
    Start: "2024-10-17T10:30:00Z",
    Customer: {
      RoomId: "C204",
    },
    Status: "Hoàn thành", // Completed
  },
];

export const cancelledRequests: Request[] = [
  {
    RequestId: "4",
    CustomerProblem: "Broken window in living room",
    Start: "2024-10-18T08:00:00Z",
    Customer: {
      RoomId: "D101",
    },
    Status: "Hủy bỏ", // Cancelled
  },
];

// Requests with "Cancelled" status

export const contracts: Contract[] = [
  {
    ServicePackages: {
      Name: "Basic Electrical Service",
      Description: "Covers basic electrical repairs and maintenance.",
      NumOfRequest: "10",
      Policy: "<strong>Policy:</strong> Valid for 1 year, 24/7 support",
    },
    Customers: {
      FullName: "John Doe",
      Email: "john.doe@example.com",
      PhoneNumber: "123-456-7890",
      DateOfBirth:"2024-01-10T09:15:00Z",
      AvatarUrl:
      "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    ContractId: "C-001",
    FileUrl: "https://example.com/contracts/C-001.pdf",
    PurchaseTime: "2024-01-10T09:15:00Z",
    ServicePackagePrices: {
      PriceByDate: 100
    }
  },
  {
    ServicePackages: {
      Name: "Premium Water Service",
      Description:
        "Includes comprehensive water system repairs and inspections.",
      NumOfRequest: "15",
      Policy: "<strong>Policy:</strong> Valid for 2 years, priority support",
    },
    Customers: {
      FullName: "Jane Smith",
      Email: "jane.smith@example.com",
      PhoneNumber: "987-654-3210",
      DateOfBirth:"2024-01-10T09:15:00Z",
      AvatarUrl:
      "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    ContractId: "C-002",
    FileUrl: "https://example.com/contracts/C-002.pdf",
    PurchaseTime: "2024-02-15T11:30:00Z",
    ServicePackagePrices: {
      PriceByDate: 200
    }
  },
  {
    ServicePackages: {
      Name: "Standard Electrical and Water Service",
      Description:
        "Combined package for electrical and water system maintenance.",
      NumOfRequest: "20",
      Policy: "<strong>Policy:</strong> Valid for 18 months, standard support",
    },
    Customers: {
      FullName: "Alice Johnson",
      Email: "alice.johnson@example.com",
      PhoneNumber: "555-123-4567",
      DateOfBirth:"2024-01-10T09:15:00Z",
      AvatarUrl:
      "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    ContractId: "C-003",
    FileUrl: "https://example.com/contracts/C-003.pdf",
    PurchaseTime: "2024-03-20T14:45:00Z",
    ServicePackagePrices: {
      PriceByDate: 300
    }
  },
  {
    ServicePackages: {
      Name: "Ultimate Repair Service",
      Description: "Unlimited requests for both electrical and water repairs.",
      NumOfRequest: "Unlimited",
      Policy: "<strong>Policy:</strong> Valid for 3 years, 24/7 priority support",
    },
    Customers: {
      FullName: "Bob Lee",
      Email: "bob.lee@example.com",
      PhoneNumber: "444-555-6666",
      DateOfBirth:"2024-01-10T09:15:00Z",
      AvatarUrl:
      "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    },
    ContractId: "C-004",
    FileUrl: "https://example.com/contracts/C-004.pdf",
    PurchaseTime: "2024-04-05T16:00:00Z",
    ServicePackagePrices: {
      PriceByDate: 400
    }
  },
];


export const products: Product[] = [
  {
    ProductId: "1",
    Name: "Wireless Earbuds",
    Description:
      "High-quality noise-cancelling wireless earbuds with long battery life.",
    ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
    In_Of_Stock: 0,
    WarrantyMonths: 2,
    ProductPrices: {
      PriceByDate: 100,
    },
  },
  {
    ProductId: "2",
    Name: "Smartphone",
    Description:
      "Latest model with advanced camera features and fast processing.",
    ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
    In_Of_Stock: 10,
    WarrantyMonths: 3,
    ProductPrices: {
      PriceByDate: 100,
    },
  },
  {
    ProductId: "3",
    Name: "Gaming Laptop",
    Description:
      "Powerful gaming laptop with a high refresh rate display and RGB lighting.",
    ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
    In_Of_Stock: 15,
    WarrantyMonths: 4,
    ProductPrices: {
      PriceByDate: 100,
    },
  },
  {
    ProductId: "4",
    Name: "Smartwatch",
    Description:
      "Stylish smartwatch with health tracking features and customizable watch faces.",
    ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
    In_Of_Stock: 20,
    WarrantyMonths: 5,
    ProductPrices: {
      PriceByDate: 100,
    },
  },
];

export const workers: Worker[] = [
  {
    AccountId: "1",
    Email: "john.doe@example.com",
    FullName: "John Doe",
    DateOfBirth: "2024-01-10T09:15:00Z", 
    PhoneNumber: "1234567890",  
    AvatarUrl:
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
  },
  {
    AccountId: "2",
    Email: "jane.smith@example.com",
    FullName: "Jane Smith",
    DateOfBirth: "2024-01-10T09:15:00Z",  
    PhoneNumber: "9876543210",  
    AvatarUrl:
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
  },
  {
    AccountId: "3",
    Email: "mike.jones@example.com",
    FullName: "Mike Jones",
    DateOfBirth: "2024-01-10T09:15:00Z",  
    PhoneNumber: "5555555555",  
    AvatarUrl:
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
  },
  {
    AccountId: "4",
    Email: "lisa.white@example.com",
    FullName: "Lisa White",
    DateOfBirth: "2024-01-10T09:15:00Z",
    PhoneNumber: "4444444444",  
    AvatarUrl:
    "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
  },
];