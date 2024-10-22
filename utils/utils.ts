export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
}

export const formatCurrency = (
    amount: number | null | undefined,
    locale: "vi-VN" = "vi-VN"
  ) => {
    let returnAmount = 0;
  
    if (amount === null || amount === undefined) {
      return returnAmount.toLocaleString(locale, {
        style: "currency",
        currency: "VND",
        currencyDisplay: "code" 
      });
    }
  
    if (locale === "vi-VN") {
      returnAmount = amount * 1000;
    }
  
    return returnAmount.toLocaleString(locale, {
      style: "currency",
      currency: "VND",
      currencyDisplay: "code"
    });
  };
  