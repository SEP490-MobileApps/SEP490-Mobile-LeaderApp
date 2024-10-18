import { User } from "@/model/user";

export const user: User = {
    Email: "johndoe@example.com",
    FullName: "John Doe",
    DateOfBirth: 19900115,
    PhoneNumber: 1234567890,
    AvatarUrl: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    Role: "Leader"
};

import { Request } from "@/model/request";
import { Product } from "@/model/product";

export const requests: Request[] = [
    {
      RequestId: "1",
      CustomerProblem: "Water leakage in bathroom",
      Start: "2024-10-15T09:00:00Z",
      Customer: {
        RoomId: "A102",
      },
      Status: "Yêu Cầu Mới", // Changed to "New Request"
    },
    {
      RequestId: "2",
      CustomerProblem: "Electrical short circuit in kitchen",
      Start: "2024-10-16T14:00:00Z",
      Customer: {
        RoomId: "B305",
      },
      Status: "Đang thực hiện", // Changed to "In Progress"
    },
    {
      RequestId: "3",
      CustomerProblem: "Air conditioner not cooling",
      Start: "2024-10-17T10:30:00Z",
      Customer: {
        RoomId: "C204",
      },
      Status: "Hoàn thành", // Changed to "Completed"
    },
    {
      RequestId: "4",
      CustomerProblem: "Broken window in living room",
      Start: "2024-10-18T08:00:00Z",
      Customer: {
        RoomId: "D101",
      },
      Status: "Hủy bỏ", // Changed to "Cancelled"
    },
  ];

  export const products: Product[] = [
    {
      ProductId: "1",
      Name: "Wireless Earbuds",
      Description: "High-quality noise-cancelling wireless earbuds with long battery life.",
      ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
      In_Of_Stock: 5,
      ProductPrices: {
        PriceByDate: 100
    }
    },
    {
      ProductId: "2",
      Name: "Smartphone",
      Description: "Latest model with advanced camera features and fast processing.",
      ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
      In_Of_Stock: 10,
      ProductPrices: {
        PriceByDate: 100
    }
    },
    {
      ProductId: "3",
      Name: "Gaming Laptop",
      Description: "Powerful gaming laptop with a high refresh rate display and RGB lighting.",
      ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
      In_Of_Stock: 15,
      ProductPrices: {
        PriceByDate: 100
    }
    },
    {
      ProductId: "4",
      Name: "Smartwatch",
      Description: "Stylish smartwatch with health tracking features and customizable watch faces.",
      ImageUrl: "https://m.media-amazon.com/images/I/51Wwg4MvY8L.jpg",
      In_Of_Stock: 20,
      ProductPrices: {
        PriceByDate: 100
    }
    },
  ];
  
  