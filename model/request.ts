export interface Request{
    RequestId: string;
    CustomerProblem: string;
    Start: string;
    Customer: {RoomId: string}
    Status: string
}